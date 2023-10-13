const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "xxzz",
  host: "localhost",
  port: 5432,
  database: "movielist",
});

module.exports = pool;
