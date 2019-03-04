import React, { Component } from 'react';
import './Card.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

//https://codesandbox.io/s/400lp1yjjw?from-embed this might help with opening box and close button
class Card extends Component { 
  constructor(props){
    super(props);
    this.state = {
      username: this.props.user.user,
      postSelected: false,
    }
    this.onFollow = this.onFollow.bind(this);
    this.onUpvote = this.onUpvote.bind(this);
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
        // console.log('heres the resp', response)
      }).catch((err)=>{
        console.log(err)
      })
  }

  onUpvote = (event) => {
    fetch('http://localhost:3000/api/upvote', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: event,
      })
    })
    .then((response) => response.json())
    .then(response => {
      console.log('upvote resp', response)
    }).catch((err) => {
      console.log(err)
    })
  }

  postSelected = () => {
    this.setState({ postSelected: true })
  }

  render() {
    const { username, title, text, id } = this.props; 

    if (this.state.postSelected) {
      return (
        <Redirect to={{
          pathname: '/reply',
          state: {
            id: id,
            replyTitle: title,
            replyText: text, 
          } }}/>
      )
    }

      return ( 
        <div className='pa4'>
          <section className="mw5 mw7-ns center bg-moon-gray pa3 ph3-ns relative" >
            <div className="top-1 right-1 absolute">
              <button type="button" className="f6 link dim ph3 pv2 dib right mb2 white bg-black" onClick={() => this.onFollow(id)}>Follow</button>
              <button type="button" onClick={this.postSelected} className="f6 link dim ph3 pv2 dib right mb2 white bg-black">Open Up -></button>
            </div>
            <div>
            <h1 className="mt0">{title}</h1>
            <div className="flex-row left">
              <div>
                <button type="button" className=" bg-black white " onClick={() => this.onUpvote(id)}>^</button>
              </div>
                <p className='lh-copy measure blue mb0'>
                  {username}
                </p>
                <p className="lh-copy measure mt1">
                  {text}
                </p>
              </div>
            </div>
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