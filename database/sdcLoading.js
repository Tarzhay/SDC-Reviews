const db = require('./index.js') ;
const neo4j = require('neo4j-driver');

// db.pool.query(`COPY users(user_name) FROM '/Users/kkha/HackReactor/SDC-Reviews/database/csvData/Postgres/users.csv' DELIMITER ',' CSV HEADER`, (err, success)=> {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully loaded in Users');
//   }
// })

// db.pool.query(`COPY products(productName) FROM '/Users/kkha/HackReactor/SDC-Reviews/database/csvData/Postgres/products.csv' DELIMITER ',' CSV HEADER`, (err, success)=> {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully loaded in Products');
//   }
// })

// db.pool.query(`COPY reviews(user_name,productName,reviewTitle,reviewText,reviewDate,broadAgeAppeal,lengthOfPlay,quality,value,average,wouldRecommend,verified,productId,userId) FROM '/Users/kkha/HackReactor/SDC-Reviews/database/csvData/Postgres/reviews.csv' DELIMITER ',' CSV HEADER`, (err, success)=> {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully loaded in Reviews');
//   }
// })

const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'password'));
const session = driver.session();
session
  .run('MATCH(n) RETURN n LIMIT 10')
  .then((result) => console.log(result))
  .catch((err) => console.log(err))