import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/test">
            <h1>hi i am test</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
