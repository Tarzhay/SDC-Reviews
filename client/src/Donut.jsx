// import React from "react";
// import styled from "styled-components";

// const donut = styled.donut`
//   --donut-size: 30px;
//   --donut-border-width: 5px;
//   --donut-spacing: 0;
//   --donut-spacing-color: 255, 255, 255;
//   --donut-spacing-deg: calc(1deg * var(--donut-spacing));
//   border-radius: 50%;
//   height: var(--donut-size);
//   margin: 0px;
//   position: relative;
//   width: var(--donut-size);
// `;

// const donut__label = styled.donut__label`
//   left: 50%;
//   line-height: 1.5;
//   position: absolute;
//   text-align: center;
//   top: 50%;
//   -webkit-transform: translate(-50%, -50%);
//           transform: translate(-50%, -50%);
//   width: 80%;
// `;

// const donut__label__heading = styled.donut__label__heading`
//   font-size: 12px;
//   font-weight: 600;
// `;

// const donut__slice = styled.donut__slice`
//   height: 100%;
//   position: absolute;
//   width: 100%;
// `;

// const donut__slice__before = styled.donut__slice__before`
//   border: var(--donut-border-width) solid rgba(0, 0, 0, 0);
//   border-radius: 50%;
//   content: '';
//   height: 100%;
//   left: 0;
//   position: absolute;
//   top: 0;
//   -webkit-transform: rotate(45deg);
//           transform: rotate(45deg);
//   width: 100%;
//   border-width: calc(var(--donut-border-width) + 1px);
//   box-shadow: 0 0 1px 0 rgba(var(--donut-spacing-color), calc(100 * var(--donut-spacing)));
// `;

// const donut__slice__after = styled.donut__slice__after`
//   border: var(--donut-border-width) solid rgba(0, 0, 0, 0);
//   border-radius: 50%;
//   content: '';
//   height: 100%;
//   left: 0;
//   position: absolute;
//   top: 0;
//   -webkit-transform: rotate(45deg);
//           transform: rotate(45deg);
//   width: 100%;
// `;

// const donut__slice__first = styled.donut__slice__first`
//   --first-start: 0;
// `;

// const donut__slice__first__before = styled.donut__slice__first__before`
//   border-top-color: rgba(var(--donut-spacing-color), calc(100 * var(--donut-spacing)));
//   -webkit-transform: rotate(calc(360deg * var(--first-start) + 45deg));
//           transform: rotate(calc(360deg * var(--first-start) + 45deg));
// `;

// const donut__slice__first__after = styled.donut__slice__first__after`
//   border-top-color: #ff6838;
//   border-right-color: rgba(255, 104, 56, calc(100 * (var(--first) - .25)));
//   border-bottom-color: rgba(255, 104, 56, calc(100 * (var(--first) - .5)));
//   border-left-color: rgba(255, 104, 56, calc(100 * (var(--first) - .75)));
//   -webkit-transform: rotate(calc(360deg * var(--first-start) + 45deg + var(--donut-spacing-deg)));
//           transform: rotate(calc(360deg * var(--first-start) + 45deg + var(--donut-spacing-deg)));
// `;

// const donut__slice__second = styled.donut__slice__second`
//   --second-start: calc(var(--first));
//   --second-check: max(calc(var(--second-start) - .5), 0);
//   -webkit-clip-path: inset(0 calc(50% * (var(--second-check) / var(--second-check))) 0 0);
//           clip-path: inset(0 calc(50% * (var(--second-check) / var(--second-check))) 0 0);
// `;


// const donut__slice__second__after = styled.donut__slice__second__after`
//   border-top-color: white;
//   border-right-color: rgba(255, 200, 32, calc(100 * (var(--second) - .25)));
//   border-bottom-color: rgba(255, 200, 32, calc(100 * (var(--second) - .5)));
//   border-left-color: rgba(255, 200, 32, calc(100 * (var(--second) - .75)));
//   -webkit-transform: rotate(calc(360deg * var(--second-start) + 45deg + var(--donut-spacing-deg)));
//           transform: rotate(calc(360deg * var(--second-start) + 45deg + var(--donut-spacing-deg)));
// `;




// const Doughnut = ({score}) => {
//   return (
//     <div>
//       <div class="donut" style={{first: .9, second: 0}}>
//         <div class="donut__slice donut__slice__first"></div>
//         <div class="donut__slice donut__slice__second"></div>
//         <div class="donut__slice donut__slice__third"></div>
//         <div class="donut__slice donut__slice__fourth"></div>
//         <div class="donut__slice donut__slice__fifth"></div>
//         <div class="donut__label">
//           <div class="donut__label__heading">
//             2.9
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Doughnut;