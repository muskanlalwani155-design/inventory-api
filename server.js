const express = require("express");
const app = express();
 
// Middleware: lets Express read JSON sent in the request body
app.use(express.json());
 
// Our data (stored in memory, resets when the server restarts)
let items = [
  { id: 1, name: "Laptop", quantity: 10 },
  { id: 2, name: "Mouse", quantity: 50 },
];
 
// READ all items
app.get("/items", (req, res) => {
  res.json(items);
});
 
// READ one item
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id == req.params.id);
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
});
 
// CREATE a new item
app.post("/items", (req, res) => {
  const newItem = { id: Date.now(), name: req.body.name, quantity: req.body.quantity };
  items.push(newItem);
  res.status(201).json(newItem);
});
 
// UPDATE an item
app.put("/items/:id", (req, res) => {
  const item = items.find((i) => i.id == req.params.id);
  if (!item) return res.status(404).json({ error: "Item not found" });
  item.name = req.body.name;
  item.quantity = req.body.quantity;
  res.json(item);
});
 
// DELETE an item
app.delete("/items/:id", (req, res) => {
  items = items.filter((i) => i.id != req.params.id);
  res.json({ message: "Item deleted" });
});
 
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});