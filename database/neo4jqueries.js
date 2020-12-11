const neo4j = require('neo4j-driver');

//Neo4j Loader
const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'password'));
const session = driver.session();
console.time('test')

//GET
// session.run(`
//   MATCH node = (user:User {id:6675206})-[:REVIEWED]->(review:Review {userId:6675206})-[:TIED_TO]->(product:Product {id: review.productId}) RETURN node
// `)
session.run(`
  MATCH node = ()-[:REVIEWED]->()-[:TIED_TO]->() RETURN node LIMIT 25
`)
// session.run(`
//   MATCH (r:Review {id: 123456})
//   RETURN r
// `)
// session.run(`
//   CREATE (u:User {id:10000001, userName:"Kenny Kha"})
// `)
.catch((err) => console.log(err))
.then((success) => {
  console.log(success)
  // console.log(success.summary.updateStatistics)
  // console.log(success.records[0]._fields[0].properties)
  // console.log(success.records.map((record) => {
  //   console.log(record.get('node'))
  // }))
  console.timeEnd('test')
})

