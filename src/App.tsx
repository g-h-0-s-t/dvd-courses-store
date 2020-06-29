import React from "react";
import Home from "./pages/Home";
// @ts-ignore
import { HashRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
