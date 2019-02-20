import React, { Component } from 'react';
import './Card.css';
import { connect } from 'react-redux';

//https://codesandbox.io/s/400lp1yjjw?from-embed this might help with opening box and close button
class Card extends Component { 
  constructor(props){
    super(props);
    this.state = {
      username: this.props.user.user,
    }
    this.onFollow = this.onFollow.bind(this);
  };


  onFollow = (event) => {
    fetch('http://localhost:3000/api/follow', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.username,
        following: event,
      })
    })
    .then((response) => response.json())
    .then(response => {
        console.log('heres the resp', response)
      }).catch((err)=>{
        console.log(err)
      })
  }

  upvote = (event) => {
    fetch('http://localhost:3000/api/upvote', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        following: event,
      })
    })
    .then((response) => response.json())
    .then(response => {
      console.log('upvote resp', response)
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    const { username, title, text, id } = this.props; 
      return ( 
        <div className='pa4'>
          <section className="mw5 mw7-ns center bg-moon-gray pa3 ph3-ns relative">
            <div className="top-1 right-1 absolute">
              <button type="button" className="f6 link dim ph3 pv2 dib right mb2 white bg-black" onClick={() => this.onFollow(id)}>Follow</button>
              <button className="f6 link dim ph3 pv2 dib right mb2 white bg-black" href="#0">X</button>
            </div>
            <h1 className="mt0">{title}</h1>
            <button type="button" className="right-1 bg-black white absolute" onClick={() => this.upvote()}>^</button>
            <p className='lh-copy measure blue mb0'>
            {username}
            </p>
            <p className="lh-copy measure mt1">
              {text}
            </p>
            <form className="pa4 black-80">
              <div className="measure flex">
                <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" placeholder='reply' type="text" aria-describedby="name-desc" />
                <a className="f6 link dim ph3 pv2 dib right mb2 white bg-black" href="#0">submit</a>   
              </div>
            </form>  
          </section>
        </div>
      );
  }
}

const mapStateToProps = state => {
    return {
      user: state.user,
    }
  }

export default connect(mapStateToProps)(Card);