import React, { Component } from "react";
import InputForm from "./Components/InputForm";
import "./Components/spacing.css";
class App extends Component {
  render() {
    return (
      <center>
        <div>
          <h1>User Registration List App</h1>
          <InputForm />
        </div>
      </center>
    );
  }
}
export default App;