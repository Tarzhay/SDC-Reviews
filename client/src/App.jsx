import React from "react";
import Reviews from "./Reviews.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 1
    }
  }

  componentDidMount() {
    axios.get('/api')
    .then((response) => {
      console.log(response);
      this.setState({
        data: response.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <h1> Yo yo yo!!</h1>
        <Reviews />
      </div>
    )
  }
}

export default App;