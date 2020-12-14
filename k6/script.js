import http from 'k6/http';
import { sleep } from 'k6';

//GET
export let options = {
  // vus:100,
  // duration:'5s'
  stages: [
    { duration: '10s', target: 500 },
    { duration: '5s', target: 500 },
    { duration: '10s', target: 0 },
  ],
};
export default function () {
  const productId = Math.floor(Math.random() * 10000000);
  http.get(`http://localhost:3003/api/reviews/${productId}`);
  // sleep(1);
}

//POST
// export let options = {
//   vus:1,
//   duration:'1s'
//   // stages: [
//   //   { duration: '10s', target: 500 },
//   //   { duration: '5s', target: 500 },
//   //   { duration: '10s', target: 0 },
//   // ],
// };
// export default function () {
//   const productId = Math.floor(Math.random() * 10000000);
//   const reviewBuilder = () => {
//     const ratingRange = { min: 1, max: 5};
//     const recommend = { min: 0, max: 1}

//     //Sub optimal way to get average into object
//     const broadAgeRating = faker.random.number(ratingRange);
//     const lengthOfRating = faker.random.number(ratingRange);
//     const qualityRating = faker.random.number(ratingRange);
//     const valueRating = faker.random.number(ratingRange);

//     return {
//       userName: faker.internet.userName(),
//       productName: faker.commerce.productName(),
//       reviewTitle: faker.company.catchPhrase(),
//       reviewText: faker.company.catchPhrase(),
//       reviewDate: faker.date.recent().toString().split('').slice(0, 15).join(''),
//       broadAgeAppeal: broadAgeRating,
//       lengthOfPlay: lengthOfRating,
//       quality: qualityRating,
//       value: valueRating,
//       average: (broadAgeRating + lengthOfRating + qualityRating + valueRating) / 4,
//       wouldRecommend: faker.random.number(recommend),
//       verified: faker.random.number(recommend),
//       productId: productId,
//     }
//   }
//   const review = reviewBuilder();

//   http.post(`http://localhost:3003/api/reviews/${productId}`, review);
//   sleep(1);
// }
