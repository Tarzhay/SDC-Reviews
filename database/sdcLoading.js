const db = require('./index.js') ;
const neo4j = require('neo4j-driver');

//PostgreSQL Loader
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

db.pool.query(`COPY reviews(userName,productName,reviewTitle,reviewText,reviewDate,broadAgeAppeal,lengthOfPlay,quality,value,average,wouldRecommend,verified,productId,userId) FROM '/Users/kkha/HackReactor/SDC-Reviews/database/csvData/Postgres/reviews.csv' DELIMITER ',' CSV HEADER`, (err, success)=> {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully loaded in Reviews');
  }
})

//Neo4j Loader
const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'password'));
const session = driver.session();

session.writeTransaction((tx) => tx.run(`
LOAD CSV WITH HEADERS FROM "file:///users.csv" AS csvLine
CREATE (u: User { id: toInteger(csvLine.id), userName: csvLine.userName})`))
.catch((err)=> console.log(err))
.then((result)=> {
  console.log('Successfully imported user data')
  return session.writeTransaction((tx) => tx.run(`
  LOAD CSV WITH HEADERS FROM "file:///products.csv" AS csvLine
  CREATE (p: Product { id: toInteger(csvLine.id), productName: csvLine.productName})`))
})
.catch((err) => console.log(err))
.then((result1)=> {
  console.log('Successfully imported product data')
  return session.writeTransaction((tx) => tx.run(`
  LOAD CSV WITH HEADERS FROM "file:///reviews.csv" AS csvLine
  CREATE (r: Review {
    id: toInteger(csvLine.id),
    userName: csvLine.userName,
    reviewTitle: csvLine.reviewTitle,
    reviewText: csvLine.reviewText,
    reviewData: csvLine.reviewDate,
    broadAgeAppeal: toInteger(csvLine.broadAgeAppeal),
    lengthOfPlay: toInteger(csvLine.lengthOfPlay),
    quality: toInteger(csvLine.quality),
    value: toInteger(csvLine.value),
    average: toInteger(csvLine.average),
    wouldRecommend: toInteger(csvLine.wouldRecommend),
    verified: toInteger(csvLine.verified),
    productId: toInteger(csvLine.productId),
    userId: toInteger(csvLine.userId)})`))
})
.catch((err) => console.log(err))
.then((result2) => {
  console.log('Successfully imported review data')
  return session.writeTransaction((tx) => tx.run(`
  LOAD CSV WITH HEADERS FROM "file:///reviews.csv" AS csvLine
  MATCH (user:User {id: toInteger(csvLine.userId)}), (review:Review {id: toInteger(csvLine.userId)})
  CREATE (user)-[:REVIEWED]->(review)`))
})
.catch((err) => console.log(err))
.then((result3) => {
  console.log('Successfully created user --> review relationship')
  return session.writeTransaction((tx) => tx.run(`
  LOAD CSV WITH HEADERS FROM "file:///reviews.csv" AS csvLine
  MATCH (review:Review {id: toInteger(csvLine.productId)}), (product:Product {id: toInteger(csvLine.productId)})
  CREATE (review)-[:TIED_TO]->(product)`))
})
.catch((err) => console.log(err))
.then((result4) => {
  console.log('Successfully created review --> product relationship')
})