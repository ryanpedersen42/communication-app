import React, { Component } from 'react';
import './Header.css';
import altlogo from './altlogo.png';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import signOut from './SignOut';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state={
      signedOut: false,
    }
  }

  render() {
    return (
      <div>
        <nav className="dt w-100 border-box pa4 ph5-ns bg-black">
        <img src={altlogo} alt='logo' style={{ height: 60, width: 150 }} />
        <div className="dtc v-mid w-75 tr helvetica">
          <NavLink className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" to="/" title="CardList">Home</NavLink>
          <NavLink className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" to="/editor" title="Editor">Write a post</NavLink>
          <NavLink className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" to="/about" title="About">About</NavLink>
          <NavLink className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" onClick={this.props.onSignOut} to="/signin" title="About">Sign Out</NavLink>
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

const mapActionsToProps = {
  onSignOut: signOut,
};

export default connect(mapStateToProps, mapActionsToProps)(Header); 