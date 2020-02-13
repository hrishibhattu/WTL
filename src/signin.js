import React, { Component } from 'react';
import logo from './logo.jpg';
import './signin.css';
import {HashRouter, Route, Link} from 'react-router-dom';
import signup from "./signup";
class App extends Component {
  render() {
    return (
      <div className="signin">
      
  <div className="info">
    <h1>BOOKSWALE</h1>
</div>
<div className="form">
  <div className="thumbnail"><img src={logo}/></div>

  <form className="login-form">
    <input type="text" placeholder="username" required/>
    <input type="password" placeholder="password" required/>
    <button>login</button>
    <p className="message">Not registered? <HashRouter><Link to="signup">Create an account</Link></HashRouter></p>
  </form>
<HashRouter>
<Route path="signup" component={signup} /></HashRouter>
</div>

      </div>
    );
  }
}

export default App;
