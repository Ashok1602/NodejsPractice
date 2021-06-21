/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import TutorialsList from "./Components";
import AddTutorial from "./Components/AddTutorial";
import TutorialInfo from './Components/TutorialInfo';
import Home from "./Components/Home"

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
          <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
          </li>
            <li className="nav-item">
              <a href={"/tutorials"} className="nav-link">
                Tutorials
              </a>
            </li>
            <li className="nav-item">
              <a href={"/add"} className="nav-link">
                Add
              </a>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tutorials" component={TutorialsList} />
            <Route path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={TutorialInfo} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
