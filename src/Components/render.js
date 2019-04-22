import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.sass'
import SignIn from './signIn/signIn';
import SignUp from './signUp/signUp';
import User from './user/userPage';


class Render extends Component {
  render() {
    return (         
      <Router>
      <div className="App">
        <div className="nav-container container">
        <ul>
          <li>
            <Link to="/"><span>SignIn</span></Link>
          </li>
          <li>
            <Link to="/SignUp/">SignUp</Link>
          </li>
          <li>
            <Link to="/User/">User</Link>
          </li>
        </ul>
        <Route path="/" exact component={SignIn} />
        <Route path="/SignUp/" component={SignUp} />
        <Route path="/User/" component={User} />
        </div>
      </div>
    </Router>
    );
  }
}

export default Render;