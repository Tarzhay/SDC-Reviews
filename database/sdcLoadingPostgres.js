const db = require('./index.js') ;

//PostgreSQL Loader
// console.time('postgresLoadData')
db.pool.query(`COPY users(userName) FROM '/Users/kkha/HackReactor/SDC-Reviews/database/csvData/Postgres/users.csv' DELIMITER ',' CSV HEADER`, (err, success)=> {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully loaded in Users');
  }
})

db.pool.query(`COPY products(productName) FROM '/Users/kkha/HackReactor/SDC-Reviews/database/csvData/Postgres/products.csv' DELIMITER ',' CSV HEADER`, (err, success)=> {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully loaded in Products');
  }
})

db.pool.query(`COPY reviews(reviewTitle,reviewText,reviewDate,broadAgeAppeal,lengthOfPlay,quality,value,average,wouldRecommend,verified,productId,userId) FROM '/Users/kkha/HackReactor/SDC-Reviews/database/csvData/Postgres/reviews.csv' DELIMITER ',' CSV HEADER`, (err, success)=> {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully loaded in Reviews');
    // console.timeEnd('postgresLoadData')
  }
})

//EC2
// db.pool.query(`COPY users(userName) FROM '/home/ubuntu/SDC-Reviews/database/users.csv' DELIMITER ',' CSV HEADER`, (err, success)=> {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully loaded in Users');
//   }
// })

// db.pool.query(`COPY products(productName) FROM '/home/ubuntu/SDC-Reviews/database/products.csv' DELIMITER ',' CSV HEADER`, (err, success)=> {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully loaded in Products');
//   }
// })

// db.pool.query(`COPY reviews(reviewTitle,reviewText,reviewDate,broadAgeAppeal,lengthOfPlay,quality,value,average,wouldRecommend,verified,productId,userId) FROM '/home/ubuntu/SDC-Reviews/database/reviews.csv' DELIMITER ',' CSV HEADER`, (err, success)=> {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully loaded in Reviews');
//     // console.timeEnd('postgresLoadData')
//   }
// })