import React from "react";
import Modal from "./Modal.jsx"

const Filterer = (props) => {
  const sortByOptions = ["most recent", "highest rated", "lowest rated", "most helpful"];
  const filterByOptions = ["all ratings", "5 stars", "4 stars", "3 stars", "2 stars", "1 star"]
  return (
    <div id="filterBox">
      <br></br>
      <label className="filterSorter">
        sort by
        <select className="marginLeft" name="sortBy" onChange={(e) => props.handleInputChange(e)}>
          {sortByOptions.map((optionValue, index) =>
            <option key ={index} value={optionValue}>{optionValue}</option>
            )}
        </select>
      </label>
      <label className="filterSorter">
        filter by
        <select className="marginLeft" name="filterBy" onChange={(e) => props.handleInputChange(e)}>
          {filterByOptions.map((filterValue, index) =>
            <option key={index} value={filterValue}>{filterValue}</option>
            )}
        </select>
      </label>
      <label className="right">
        <input className="marginRight" name="verifiedPurchase" type="checkbox" onChange={(e) => props.handleInputChange(e)}></input>Verified Purchase
      </label>
      <br></br>
      <br></br>
      {/* <Modal /> */}
    </div>
  )
}

export default Filterer;