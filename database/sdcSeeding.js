const faker = require('faker/locale/en.js');
const fs = require('fs');
const path = require('path');
const db = require('./index.js') ;

// const reviewBuilderUser = () => {
//   return {
//     user_name: faker.internet.userName()
//   }
// }

// const reviewBuilderProduct = () => {
//   return {
//     productName: faker.commerce.productName()
//   }
// }

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

// Building PostgreSQL CSV Files
let allUsers = () => {
  const usersFileName = path.join(__dirname, 'csvData/Postgres/users.csv');
  const productsFileName = path.join(__dirname, 'csvData/Postgres/products.csv');
  const reviewsFileName = path.join(__dirname, 'csvData/Postgres/reviews.csv');
  let userString = "user_name \n";
  let productString = "productName \n";
  let reviewString = "user_name,productName,reviewTitle,reviewText,reviewDate,broadAgeAppeal,lengthOfPlay,quality,value,average,wouldRecommend,verified,productId,userId \n";

  for (var i = 0; i < 1000000; i++) {
    let review = reviewBuilder();
    userString+= review.user_name + '\n';
    productString+= review.productName + '\n';
    reviewString+= review.user_name + ',' + review.productName + ',' + review.reviewTitle + ',' + review.reviewText + ',' + review.reviewDate + ',' + review.broadAgeAppeal + ',' + review.lengthOfPlay + ',' + review.quality + ',' + review.value + ',' + review.average + ',' + review.wouldRecommend + ',' + review.verified + ',' + review.productId + ',' + review.userId + '\n'
  }

  fs.writeFileSync(usersFileName, userString);
  fs.writeFileSync(productsFileName, productString);
  fs.writeFileSync(reviewsFileName, reviewString);
}

console.log(allUsers());
