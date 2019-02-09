import React, { Component } from 'react';
import './Header.css';
import logo from './logo.png';
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
  return (
    <div>
    <nav className="dt w-100 border-box pa4 ph5-ns bg-black">
    <img src={logo} alt='logo' style={{ height: 50, width: 150 }} />
    <div className="dtc v-mid w-75 tr helvetica">
      <NavLink className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" to="/editor" title="Editor">Write a post</NavLink>
      <NavLink className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" to="/about" title="About">About</NavLink>
      <NavLink className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns white grow" to="/getinfo" title="Contact">Get Info</NavLink>
      <NavLink className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" to="/signout" title="About">Sign Out</NavLink>
    </div>
  </nav>
  </div>
  )
  }
}

export default Header; 