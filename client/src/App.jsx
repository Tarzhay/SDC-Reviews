import React from "react";
import axios from "axios";
import Reviews from "./Reviews.jsx";
import Summary from "./Summary.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [1, 2, 3],
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
        <Reviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default App;