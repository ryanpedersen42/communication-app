import React from 'react';
import './Header.css';
import logo from './logo.png';

const Header = () => {
  return (
    <div>
    <nav className="dt w-100 border-box pa4 ph5-ns bg-black">
    <img src={logo} alt='logo' style={{ height: 50, width: 150 }} />
    <div className="dtc v-mid w-75 tr helvetica">
      <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" href="#About" title="About">About</a>
      <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns grow white" href="#Blog" title="Store">Blog</a>
      <a className="link dim dark-gray f6 f5-ns dib white grow"  href="#Get Info" title="Contact">Get Info</a>
    </div>
  </nav>
  </div>
  )
}

export default Header;