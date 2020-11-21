import React from "react";

const Donut2 = ({score}) => {
  var usedScore = score / 100 * 30;
  var usedScoreString = usedScore.toString() + ", 30";
  return (
    <div id="donut2">
      <svg viewBox="0 0 11.5 11.5" className="circular-chart">
        <path className="circle"
          strokeDasharray={usedScoreString}
          d="M6 1.2253
            a 4.7746 4.7746 0 0 1 0 9.549
            a 4.7746 4.7746 0 0 1 0 -9.549"
        />
      </svg>
      <div id="centeredDonut2">{score / 20}</div>
    </div>
  )
}

export default Donut2;