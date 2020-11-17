import React from "react";
import axios from "axios";
import Summary from "./Summary.jsx";
import Filterer from "./Filterer.jsx";
import Reviews from "./Reviews.jsx";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      displayedReviews: [],
      sortBy: "most recent",
      filterBy: "all ratings",
      verifiedPurchase: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "verifiedPurchase") {
      this.setState({verifiedPurchase: !this.state.verifiedPurchase})
    } else {
      this.setState({[name]: value})
    }
  }

  componentDidMount() {
    axios.get(`/api/reviews${window.location.pathname}`)
    .then((response) => {
      this.setState({
        allReviews: response.data,
        displayedReviews: response.data
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
        <Summary reviews={this.state.allReviews}/>
        <Filterer handleInputChange={this.handleInputChange}/>
        <Reviews displayedReviews={this.state.displayedReviews}/>
      </div>
    )
  }
}

export default App;