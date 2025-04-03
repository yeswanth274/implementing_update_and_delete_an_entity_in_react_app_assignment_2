import { useState, useEffect } from "react";

function ItemList() {
  const [items, setItems] = useState([]);

  // Fetch items from API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/doors")
      .then(response => response.json())
      .then(data => {
        console.log("Fetched Data:", data); // Debugging
        setItems(data);
      })
      .catch(error => console.error("Error fetching items:", error));
  }, []);

  return (
    <div>
      <h2>Item List</h2>
      <pre>Debug Items: {JSON.stringify(items, null, 2)}</pre> {/* Debugging */}
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} - {item.material}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;