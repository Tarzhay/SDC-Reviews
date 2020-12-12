import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 500 },
    { duration: '1m', target: 500 },
    { duration: '20s', target: 0 },
  ],
};
export default function () {
  const reviewId = Math.floor(Math.random() * 10000000);
  http.get(`http://localhost:3003/api/reviews/${reviewId}`);
  sleep(1);
}