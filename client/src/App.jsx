import React from "react";
import axios from "axios";
import Summary from "./Summary.jsx";
import Filterer from "./Filterer.jsx";
import Reviews from "./Reviews.jsx";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      sortBy: "most recent",
      filderBy: "all ratings",
      verifiedPurchase: false
    }
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(e) {
    console.log(e.target);
    this.setState({sortBy: e.target.value})
  }

  componentDidMount() {
    axios.get(`/api/reviews${window.location.pathname}`)
    .then((response) => {
      this.setState({
        reviews: response.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <h3>Guest Ratings and Reviews</h3>
        <Summary reviews={this.state.reviews}/>
        <Filterer sortBy={this.state.sortBy} handleSort={this.handleSort}/>
        <Reviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default App;