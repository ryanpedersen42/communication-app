import React, { Component } from 'react';
import './Header.css';
import logo from './logo.png';
import altlogo from './altlogo.png';
import { NavLink } from 'react-router-dom';


class LogInHeader extends Component {
  render() {
  return (
    <div>
    <nav className="dt w-100 border-box pa4 ph5-ns bg-black">
    <img src={altlogo} alt='logo' style={{ height: 60, width: 150 }} />
    <div className="dtc v-mid w-75 tr helvetica">
      <NavLink className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" to="/about" title="About">About</NavLink>
      <NavLink className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns white grow" to="/getinfo" title="Contact">Contact</NavLink>
      <NavLink className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" to="/signin" title="SignIn">Sign In</NavLink>
      <NavLink className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" to="/register" title="Register">Register</NavLink>
    </div>
  </nav>
  </div>
  )
}
}

export default LogInHeader; 