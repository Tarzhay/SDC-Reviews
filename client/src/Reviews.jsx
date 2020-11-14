import React from "react";
import {Review} from "./Review.jsx"

const Reviews = (props) => (
  <div className="reviews">
    <h3>Guest Ratings and Reviews</h3>
    {props.reviews.map((review) =>
    <Review review={review}/>
    )}
  </div>

)

export default Reviews;