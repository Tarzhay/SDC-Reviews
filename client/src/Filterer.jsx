import React from "react";

const Filterer = (props) => {
  return (
    <select onChange={(e) => props.handleSort(e)}>
      <option value="most recent">most recent</option>
      <option value="highest rated">highest rated</option>
      <option value="lowest rated">lowest rated</option>
      <option value="most helpful">most helpful</option>
    </select>
  )
  /*
  1-5 stars

  verified purchase
  */
}

export default Filterer;