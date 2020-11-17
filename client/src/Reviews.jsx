import React from "react";
import {Review} from "./Review.jsx"

const stateTranslator = (filterState, reviewArray) => {
  if (filterState === "all ratings") {
    return reviewArray;
  } else if (filterState === "5 stars") {
    return reviewArray.filter(review => Math.round(review.average) === 5)
  } else if (filterState === "4 stars") {
    return reviewArray.filter(review => Math.round(review.average) === 4)
  } else if (filterState === "3 stars") {
    return reviewArray.filter(review => Math.round(review.average) === 3)
  } else if (filterState === "2 stars") {
    return reviewArray.filter(review => Math.round(review.average) === 2)
  } else if (filterState === "1 star") {
    return reviewArray.filter(review => Math.round(review.average) === 1)
  }
  console.log("@#$%@#$%@")
}

const Reviews = ({sortyBy, filterBy, displayedReviews}) => (
  <div className="reviews">
    {stateTranslator(filterBy, displayedReviews).map((review, index) =>
    <Review key={index} review={review}/>
    )}
  </div>

)

export default Reviews;