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
      filterBy: "all ratings",
      verifiedPurchase: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    console.log(e.target.name);
    console.log(e.target.value);
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
        <Filterer handleInputChange={this.handleInputChange}/>
        <Reviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default App;