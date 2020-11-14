import React from "react";

const Summary = (props) => {
  console.log(props.reviews);
  var broadAgeAppealTotal = 0;
  var lengthOfPlayTotal = 0;
  var qualityTotal = 0;
  var valueTotal = 0;
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
  var totalAverage = (broadAgeAppealAverage + lengthOfPlayAverage + qualityAverage + valueAverage) / 4

  var fivesPer = Math.round(fives/props.reviews.length) * 100;
  var foursPer = Math.round(fours/props.reviews.length) * 100;
  var threesPer = Math.round(threes/props.reviews.length) * 100;
  var twosPer = Math.round(twos/props.reviews.length) * 100;
  var onesPer = Math.round(ones/props.reviews.length) * 100;


  return (
    <div>
      <div>{totalAverage.toFixed(1)}</div>
      <div>5 stars {fivesPer}%</div>
      <div>4 stars {foursPer}%</div>
      <div>3 stars {threesPer}%</div>
      <div>2 stars {twosPer}%</div>
      <div>1 star {onesPer}%</div>
      <div>{props.reviews.length} star ratings</div>
      <div>{broadAgeAppealAverage.toFixed(1)}</div>
      <div>{lengthOfPlayAverage.toFixed(1)}</div>
      <div>{qualityAverage.toFixed(1)}</div>
      <div>{valueAverage.toFixed(1)}</div>
    </div>
  )
}

export default Summary;