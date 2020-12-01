import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0px;
  font-family: Helvetica, sans-serif;
}

.app {
  font-family: Helvetica, sans-serif;
}

.appTitle {
  text-align: center;
  font-weight: bolder;
}

.summary {
  display: flex;
  justify-content: space-around;
}

.summary br {
  /* display: block;
  margin: 1px; */
  line-height:500px;
}

.progressBar {
  display: flex;
  flex-direction: row;
}

.progressBarPercents {
  font-size: 12px;
  flex-direction: column;
  line-height:9px;
}

.progressBarBar {
  flex-direction: column;
  line-height:10px;
}

.primaryRatings {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.secondaryRatings {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.tertiaryRatings {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-around;
}

#donut1 {
  height: 60px;
  width: 60px;
  position: relative;
  text-align: center;
  color: green;
}

#centeredDonut1 {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#donut2 {
  height: 60px;
  width: 60px;
  position: relative;
  text-align: center;
  color: green;
}

#centeredDonut2 {
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#filterBox {
  background-color: rgb(247, 247, 247);
}

.filterSorter {
  margin-left: 10px;
  margin-right: 10px;
}

.right {
  float: right;
  margin-right: 30px;
}

.marginRight {
  margin-right: 5px;
}

.marginLeft {
  margin-left: 5px;
}

.review {
  /* display: flex; */
  border-style: solid;
  border-width: thin;
  border-color: grey;
  margin: 20px;
  padding: 10px;
}

.reviewTitle {
  font-size: 16px;
  font-weight: bold;
}

.usernameDate {
  font-size: 10px;
  color: grey;
}

/* .reviewText {
  width: 400px;
} */

.attributeRatings {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-around;
}

/* .attributeRating {
  width: 200px
} */


.w3-container {
  color: rgba(0, 0, 0, 0)
}

.mediumGrey {
  font-size: 10px;
  color: grey;
}

.smallGrey {
  font-size: 10px;
  color: grey;
}

.greenText {
  color: green;
}

#totalAverage {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}

#reviewButtonT {
  display: block;
  content: "";
  position: absolute;
  border: 5px solid transparent;
  border-radius: 5px;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  opacity: 0;
  animation-duration: 500ms;
}

#reviewButton {
  background-color: #E80018; /* Green */
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  font-size: 12px;
  border-radius: 8px;
  margin: 0 auto;
  position: absolute;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

#reviewButton:hover {
  background-color: #c21a2b; /* Green */
  cursor: pointer;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  font-size: 12px;
  border-radius: 8px;
  margin: 0 auto;
  position: absolute;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

#flexboxAlignCenterContainer {
  display: flex;
  justify-content: center;
}

/* FOR DONUT */

.circular-chart {
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;
}

.circle {
  stroke: green;
  fill: none;
  stroke-width: 1;
  stroke-linecap: square;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

/* MODAL */
.modalBackground {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease-in-out;
}

.modalShowing-true {
  opacity: 1;
  pointer-events: showing;
}
`;