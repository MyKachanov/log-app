import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.sass'
import SignIn from './signIn/signIn';
import SignUp from './signUp/signUp';

class Render extends Component {
  render() {
    return (    
      <Router>
      <div className="App">
        <div className="nav-container container">
        <ul>
          <li>
            <Link to="/">SignIn</Link>
          </li>
          <li>
            <Link to="/SignUp/">SignUp</Link>
          </li>
        </ul>
          <Route path="/" exact component={SignIn} />
          <Route path="/SignUp/" component={SignUp} />
        </div>
      </div>
    </Router>
    );
  }
}

export default Render;