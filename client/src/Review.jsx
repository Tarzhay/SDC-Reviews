import React from "react";

const Review = (props) => (
  <div className="review">
    <h3>Title: {props.review.reviewTitle}</h3>
    <h3>Average: {props.review.average}</h3>
    <h3>Username: {props.review.username}</h3>
    <h3>Date: {props.review.reviewDate}</h3>
    <h3>Text: {props.review.reviewText}</h3>
    <h3>Broad Age Appeal: {props.review.broadAgeAppeal}</h3>
    <h3>Length of Play: {props.review.lengthOfPlay}</h3>
    <h3>Quality: {props.review.quality}</h3>
    <h3>Value: {props.review.value}</h3>
    {/* <h3>Helpful: ?</h3>
    <h3>Report review: ?</h3> */}
  </div>
)

export default Review;