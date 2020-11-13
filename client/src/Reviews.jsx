import React from "react";
import Review from "./Review.jsx"

const Reviews = (props) => (
  <div>
    {props.reviews.map((review) =>
    <Review review={review}/>
    )}
  </div>

)

export default Reviews;