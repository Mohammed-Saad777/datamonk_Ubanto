const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../', process.env.DB_NAME || 'db.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error("DB Connection Error:", err);
    else console.log(`Connected to SQLite: ${dbPath}`);
});

module.exports = db;
