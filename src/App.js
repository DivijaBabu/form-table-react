import React, { Component } from "react";
import TodoForm from "./Components/InputForm";
class App extends Component {
  render() {
    return (
      <center>
        <div>
          <h1>User Registration List App</h1>
          <TodoForm />
        </div>
      </center>
    );
  }
}
export default App;
