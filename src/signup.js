import React, { Component } from 'react';
import logo from './logo.jpg';
import './signin.css';
import {Link} from "react-router";
class Signup extends Component {
  render() {
    return (
      <div className="signup">
      
 <div className="container">
  <div className="info">
    <h1>BOOKSWALE</h1>
  </div>
</div>
<div className="form">
  <div className="thumbnail"><img src="logo.jpg"/></div>
  
  
  <form className="register-form">
    <input type="text" placeholder="name" required/>
    <input type="email" placeholder="email address" required/>
    <input type="text" placeholder="phone no" required/>
    <input type="password" placeholder="password" required/>
    <input type="password" placeholder="confirm password" required/>
    <button>create</button>
    <p className="message">Already registered? <a href="signin.html">Sign In</a></p>
  </form>
  
</div>

      </div>
    );
  }
}

export default Signup;
