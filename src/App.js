import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Voting from "./component/Voting/Voting";
import Results from "./component/Results/Results";
import Registration from "./component/Registration/Registration";
import AddCandidate from "./component/Admin/AddCandidate/AddCandidate";
import Verification from "./component/Admin/Verification/Verification";

// css
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AddCandidate" component={AddCandidate} />
          <Route exact path="/Voting" component={Voting} />
          <Route exact path="/Results" component={Results} />
          <Route exact path="/Registration" component={Registration} />
          <Route exact path="/Verification" component={Verification} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

const NotFound = () => {
  return (
    <>
      <h1>404 NOT FOUND!</h1>
      <center>
        <p>
          The page your are looking for doesn't exist.
          <br />
          Go to{" "}
          <Link to="/" style={{ color: "black", textDecoration: "underline" }}>
            Home
          </Link>
        </p>
      </center>
    </>
  );
};

export default App;
