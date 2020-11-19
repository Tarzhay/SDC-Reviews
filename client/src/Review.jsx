import React from "react";
import Donut2 from "./Donut2.jsx";
import StarRating from "./StarRating/StarRating.jsx"

const Review = (props) => {
  return  (
    <div className="review">
      <div>
        <div className="reviewTitle">{props.review.reviewTitle}</div>
        <StarRating score={props.review.average}/>
        {/* <div className="average">{props.review.average}</div> */}
        <div className="usernameDate">{props.review.username} - {props.review.reviewDate}</div>
        <br></br>
        <div className="reviewText">{props.review.reviewText}</div>
      </div>
      <br></br>
      <div className="attributeRatings">
        <div className="attributeRating">
          <Donut2 score={props.review.broadAgeAppeal * 20}></Donut2>
          <div>Broad age appeal</div>
        </div>
        <div className="attributeRating">
          <Donut2 score={props.review.lengthOfPlay * 20}></Donut2>
          <div>Length of play</div>
        </div>
        <div className="attributeRating">
          <Donut2 score={props.review.quality * 20}></Donut2>
          <div>Quality</div>
        </div>
        <div className="attributeRating">
          <Donut2 score={props.review.value * 20}></Donut2>
          <div>Value</div>
        </div>
        {/* <div>Helpful: ?</div>
        <div>Report review: ?</div> */}
      </div>
    </div>
  )
}


// export default Review;
export {Review};
