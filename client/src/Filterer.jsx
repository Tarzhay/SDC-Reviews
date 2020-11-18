import React from "react";

const Filterer = (props) => {
  const sortByOptions = ["most recent", "highest rated", "lowest rated", "most helpful"];
  const filterByOptions = ["all ratings", "5 stars", "4 stars", "3 stars", "2 stars", "1 star"]
  return (
    <div>
      <select name="sortBy" onChange={(e) => props.handleInputChange(e)}>
        {sortByOptions.map((optionValue, index) =>
          <option key ={index} value={optionValue}>{optionValue}</option>
          )}
      </select>
      <select name="filterBy" onChange={(e) => props.handleInputChange(e)}>
        {filterByOptions.map((filterValue, index) =>
          <option key={index} value={filterValue}>{filterValue}</option>
        )}
      </select>
      <label>
      <input name="verifiedPurchase" type="checkbox" onChange={(e) => props.handleInputChange(e)}></input>Verified Purchase
      </label>
    </div>
  )
}

export default Filterer;