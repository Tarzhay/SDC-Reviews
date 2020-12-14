const faker = require('faker/locale/en.js');
const fs = require('fs');
const path = require('path');
const db = require('./index.js');

const reviewBuilder = () => {
  const ratingRange = { min: 1, max: 5};
  const recommend = { min: 0, max: 1}
  const totalRange = { min: 1, max: 500}

  //Sub optimal way to get average into object
  const broadAgeRating = faker.random.number(ratingRange);
  const lengthOfRating = faker.random.number(ratingRange);
  const qualityRating = faker.random.number(ratingRange);
  const valueRating = faker.random.number(ratingRange);

  return {
    userName: faker.internet.userName(),
    productName: faker.commerce.productName(),
    reviewTitle: faker.company.catchPhrase(),
    reviewText: faker.company.catchPhrase(),
    reviewDate: faker.date.recent().toString().split('').slice(0, 15).join(''),
    broadAgeAppeal: broadAgeRating,
    lengthOfPlay: lengthOfRating,
    quality: qualityRating,
    value: valueRating,
    average: (broadAgeRating + lengthOfRating + qualityRating + valueRating) / 4,
    wouldRecommend: faker.random.number(recommend),
    verified: faker.random.number(recommend),
    productId: faker.random.number(totalRange),
    userId: faker.random.number(totalRange)
  }
}

// Building PostgreSQL CSV Files (Drain)
const rows = 10000;
const usersFileName = fs.createWriteStream(path.join(__dirname, 'csvData/Postgres/users.csv'))
const productsFileName = fs.createWriteStream(path.join(__dirname, 'csvData/Postgres/products.csv'))
const reviewsFileName = fs.createWriteStream(path.join(__dirname, 'csvData/Postgres/reviews.csv'))

usersFileName.write('userName\n', 'utf-8')
productsFileName.write('productName\n', 'utf-8')
reviewsFileName.write('reviewTitle,reviewText,reviewDate,broadAgeAppeal,lengthOfPlay,quality,value,average,wouldRecommend,verified,productId,userId\n', 'utf-8')

//Build Postgres Data
const postgresDataPrimaryUser = (writeFile, encoding, callback) => {
  // console.time('postgresDataPrimaryUser')
  let i = rows;
  let id = 0;

  const write = () => {
    let userOk = true;
    do {
      i--;
      id++;
      const review = reviewBuilder();
      const userString = `${review.userName}\n`;
      if (i === 0) {
        usersFileName.write(userString, encoding, callback);
      } else {
          userOk = usersFileName.write(userString, encoding);
      }
    } while (i > 0 && userOk)
    if (i > 0) {
      usersFileName.once('drain', write);
    }
  }
  write();
}

const postgresDataPrimaryProduct = (writeFile, encoding, callback) => {
  let i = rows;
  let id = 0;

  const write = () => {
    let productOk = true;
    do {
      i--;
      id++;
      const review = reviewBuilder();
      const productString = `${review.productName}\n`;
      if (i === 0) {
        productsFileName.write(productString, encoding, callback);
      } else {
          productOk = productsFileName.write(productString, encoding);
      }
    } while (i > 0 && productOk)
    if (i > 0) {
      productsFileName.once('drain', write);
    }
  }
  write();
}

const postgresDataSecondaryReview = (writeFile, encoding, callback) => {
  let i = rows;
  let id = 0;

  const write = () => {
    let reviewOk = true;
    do {
      i--;
      id++;
      const review = reviewBuilder();
      const reviewString = `${review.reviewTitle},${review.reviewText},${review.reviewDate},${review.broadAgeAppeal},${review.lengthOfPlay},${review.quality},${review.value},${review.average},${review.wouldRecommend},${review.verified},${review.productId},${review.userId}\n`;
      if (i === 0) {
        reviewsFileName.write(reviewString, encoding, callback);
      } else {
        reviewOk = reviewsFileName.write(reviewString, encoding);
      }
    } while (i > 0 && reviewOk)
    if (i > 0) {
      reviewsFileName.once('drain', write);
    }
  }
  write();
}

