// Original FEC Code
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
const { promisify } = require('util');
const pool = new Pool({
  host: 'localhost',
  user: 'kkha',
  database: 'reviews',
  port: '5432'
})

const query = promisify(pool.query).bind(pool);

//GET
const getProductReview = (productId, callback) => {
  pool.query(`SELECT * FROM reviews r, users u WHERE productId = ${productId} AND r.userId = u.id;`)
  // pool.query(`SELECT id FROM users ORDER BY id DESC LIMIT 1;`)
    .then((success) => callback(null, success))
    .catch((err) => callback(err))
}

// const getProductReview = (productId, callback) => {
//   pool.query(`SELECT (r.id, r.reviewtitle, r.reviewtext, r.reviewdate, r.broadageappeal, r.lengthofplay, r.quality, r.value, r.average, r.wouldrecommend, r.verified, r.productid, r.userid, u.username) FROM reviews r, users u WHERE r.productId = ${productId} AND r.userId = u.id;`)
//     .then((success) => callback(null, success))
//     .catch((err) => callback(err))
// }


//POST
const postProductReview = (reviewObj, productId, callback) => {
  pool.query(`INSERT INTO users (username) VALUES ('${reviewObj.username}');`)
  .catch((err) => console.log(err))
  .then(() => pool.query('SELECT id FROM users ORDER BY id desc limit 1;'))
  .catch((err) => console.log(err))
  .then((user) => pool.query(`INSERT INTO reviews(reviewtitle, reviewtext, reviewdate, broadageappeal, lengthofplay, quality, value, average, wouldrecommend, verified, productid, userid) VALUES ('${reviewObj.reviewtitle}', '${reviewObj.reviewtext}', '${reviewObj.reviewdate}', ${reviewObj.broadageappeal}, ${reviewObj.lengthofplay}, ${reviewObj.quality}, ${reviewObj.value}, ${reviewObj.average}, ${reviewObj.wouldrecommend}, ${reviewObj.verified}, ${productId}, ${user.rows[0].id});`))
  .catch((err) => console.log(err))
  .then((success) => callback(null, success))
}

module.exports = { pool, getProductReview, postProductReview };