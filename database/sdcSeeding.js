const faker = require('faker/locale/en.js');
const fs = require('fs');
const path = require('path');
const db = require('./index.js') ;

const reviewBuilder = () => {
  const ratingRange = { min: 1, max: 5};
  const recommend = { min: 0, max: 1}
  const totalRange = { min: 1, max: 100}

  //Sub optimal way to get average into object
  const broadAgeRating = faker.random.number(ratingRange);
  const lengthOfRating = faker.random.number(ratingRange);
  const qualityRating = faker.random.number(ratingRange);
  const valueRating = faker.random.number(ratingRange);

  return {
    user_name: faker.internet.userName(),
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
// let postgresData = () => {
//   //Create CSV file and path
//   const usersFileName = fs.createWriteStream(path.join(__dirname, 'csvData/Postgres/users.csv'))
//   const productsFileName = fs.createWriteStream(path.join(__dirname, 'csvData/Postgres/products.csv'))
//   const reviewsFileName = fs.createWriteStream(path.join(__dirname, 'csvData/Postgres/reviews.csv'))

//   //Write headers
//   usersFileName.write('user_name \n')
//   productsFileName.write('productName \n')
//   reviewsFileName.write('user_name,productName,reviewTitle,reviewText,reviewDate,broadAgeAppeal,lengthOfPlay,quality,value,average,wouldRecommend,verified,productId,userId \n')

//   let i = 100;
//   let id = 0;
//   const write = () => {
//     let userOk = true;
//     let productOk = true;
//     let reviewOk = true;
//     do {
//       i -= 1;
//       id += 1;
//       const review = reviewBuilder();
//       const userString = `${review.user_name} \n`;
//       const productString = `${review.productName} \n`;
//       const reviewString = `${review.user_name},${review.productName},${review.reviewTitle},${review.reviewText},${review.reviewDate},${review.broadAgeAppeal},${review.lengthOfPlay},${review.quality},${review.value},${review.average},${review.wouldRecommend},${review.verified},${review.productId},${review.userId} \n`;
//       if (i === 0) {
//         usersFileName.write(userString, 'utf-8', () => usersFileName.end());
//         productsFileName.write(productString, 'utf-8', () => productsFileName.end());
//         reviewsFileName.write(reviewString, 'utf-8', () => reviewsFileName.end());
//       } else {
//           userOk = usersFileName.write(userString, 'utf-8');
//           productOk = productsFileName.write(productString, 'utf-8');
//           reviewOk = reviewsFileName.write(reviewString, 'utf-8');
//       }
//     } while (i > 0 && userOk && productOk && reviewOk);
//     if (i > 0) {
//       usersFileName.once('drain', write);
//       productsFileName.once('drain', write);
//       reviewsFileName.once('drain', write);
//     }
//   }
//   write();
// }

// Building Neo4J CSV Files (Drain)
let neo4jData = () => {
  //Create CSV file and path
  const usersFileName = fs.createWriteStream(path.join(__dirname, 'csvData/Neo4j/users.csv'))
  const productsFileName = fs.createWriteStream(path.join(__dirname, 'csvData/Neo4j/products.csv'))
  const reviewsFileName = fs.createWriteStream(path.join(__dirname, 'csvData/Neo4j/reviews.csv'))

  //Write headers
  usersFileName.write('id,user_name \n')
  productsFileName.write('id,productName \n')
  reviewsFileName.write('id,user_name,productName,reviewTitle,reviewText,reviewDate,broadAgeAppeal,lengthOfPlay,quality,value,average,wouldRecommend,verified,productId,userId \n')

  let i = 100;
  let id = 0;
  const write = () => {
    let userOk = true;
    let productOk = true;
    let reviewOk = true;
    do {
      i -= 1;
      id += 1;
      const review = reviewBuilder();
      const userString = `${id},${review.user_name} \n`;
      const productString = `${id},${review.productName} \n`;
      const reviewString = `${id},${review.user_name},${review.productName},${review.reviewTitle},${review.reviewText},${review.reviewDate},${review.broadAgeAppeal},${review.lengthOfPlay},${review.quality},${review.value},${review.average},${review.wouldRecommend},${review.verified},${review.productId},${review.userId} \n`;
      if (i === 0) {
        usersFileName.write(userString, 'utf-8', () => usersFileName.end());
        productsFileName.write(productString, 'utf-8', () => productsFileName.end());
        reviewsFileName.write(reviewString, 'utf-8', () => reviewsFileName.end());
      } else {
          userOk = usersFileName.write(userString, 'utf-8');
          productOk = productsFileName.write(productString, 'utf-8');
          reviewOk = reviewsFileName.write(reviewString, 'utf-8');
      }
    } while (i > 0 && userOk && productOk && reviewOk);
    if (i > 0) {
      usersFileName.once('drain', write);
      productsFileName.once('drain', write);
      reviewsFileName.once('drain', write);
    }
  }
  write();
}

// postgresData();
neo4jData();

// Building PostgreSQL CSV Files (Chunks with script running multiple times, multiple loads)
// let allUsers = () => {
//   const usersFileName = path.join(__dirname, 'csvData/Postgres/users.csv');
//   const productsFileName = path.join(__dirname, 'csvData/Postgres/products.csv');
//   const reviewsFileName = path.join(__dirname, 'csvData/Postgres/reviews.csv');
//   let userString = "user_name \n";
//   let productString = "productName \n";
//   let reviewString = "user_name,productName,reviewTitle,reviewText,reviewDate,broadAgeAppeal,lengthOfPlay,quality,value,average,wouldRecommend,verified,productId,userId \n";

//   for (var i = 0; i < 100; i++) {
//     let review = reviewBuilder();
//     userString+= review.user_name + '\n';
//     productString+= review.productName + '\n';
//     reviewString+= review.user_name + ',' + review.productName + ',' + review.reviewTitle + ',' + review.reviewText + ',' + review.reviewDate + ',' + review.broadAgeAppeal + ',' + review.lengthOfPlay + ',' + review.quality + ',' + review.value + ',' + review.average + ',' + review.wouldRecommend + ',' + review.verified + ',' + review.productId + ',' + review.userId + '\n'
//   }

//   fs.writeFileSync(usersFileName, userString);
//   fs.writeFileSync(productsFileName, productString);
//   fs.writeFileSync(reviewsFileName, reviewString);
// }


