const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON body

let doors = [
  { id: "1", name: "Main Entrance", material: "Wood" },
  { id: "2", name: "Back Door", material: "Metal" }
];

// ✅ GET all doors
app.get("/doors", (req, res) => {
  res.json(doors);
});

// ✅ PUT to update a door
app.put("/doors/:id", (req, res) => {
  const { id } = req.params;
  const { name, material } = req.body;
  
  const item = doors.find(door => door.id === id);
  if (!item) return res.status(404).json({ message: "Item not found" });

  item.name = name;
  item.material = material;
  res.json(item);
});

// ✅ DELETE a door
app.delete("/doors/:id", (req, res) => {
  const { id } = req.params;
  const index = doors.findIndex(door => door.id === id);
  if (index === -1) return res.status(404).json({ message: "Item not found" });

  doors.splice(index, 1);
  res.status(204).send();
});

// ✅ Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));