import React from "react";

const Review = (props) => {
  var stars = Math.round(props.review.average);
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

  return  (
    <div className="review">
      {starDisplay}
      <div class="title">{props.review.reviewTitle}</div>
      <div class="average">{props.review.average}</div>
      <div class="username">{props.review.username}</div>
      <div class="date">{props.review.reviewDate}</div>
      <div class="reviewText">{props.review.reviewText}</div>
      <div class="attributeRating">{props.review.broadAgeAppeal}</div>
      <div class="attributeRating">{props.review.lengthOfPlay}</div>
      <div class="attributeRating">{props.review.quality}</div>
      <div class="attributeRating">{props.review.value}</div>
      {/* <div>Helpful: ?</div>
      <div>Report review: ?</div> */}
    </div>
  )
}


export default Review;