postgresDataPrimaryUser(usersFileName,'utf-8',()=>{
  usersFileName.end();
  console.log('Created Primary User Data');
  postgresDataPrimaryProduct(productsFileName,'utf-8',()=>{
    productsFileName.end();
    console.log('Created Primary Product Data');
    postgresDataSecondaryReview(reviewsFileName,'utf-8',()=>{
      reviewsFileName.end();
      console.log('Created Second Review Data');
    })
  })
})

// ---------------------------------------------------------------------------------

// Build Neo4j CSV Data (Drain)
// const usersFileNameNeo4j = fs.createWriteStream('/Users/kkha/Library/Application Support/com.Neo4j.Relate/Data/dbmss/dbms-1a84320b-b9e5-4fe8-8fa9-e8317faeb36c/import/users.csv')
// const productsFileNameNeo4j = fs.createWriteStream('/Users/kkha/Library/Application Support/com.Neo4j.Relate/Data/dbmss/dbms-1a84320b-b9e5-4fe8-8fa9-e8317faeb36c/import/products.csv')
// const reviewsFileNameNeo4j = fs.createWriteStream('/Users/kkha/Library/Application Support/com.Neo4j.Relate/Data/dbmss/dbms-1a84320b-b9e5-4fe8-8fa9-e8317faeb36c/import/reviews.csv')

// usersFileNameNeo4j.write('id,userName\n')
// productsFileNameNeo4j.write('id,productName\n')
// reviewsFileNameNeo4j.write('id,reviewTitle,reviewText,reviewDate,broadAgeAppeal,lengthOfPlay,quality,value,average,wouldRecommend,verified,productId,userId\n')


// const neo4jDataPrimaryUser = (writeFile, encoding, callback) => {
//   // console.time('neo4jDataPrimaryUser')
//   let i = rows;
//   let id = 0;

//   const write = () => {
//     let userOk = true;
//     do {
//       i--;
//       id++;
//       const review = reviewBuilder();
//       const userString = `${id},${review.userName}\n`;
//       if (i === 0) {
//         usersFileNameNeo4j.write(userString, encoding, callback);
//       } else {
//           userOk = usersFileNameNeo4j.write(userString, encoding);
//       }
//     } while (i > 0 && userOk)
//     if (i > 0) {
//       usersFileNameNeo4j.once('drain', write);
//     }
//   }
//   write();
// }

// const neo4jDataPrimaryProduct = (writeFile, encoding, callback) => {
//   // console.time('neo4jDataPrimaryProduct')
//   let i = rows;
//   let id = 0;

//   const write = () => {
//     let productOk = true;
//     do {
//       i--;
//       id++;
//       const review = reviewBuilder();
//       const productString = `${id},${review.productName}\n`;
//       if (i === 0) {
//         productsFileNameNeo4j.write(productString, encoding, callback);
//       } else {
//           productOk = productsFileNameNeo4j.write(productString, encoding);
//       }
//     } while (i > 0 && productOk)
//     if (i > 0) {
//       productsFileNameNeo4j.once('drain', write);
//     }
//   }
//   write();
// }

// const neo4jDataSecondaryReview = (writeFile, encoding, callback) => {
//   // console.time('neo4jDataSecondaryReview')
//   let i = rows;
//   let id = 0;

//   const write = () => {
//     let reviewOk = true;
//     do {
//       i--;
//       id++;
//       const review = reviewBuilder();
//       const reviewString = `${id},${review.reviewTitle},${review.reviewText},${review.reviewDate},${review.broadAgeAppeal},${review.lengthOfPlay},${review.quality},${review.value},${review.average},${review.wouldRecommend},${review.verified},${review.productId},${review.userId}\n`;
//       if (i === 0) {
//         reviewsFileNameNeo4j.write(reviewString, encoding, callback);
//       } else {
//         reviewOk = reviewsFileNameNeo4j.write(reviewString, encoding);
//       }
//     } while (i > 0 && reviewOk)
//     if (i > 0) {
//       reviewsFileNameNeo4j.once('drain', write);
//     }
//   }
//   write();
// }

