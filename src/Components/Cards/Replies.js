import React, { Component } from 'react';

class Replies extends Component { 
  constructor(props){
    super(props);
    this.state = {
      postSelected: false,
    }
  };

  render() {
    const { username, text } = this.props; 

      return ( 
        <div className='border'>
          <p>{username}: {text}</p>
        </div>
        
      );
  }
}

export default Replies;