const JSONdb = require("simple-json-db");
const path = require("path");

// const dbPath = path.resolve(__dirname, "data.json");
const dbPath = path.resolve(__dirname, '../', 'database.json');

const db = new JSONdb(dbPath);

module.exports = db;