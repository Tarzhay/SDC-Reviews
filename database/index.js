//Original FEC Code
// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'reviews'
// })

// connection.connect();

// module.exports = {connection};

const { Pool } = require('pg');
const pool = new Pool({
  host: 'localhost',
  user: 'kkha',
  database: 'reviews',
  port: '5432'
})

module.exports = { pool };