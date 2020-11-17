import React from "react";
import {Review} from "./Review.jsx"

const Reviews = (props) => (
  <div className="reviews">
    {props.reviews.map((review, index) =>
    <Review key={index} review={review}/>
    )}
  </div>

)

export default Reviews;