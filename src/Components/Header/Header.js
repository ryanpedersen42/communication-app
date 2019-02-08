import React, { Component } from 'react';
import './Header.css';
import logo from './logo.png';
import { connect } from 'react-redux'

class Header extends Component {
  render() {
  return (
    <div>
    <nav className="dt w-100 border-box pa4 ph5-ns bg-black">
    <img src={logo} alt='logo' style={{ height: 50, width: 150 }} />
    <div className="dtc v-mid w-75 tr helvetica">
      <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" href="/editor" title="Editor">Write a post</a>
      <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" href="/about" title="About">About</a>
      <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns white grow" href="/getinfo" title="Contact">Get Info</a>
      <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" href="/signin" title="About">Sign In</a>
      <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" href="/register" title="About">Register</a>
      <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" href="/signout" title="About">Sign Out</a>
    </div>
  </nav>
  </div>
  )
}
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isSignedIn: state.user.isSignedIn
  }
}

export default connect(mapStateToProps)(Header); 