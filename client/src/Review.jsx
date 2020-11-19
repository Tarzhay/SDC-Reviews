import React from "react";
import Donut2 from "./Donut2.jsx";

var starify = (stars) => {
  var stars = Math.round(stars);
  // <ion-icon name="md-star"></ion-icon>
  // <ion-icon name="md-star-half"></ion-icon>
  // <ion-icon name="md-star-outline"></ion-icon>
  var starDisplay;
  if (stars === 0) {
    starDisplay = (
      <div>
      <ion-icon name="md-star-outline">
      </ion-icon><ion-icon name="md-star-outline">
      </ion-icon><ion-icon name="md-star-outline">
      </ion-icon><ion-icon name="md-star-outline">
      </ion-icon><ion-icon name="md-star-outline">
      </ion-icon>
      </div>
    )
  } else if (stars === 1) {
    starDisplay = (
      <div>
      <ion-icon name="md-st">ar
      </ion-icon><ion-icon name="md-star-outline">
      </ion-icon><ion-icon name="md-star-outline">
      </ion-icon><ion-icon name="md-star-outline">
      </ion-icon><ion-icon name="md-star-outline">
      </ion-icon>
      </div>

    )
  } else if (stars === 2) {
    starDisplay = (
      <div>
      <ion-icon name="md-star">
      </ion-icon><ion-icon name="md-star">
      </ion-icon><ion-icon name="md-star-outline">
      </ion-icon><ion-icon name="md-star-outline">
      </ion-icon><ion-icon name="md-star-outline">
      </ion-icon>
      </div>
    )
  } else if (stars === 3) {
    starDisplay = (
      <div>
      <ion-icon name="md-star">
      </ion-icon><ion-icon name="md-star">
      </ion-icon><ion-icon name="md-star">
      </ion-icon><ion-icon name="md-star-outline">
      </ion-icon><ion-icon name="md-star-outline">
      </ion-icon>
      </div>
    )
  } else if (stars === 4) {
    starDisplay = (
      <div>
      <ion-icon name="md-star">
      </ion-icon><ion-icon name="md-star">
      </ion-icon><ion-icon name="md-star">
      </ion-icon><ion-icon name="md-star">
      </ion-icon><ion-icon name="md-star-outline">
      </ion-icon>
      </div>
    )
  } else {
    starDisplay = (
      <div>
      <ion-icon name="md-star">
      </ion-icon><ion-icon name="md-star">
      </ion-icon><ion-icon name="md-star">
      </ion-icon><ion-icon name="md-star">
      </ion-icon><ion-icon name="md-star">
      </ion-icon>
      </div>
    )
  }
  return starDisplay;
}

const Review = (props) => {
  return  (
    <div className="review">
      <div>
        <div className="reviewTitle">{props.review.reviewTitle}</div>
        {starify(props.review.average)}
        {/* <div className="average">{props.review.average}</div> */}
        <div className="usernameDate">{props.review.username} - {props.review.reviewDate}</div>
        <br></br>
        <div className="reviewText">{props.review.reviewText}</div>
      </div>
      <br></br>
      <div className="attributeRatings">
        <div className="attributeRating">
          <Donut2 score={props.review.broadAgeAppeal * 20}></Donut2>
          <div>{props.review.broadAgeAppeal} Broad age appeal</div>
        </div>
        <div className="attributeRating">
          <Donut2 score={props.review.lengthOfPlay * 20}></Donut2>
          <div>{props.review.lengthOfPlay} Length of play</div>
        </div>
        <div className="attributeRating">
          <Donut2 score={props.review.quality * 20}></Donut2>
          <div>{props.review.quality} Quality</div>
        </div>
        <div className="attributeRating">
          <Donut2 score={props.review.value * 20}></Donut2>
          <div>{props.review.value} Value</div>
        </div>
        {/* <div>Helpful: ?</div>
        <div>Report review: ?</div> */}
      </div>
    </div>
  )
}


// export default Review;
export {Review, starify};
