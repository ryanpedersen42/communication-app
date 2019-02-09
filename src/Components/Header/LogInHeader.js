import React, { Component } from 'react';
import './Header.css';
import logo from './logo.png';

class LogInHeader extends Component {
  render() {
  return (
    <div>
    <nav className="dt w-100 border-box pa4 ph5-ns bg-black">
    <img src={logo} alt='logo' style={{ height: 50, width: 150 }} />
    <div className="dtc v-mid w-75 tr helvetica">
      <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" href="/about" title="About">About</a>
      <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns white grow" href="/getinfo" title="Contact">Contact</a>
      <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" href="/signin" title="SignIn">Sign In</a>
      <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" href="/register" title="Register">Register</a>
    </div>
  </nav>
  </div>
  )
}
}

export default LogInHeader; 