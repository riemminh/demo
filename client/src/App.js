import React, { Component } from "react";

import Router from "./Components/Router";
import ResultUser from "./Components/ResultUser";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
        <hr />
        <ResultUser />
      </div>
    );
  }
}

export default App;
