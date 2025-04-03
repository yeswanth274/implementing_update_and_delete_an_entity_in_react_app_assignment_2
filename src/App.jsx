import { useState } from "react";
import Item from "./components/Item";

const App = () => {
  const [items, setItems] = useState([
    { id: "1", name: "Main Entrance", material: "Wood" },
    { id: "2", name: "Back Door", material: "Metal" },
  ]);

  const handleUpdate = (id, updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Item Management System</h1>
      <h2>Item List</h2>
      <p>Debug Items: {JSON.stringify(items, null, 2)}</p>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default App;