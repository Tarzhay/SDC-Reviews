import React from "react";
import Donut2 from "../Donut2.jsx";
import StarRating from "../StarRating/StarRating.jsx";
import moment from "moment";

const Review = (props) => {
  var verifyText = "";
  var reviewDateText = moment(props.review.reviewdate, "YYYYMMDD").fromNow();
  if (props.review.verified === 1) {
    verifyText = "Verified purchaser"
    reviewDateText += ", "
  }

  return  (
    <div className="review">
      <div>
        <div className="reviewTitle">{props.review.reviewtitle}</div>
        <StarRating score={Number(props.review.average)}/>
        {/* <div className="average">{props.review.average}</div> */}
  <div className="usernameDate">{props.review.username} - {reviewDateText} <span className="greenText">{verifyText}</span></div>
        <br></br>
        <div className="reviewText">{props.review.reviewtext}</div>
      </div>
      <br></br>
      <div className="attributeRatings">
        <div className="attributeRating">
          <Donut2 score={props.review.broadageappeal * 20}></Donut2>
          <div>Broad age appeal</div>
        </div>
        <div className="attributeRating">
          <Donut2 score={props.review.lengthofplay * 20}></Donut2>
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


export default Review;
