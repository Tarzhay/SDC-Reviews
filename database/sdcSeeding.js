const faker = require('faker/locale/en.js');

const reviewBuilderUser = () => {
  return {
    user_name: faker.internet.userName()
  }
}

const reviewBuilderProduct = () => {
  return {
    productName: faker.commerce.productName()
  }
}

const reviewBuilder = () => {
  const ratingRange = { min: 1, max: 5};
  const recommend = { min: 0, max: 1}
  const totalRange = { min: 0, max: 9999999}

  //Sub optimal way to get average into object
  const broadAgeRating = faker.random.number(ratingRange);
  const lengthOfRating = faker.random.number(ratingRange);
  const qualityRating = faker.random.number(ratingRange);
  const valueRating = faker.random.number(ratingRange);

  return {
    // user_name: faker.internet.userName(),
    // productName: faker.commerce.productName(),
    reviewTitle: faker.company.catchPhrase(),
    reviewText: faker.company.catchPhrase(),
    review_date: faker.date.recent().toString().split('').slice(0, 15).join(''),
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

