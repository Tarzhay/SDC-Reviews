import React from "react";
import Review from "./Review/Review.jsx"

const sortTranslator = (sortState, reviewArray) => {
  var sortNewest = (a, b) => {
    if (a.reviewDate < b.reviewDate) {
      return 1
    } else if (a.reviewDate > b.reviewDate) {
      return -1
    } else {
      return 0
    }
  }

  var sortHighest = (a, b) => {
    if (a.average < b.average) {
      return 1
    } else if (a.average > b.average) {
      return -1
    } else {
      return 0
    }
  }

  var sortLowest = (a, b) => {
    if (a.average > b.average) {
      return 1
    } else if (a.average < b.average) {
      return -1
    } else {
      return 0
    }
  }

  if (sortState === "most recent" || sortState === "most helpful") {
    return reviewArray.sort(sortNewest);
  } else if (sortState === "highest rated") {
    return reviewArray.sort(sortHighest);
  } else if (sortState === "lowest rated") {
    return reviewArray.sort(sortLowest);
  } else {
    return "Fix sorting options";
  }
}

const filterTranslator = (verifiedState, filterState, reviewArray) => {
  var currentArray = reviewArray
  if (verifiedState === true) {
    currentArray = reviewArray.filter(review => review.verified === 1)
  }
  if (filterState === "all ratings") {
    return currentArray;
  } else if (filterState === "5 stars") {
    return currentArray.filter(review => Math.round(review.average) === 5)
  } else if (filterState === "4 stars") {
    return currentArray.filter(review => Math.round(review.average) === 4)
  } else if (filterState === "3 stars") {
    return currentArray.filter(review => Math.round(review.average) === 3)
  } else if (filterState === "2 stars") {
    return currentArray.filter(review => Math.round(review.average) === 2)
  } else if (filterState === "1 star") {
    return currentArray.filter(review => Math.round(review.average) === 1)
  }
}

const sortAndFilter = (sortState, verifiedState, filterState, reviewArray) => {
  console.log(verifiedState);

  var sortedArray = sortTranslator(sortState, reviewArray);
  var result = filterTranslator(verifiedState, filterState, sortedArray);
  console.log(result);
  return result;
}

const Reviews = ({sortBy, verifiedPurchase, filterBy, displayedReviews}) => (
  <div className="reviews">
    {sortAndFilter(sortBy, verifiedPurchase, filterBy, displayedReviews).map((review, index) =>
    <Review key={index} review={review}/>
    )}
  </div>

)

export default Reviews;