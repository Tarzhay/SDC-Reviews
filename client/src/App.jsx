import React from "react";
import Reviews from "./Reviews.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [1, 2, 3]
    }

  }

  componentDidMount() {
    axios.get('/api/products/reviews/')
    .then((response) => {
      console.log(response);
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
        <Reviews reviews={this.state.reviews}/>
      </div>
    )
  }
}



export default App;