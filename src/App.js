import "./App.css";
import Main from "./components/main";
import LandingPage from "./components/landingPage";
import InvalidUrl from "./components/invalid";
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/:sessionId">
            <Main />
          </Route>
          <Route path="*" component={InvalidUrl} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;