import React from "react";

const Review = (props) => (
  <li className="review">
    <div>{props.review.average}</div>
  </li>
)

export default Review;