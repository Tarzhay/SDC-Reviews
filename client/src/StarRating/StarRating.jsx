import React from 'react';
import { Ratings, Stars } from './style.js';

const StarRating = ({ score }) => {
  const starPercent = score / 5 * 100;
  return (
      <Ratings>
        <Stars starPercent={starPercent}>
          ⭐⭐⭐⭐⭐
        </Stars>
      </Ratings>
  );
};

export default StarRating;