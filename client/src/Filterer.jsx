import React from "react";

const Filterer = (props) => {
  return (
    <div>
      <select name="sortBy" onChange={(e) => props.handleInputChange(e)}>
        <option value="most recent">most recent</option>
        <option value="highest rated">highest rated</option>
        <option value="lowest rated">lowest rated</option>
        <option value="most helpful">most helpful</option>
      </select>
      <select name="filterBy" onChange={(e) => props.handleInputChange(e)}>
        <option value="all ratings">all ratings</option>
        <option value="5 stars">5 stars</option>
        <option value="4 stars">4 stars</option>
        <option value="3 stars">3 stars</option>
        <option value="2 stars">2 stars</option>
        <option value="1 stars">1 stars</option>
      </select>
      <label>
      <input name="verifiedPurchase" type="checkbox" onChange={(e) => props.handleInputChange(e)}></input>Verified Purchase
      </label>
    </div>
  )
  /*
  1-5 stars

  verified purchase
  */
}

export default Filterer;