// //Build Data Files for Neo4j
// neo4jDataPrimaryUser(usersFileNameNeo4j,'utf-8',()=>{
//   usersFileNameNeo4j.end();
//   console.log('Created Primary User Data');
//   neo4jDataPrimaryProduct(productsFileNameNeo4j,'utf-8',()=>{
//     productsFileNameNeo4j.end();
//     console.log('Created Primary Product Data');
//     neo4jDataSecondaryReview(reviewsFileNameNeo4j,'utf-8',()=>{
//       reviewsFileNameNeo4j.end();
//       console.log('Created Secondary Review Data');
//     })
//   })
// })
// -----------------------------------------------------------------

// let postgresDataPrimary = () => {
//   // console.time('postgresDataPrimary');
//   //Create CSV file and path
//   const usersFileName = fs.createWriteStream(path.join(__dirname, 'csvData/Postgres/users.csv'))
//   const productsFileName = fs.createWriteStream(path.join(__dirname, 'csvData/Postgres/products.csv'))

//   //Write headers
//   usersFileName.write('userName\n', 'utf-8')
//   productsFileName.write('productName\n', 'utf-8')

//   let i = 10000000;
//   let id = 0;
//   const write = () => {
//     let userOk = true;
//     let productOk = true;
//     do {
//       i -= 1;
//       id += 1;
//       const review = reviewBuilder();
//       const userString = `${review.userName}\n`;
//       const productString = `${review.productName}\n`;
//       if (i === 0) {
//         usersFileName.write(userString, 'utf-8', () => usersFileName.end());
//         productsFileName.write(productString, 'utf-8', () => productsFileName.end());
//         // console.timeEnd('postgresDataPrimary')
//       } else {
//           userOk = usersFileName.write(userString, 'utf-8');
//           productOk = productsFileName.write(productString, 'utf-8');
//       }
//     } while (i > 0 && userOk && productOk);
//     if (i > 0) {
//       usersFileName.once('drain', write);
//       productsFileName.once('drain', write);
//     }
//   }
//   write();
// }

// let postgresDataSecondary = () => {
//   // console.time('postgresDataSecondary')
//   //Create CSV file and path
//   const reviewsFileName = fs.createWriteStream(path.join(__dirname, 'csvData/Postgres/reviews.csv'))

//   //Write headers
//   reviewsFileName.write('reviewTitle,reviewText,reviewDate,broadAgeAppeal,lengthOfPlay,quality,value,average,wouldRecommend,verified,productId,userId\n', 'utf-8')

//   let i = 10000000;
//   let id = 0;
//   const write = () => {
//     let reviewOk = true;
//     do {
//       i -= 1;
//       id += 1;
//       const review = reviewBuilder();
//       const reviewString = `${review.reviewTitle},${review.reviewText},${review.reviewDate},${review.broadAgeAppeal},${review.lengthOfPlay},${review.quality},${review.value},${review.average},${review.wouldRecommend},${review.verified},${review.productId},${review.userId}\n`;
//       if (i === 0) {
//         reviewsFileName.write(reviewString, 'utf-8', () => reviewsFileName.end());
//         // console.timeEnd('postgresDataSecondary')
//       } else {
//           reviewOk = reviewsFileName.write(reviewString, 'utf-8');
//       }
//     } while (i > 0 && reviewOk)
//     if (i > 0) {
//       reviewsFileName.once('drain', write);
//     }
//   }
//   write();
// }

// postgresDataPrimary();
// postgresDataSecondary();

//

// Building Neo4J CSV Files (Drain)
// let neo4jDataPrimary = () => {
//   //Create CSV file and path
//   // const usersFileName = fs.createWriteStream(path.join(__dirname, 'csvData/Neo4j/users.csv'))
//   // const productsFileName = fs.createWriteStream(path.join(__dirname, 'csvData/Neo4j/products.csv'))
//   // const reviewsFileName = fs.createWriteStream(path.join(__dirname, 'csvData/Neo4j/reviews.csv'))
//   // console.time('neo4jDataPrimary');

//   const usersFileName = fs.createWriteStream('/Users/kkha/Library/Application Support/com.Neo4j.Relate/Data/dbmss/dbms-976f6b65-85e6-42c3-ae50-13adabe41a74/import/users.csv')
//   const productsFileName = fs.createWriteStream('/Users/kkha/Library/Application Support/com.Neo4j.Relate/Data/dbmss/dbms-976f6b65-85e6-42c3-ae50-13adabe41a74/import/products.csv')

//   //Write headers
//   usersFileName.write('id,userName\n')
//   productsFileName.write('id,productName\n')

