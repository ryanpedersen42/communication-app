import React, { Component } from 'react';

class Replies extends Component { 
  render() {
    const { username, text } = this.props; 
      return ( 
        <div className='bl'>
          <p>{username}: {text}</p>
        </div>
      );
  }
}

export default Replies;