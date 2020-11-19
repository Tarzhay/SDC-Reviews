import React from "react";
// import Donut from "./Donut.jsx"
import {starify} from "./Review.jsx";

const Summary = (props) => {
  var broadAgeAppealTotal = 0;
  var lengthOfPlayTotal = 0;
  var qualityTotal = 0;
  var valueTotal = 0;
  var wouldRecommendTotal = 0;
  var fives = 0;
  var fours = 0;
  var threes = 0;
  var twos = 0;
  var ones = 0;


  for (var i = 0; i < props.reviews.length; i++) {
    broadAgeAppealTotal += props.reviews[i].broadAgeAppeal;
    lengthOfPlayTotal += props.reviews[i].lengthOfPlay;
    qualityTotal += props.reviews[i].quality;
    valueTotal += props.reviews[i].value
    wouldRecommendTotal += props.reviews[i].wouldRecommend;


    var average = Math.round((props.reviews[i].broadAgeAppeal + props.reviews[i].lengthOfPlay + props.reviews[i].quality + props.reviews[i].value)/4)
    if (average === 5) {
      fives++;
    } else if (average === 4) {
      fours++;
    } else if (average === 3) {
      threes++;
    } else if (average === 2) {
      twos++;
    } else {
      ones++;
    }
  }

  var broadAgeAppealAverage = broadAgeAppealTotal/props.reviews.length;
  var lengthOfPlayAverage = lengthOfPlayTotal/props.reviews.length;
  var qualityAverage = qualityTotal/props.reviews.length;
  var valueAverage = valueTotal/props.reviews.length;
  var totalAverage = (broadAgeAppealAverage + lengthOfPlayAverage + qualityAverage + valueAverage) / 4;

  var wouldRecommendPer = (wouldRecommendTotal/props.reviews.length * 100).toFixed(0);
  var fivesPer = (fives/props.reviews.length * 100).toFixed(0) + '%';
  var foursPer = (fours/props.reviews.length * 100).toFixed(0) + '%';
  var threesPer = (threes/props.reviews.length * 100).toFixed(0) + '%';
  var twosPer = (twos/props.reviews.length * 100).toFixed(0) + '%';
  var onesPer = (ones/props.reviews.length * 100).toFixed(0) + '%';

  return (
    <div className="summary">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="progressBar">
        <div className="progressBarPercents">
          <br></br>
          <div className="starRating">5 stars</div>
          <br></br>
          <div className="starRating">4 stars</div>
          <br></br>
          <div className="starRating">3 stars</div>
          <br></br>
          <div className="starRating">2 stars</div>
          <br></br>
          <div className="starRating">1 star</div>
        </div>
        <div className="progressBarBar">
          <div className="w3-container">
            I am writing this text to give fixed length
            <div className="w3-border w3-round">
              <div className="w3-green w3-round" style={{height: '6px', width: fivesPer}}></div>
            </div><br></br>
            <div className="w3-border w3-round">
              <div className="w3-green w3-round" style={{height: '6px', width: foursPer}}></div>
            </div><br></br>
            <div className="w3-border w3-round">
              <div className="w3-green w3-round" style={{height: '6px', width: threesPer}}></div>
            </div><br></br>
            <div className="w3-border w3-round">
              <div className="w3-green w3-round" style={{height: '6px', width: twosPer}}></div>
            </div><br></br>
            <div className="w3-border w3-round">
              <div className="w3-green w3-round" style={{height: '6px', width: onesPer}}></div>
            </div>
        </div>
      </div>
      <div className="progressBarPercents">
        <br></br>
        <div>{fivesPer}</div>
        <br></br>
        <div>{foursPer}</div>
        <br></br>
        <div>{threesPer}</div>
        <br></br>
        <div>{twosPer}</div>
        <br></br>
        <div>{onesPer}</div>
      </div>
    </div>
      <div className="primaryRatings">
        <br></br>
        <div id="totalAverage">{totalAverage.toFixed(1)}</div>
        <div>{starify(Math.round(totalAverage))}</div>
        <div id="totalReviews">{props.reviews.length} star ratings</div>
      </div>
      <div className="secondaryRatings">
        {/* <Donut score={wouldRecommendPer}/> */}
        <div>{wouldRecommendPer}% would recommend</div>
        <div>{broadAgeAppealAverage.toFixed(1)} Broad Age Appeal</div>
        <div>{lengthOfPlayAverage.toFixed(1)} Length of Play</div>
        <div>{qualityAverage.toFixed(1)} Quality</div>
        <div>{valueAverage.toFixed(1)} Value</div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Summary;