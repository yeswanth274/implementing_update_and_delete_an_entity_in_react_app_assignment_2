import { useState } from "react";

const Item = ({ item, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);
  const [editedMaterial, setEditedMaterial] = useState(item.material);

  const handleUpdate = () => {
    onUpdate(item.id, { ...item, name: editedName, material: editedMaterial });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="text"
            value={editedMaterial}
            onChange={(e) => setEditedMaterial(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          {item.name} - {item.material}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Item;