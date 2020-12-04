//NEO4J Database Schema + Load

//users.csv
id, user_name
1, Happy Hippo
2, Lazy Gorilla

//products.csv
id, productName
1, Frying Pan
2, Instant Pot

//reviews.csv
id, userId, productId, user_name, productName, reviewTitle, reviewText, reviewDate, broadAgeAppeal, lengthOfPlay, quality, value, average, wouldRecommend, verified

1, 2, 1, Lazy Gorilla, Instant Pot, I like the pot, This is a really good pot, Thu Dec 03 2020, 5, 1, 4, 2, 3, 0, 0

//Constraints
CREATE CONSTRAINT userIdConstraint ON (user:User) ASSERT user.id IS UNIQUE

CREATE CONSTRAINT productIdConstraint ON (product:Product) ASSERT product.id IS UNIQUE

CREATE CONSTRAINT reviewIdConstraint ON (review:Review) ASSERT review.id IS UNIQUE

// CREATE INDEX FOR (p:Product) ON (p.id)

//Loading CSV
//users.csv
USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///users.csv" AS csvLine
CREATE (u: User { id: toInteger(csvLine.id), user_name: csvLine.user_name})

//products.csv
USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///products.csv" AS csvLine
CREATE (p: Product { id: toInteger(csvLine.id), productName: csvLine.productName})

//reviews.csv
USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "file:///reviews.csv" AS csvLine
CREATE (r: Review {
  id: toInteger(csvLine.id),
  userId: toInteger(csvLine.userId),
  productId: toInteger(csvLine.productId),
  user_name: csvLine.user_name,
  reviewTitle: csvLine.reviewTitle,
  reviewText: csvLine.reviewText,
  reviewData: csvLine.reviewDate,
  broadAgeAppeal: toInteger(csvLine.broadAgeAppeal),
  lengthOfPlay: toInteger(csvLine.lengthOfPlay),
  quality: toInteger(csvLine.quality),
  value: toInteger(csvLine.value),
  average: toInteger(csvLine.average),
  wouldRecommend: toInteger(csvLine.wouldRecommend),
  verified: toInteger(csvLine.verified)
  })
MATCH (user:User {id: toInteger(csvLine.userId)}), (review:Review {id: toInteger(csvLine.userId)})
CREATE (user)-[:REVIEWED]->(review)

MATCH (review:Review {id: toInteger(csvLine.productId)}), (product:Product {id: toInteger(csvLine.productId)})
CREATE (review)-[:TIED_TO]->(product)



