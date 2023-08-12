import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./containers/AppContent";

class App extends Component {
  render() {
    return (
      <Router>
        <AppContent />
      </Router>
    );
  }
}

export default App;
