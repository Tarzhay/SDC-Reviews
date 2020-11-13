import React from "react";
import Reviews from "./Reviews.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [1, 2, 3],
      data: [4, 5, 6]
    }
    // this.getReviewData = this.getReviewData.bind(this);
  }

  // getReviewData() {
  //   console.log('####')
  //   console.log(window.location);
  //   axios.get(`/${window.location.pathname}`)
  //   .then((response) => {
  //     console.log(response.data);
  //     this.setstate({
  //       data: response.data
  //     })
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  componentDidMount() {
    console.log('####')
    console.log(window.location);
    axios.get(`/${window.location.pathname}`)
    .then((response) => {
      console.log(response.data);
      this.setstate({
        data: response.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
    // getReviewData();
    // axios.get('/api/products/reviews/')
    // .then((response) => {
    //   console.log(response);
    //   this.setState({
    //     reviews: response.data
    //   })
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
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