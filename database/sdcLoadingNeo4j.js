const neo4j = require('neo4j-driver');

//Neo4j Loader
const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'password'));
const session = driver.session();

// session.run(`
//   MATCH (n) DETACH DELETE n
// `)
session.run(`
  CALL apoc.periodic.iterate(
  "MATCH (n) return n", "DETACH DELETE n", {batchSize:100000})
`)
.catch((err)=> console.log(err))
.then(() => {
  return session.run(`
  USING PERIODIC COMMIT 100000
  LOAD CSV WITH HEADERS FROM "file:///users.csv" AS csvLine
  CREATE (u: User { id: toInteger(csvLine.id), userName: csvLine.userName})`)
})
.catch((err)=> console.log(err))
.then(()=> {
  console.log('Successfully imported user data')
  return session.run(`
  USING PERIODIC COMMIT 100000
  LOAD CSV WITH HEADERS FROM "file:///products.csv" AS csvLine
  CREATE (p: Product { id: toInteger(csvLine.id), productName: csvLine.productName})`)
})
.catch((err) => console.log(err))
.then(()=> {
  console.log('Successfully imported product data')
  return session.run(`
  USING PERIODIC COMMIT 100000
  LOAD CSV WITH HEADERS FROM "file:///reviews.csv" AS csvLine
  CREATE (r: Review {
    id: toInteger(csvLine.id),
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
    userId: toInteger(csvLine.userId)})`)
})
.catch((err) => console.log(err))
.then(() => {
  console.log('Successfully imported review data')
  return session.run(`
  CALL apoc.schema.assert(null,{User:['id'], Product:['id'], Review:['id']})
  `)
})
.catch((err)=> console.log(err))
.then((result2) => {
  console.log('Successfully created constraints')
  return session.run(`
    CALL apoc.periodic.iterate(
    "MATCH (u:User),(r:Review)
    WHERE u.id = r.userId RETURN u,r", "MERGE (u)-[:REVIEWED]->(r)", {batchSize:100000})
  `)
})
.catch((err) => console.log(err))
.then((result3) => {
  console.log('Successfully created user --> review relationship')
  return session.run(`
    CALL apoc.periodic.iterate(
    "MATCH (r:Review),(p:Product)
    WHERE r.productId = p.id RETURN r,p", "MERGE (r)-[:TIED_TO]->(p)", {batchSize:100000})
  `)
})
.catch((err) => console.log(err))
.then(() => {
  console.log('Successfully created review --> product relationship')
})