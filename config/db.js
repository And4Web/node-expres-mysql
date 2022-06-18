const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  password: process.env.DB_PASSWORD,
});

let sql = "SELECT * FROM blog_posts;";

pool.query(sql, function (err, rows) {
  console.log(rows);
});

module.exports = pool.promise();
