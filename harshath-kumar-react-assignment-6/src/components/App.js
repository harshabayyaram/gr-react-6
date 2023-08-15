import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    getResponse: "",
    postResponse: "",
  };

  handleGetRequest = async () => {
    try {
      const response = await axios.get("http://localhost:3001/test", {
        params: { a: 1 },
      });

      this.setState({ getResponse: response.data.message });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  handlePostRequest = async () => {
    try {
      const response = await axios.post("http://localhost:3001/test1", {
        c: 1,
        d: 2,
      });

      this.setState({ postResponse: response.data.message });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    return (
      <div>
        <h1>React App with Server Communication</h1>
        <button onClick={this.handleGetRequest}>Send GET Request</button>
        <button onClick={this.handlePostRequest}>Send POST Request</button>
        <p>GET Response: {this.state.getResponse}</p>
        <p>POST Response: {this.state.postResponse}</p>
      </div>
    );
  }
}

export default App;
