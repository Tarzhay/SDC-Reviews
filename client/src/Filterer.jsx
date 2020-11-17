import React from "react";

const Filterer = (props) => {
  return (
    <div>
      <select onChange={(e) => props.handleSort(e)}>
        <option value="most recent">most recent</option>
        <option value="highest rated">highest rated</option>
        <option value="lowest rated">lowest rated</option>
        <option value="most helpful">most helpful</option>
      </select>
      <select onChange={(e) => props.handleFilter(e)}>
        <option value="all ratings">all ratings</option>
        <option value="5 stars">5 stars</option>
        <option value="4 stars">4 stars</option>
        <option value="3 stars">3 stars</option>
        <option value="2 stars">2 stars</option>
        <option value="1 stars">1 stars</option>
      </select>
    </div>
  )
  /*
  1-5 stars

  verified purchase
  */
}

export default Filterer;