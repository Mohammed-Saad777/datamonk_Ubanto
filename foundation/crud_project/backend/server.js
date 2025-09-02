const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect SQLite DB (file create ho jayegi agar nahi hai)
const db = new sqlite3.Database("./crud.db", (err) => {
  if (err) console.error("❌ Database error:", err);
  else console.log("✅ Connected to SQLite database");
});

// Create table if not exists
db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)");

// CREATE
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  db.run("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name, email });
  });
});

// READ
app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// UPDATE
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  db.run("UPDATE users SET name = ?, email = ? WHERE id = ?", [name, email, id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ updatedID: id, name, email });
  });
});

// DELETE
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM users WHERE id = ?", [id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deletedID: id });
  });
});

// Start server
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
