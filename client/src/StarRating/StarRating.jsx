import React from 'react';
import { Ratings, Stars } from './style.js';

const StarRating = ({ productData }) => {
  // const starPercent = avgRating / 5 * 100;
  const starPercent = 50;
  return (
      <Ratings>
        <Stars starPercent={starPercent}>
          ⭐⭐⭐⭐⭐
        </Stars>
      </Ratings>
  );
};

export default StarRating;