//   let i = 500;
//   let id = 0;
//   const write = () => {
//     let userOk = true;
//     let productOk = true;
//     do {
//       i -= 1;
//       id += 1;
//       const review = reviewBuilder();
//       const userString = `${id},${review.userName}\n`;
//       const productString = `${id},${review.productName}\n`;
//       if (i === 0) {
//         usersFileName.write(userString, 'utf-8', () => usersFileName.end());
//         productsFileName.write(productString, 'utf-8', () => productsFileName.end(()=> {
//           console.log('Successfully created primary records');
//           // console.timeEnd('neo4jDataPrimary');
//         }))
//       } else {
//           userOk = usersFileName.write(userString, 'utf-8');
//           productOk = productsFileName.write(productString, 'utf-8');
//       }
//     } while (i > 0 && userOk && productOk);
//     if (i > 0) {
//       usersFileName.once('drain', write);
//       productsFileName.once('drain', write);
//     }
//   }
//   write();
// }

// let neo4jDataSecondary = () => {
//   //Create CSV file and path
//   // const reviewsFileName = fs.createWriteStream(path.join(__dirname, 'csvData/Neo4j/reviews.csv'))
//   // console.time('neo4jDataSecondary');

//   const reviewsFileName = fs.createWriteStream('/Users/kkha/Library/Application Support/com.Neo4j.Relate/Data/dbmss/dbms-976f6b65-85e6-42c3-ae50-13adabe41a74/import/reviews.csv')

//   //Write headers
//   reviewsFileName.write('id,reviewTitle,reviewText,reviewDate,broadAgeAppeal,lengthOfPlay,quality,value,average,wouldRecommend,verified,productId,userId\n')

//   let i = 500;
//   let id = 0;
//   const write = () => {
//     let reviewOk = true;
//     do {
//       i -= 1;
//       id += 1;
//       const review = reviewBuilder();
//       const reviewString = `${id},${review.reviewTitle},${review.reviewText},${review.reviewDate},${review.broadAgeAppeal},${review.lengthOfPlay},${review.quality},${review.value},${review.average},${review.wouldRecommend},${review.verified},${review.productId},${review.userId}\n`;
//       if (i === 0) {
//         reviewsFileName.write(reviewString, 'utf-8', () => reviewsFileName.end(()=>{
//           console.log('Successfully created secondary records');
//           // console.timeEnd('neo4jDataSecondary');
//         }))
//       } else {
//           reviewOk = reviewsFileName.write(reviewString, 'utf-8');
//       }
//     } while (i > 0 && reviewOk);
//     if (i > 0) {
//       reviewsFileName.once('drain', write);
//     }
//   }
//   write();
// }

// neo4jDataPrimary();
// neo4jDataSecondary();


// <----------------------------------------------------------------------------------------------->

// Building PostgreSQL CSV Files (Chunks with script running multiple times, multiple loads)
// let allUsers = () => {
//   const usersFileName = path.join(__dirname, 'csvData/Postgres/users.csv');
//   const productsFileName = path.join(__dirname, 'csvData/Postgres/products.csv');
//   const reviewsFileName = path.join(__dirname, 'csvData/Postgres/reviews.csv');
//   let userString = "name \n";
//   let productString = "productName \n";
//   let reviewString = "name,productName,reviewTitle,reviewText,reviewDate,broadAgeAppeal,lengthOfPlay,quality,value,average,wouldRecommend,verified,productId,userId \n";

//   for (var i = 0; i < 100; i++) {
//     let review = reviewBuilder();
//     userString+= review.name + '\n';
//     productString+= review.productName + '\n';
//     reviewString+= review.name + ',' + review.productName + ',' + review.reviewTitle + ',' + review.reviewText + ',' + review.reviewDate + ',' + review.broadAgeAppeal + ',' + review.lengthOfPlay + ',' + review.quality + ',' + review.value + ',' + review.average + ',' + review.wouldRecommend + ',' + review.verified + ',' + review.productId + ',' + review.userId + '\n'
//   }

//   fs.writeFileSync(usersFileName, userString);
//   fs.writeFileSync(productsFileName, productString);
//   fs.writeFileSync(reviewsFileName, reviewString);
// }


