import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import ReplyList from './ReplyList.js'

class Reply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.user,
      reply: '',
      replyTitle: this.props.location.state.replyTitle,
      replyText: this.props.location.state.replyText,
      replies: {},
      ready: false,
      replyCompleted: false,
      id: this.props.location.state.id,
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/loadReplies', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.state.id,
      })
    })
    .then(response => response.json()) 
    .then(data => this.setState({ replies: data }))
    .then(this.setState({ ready: true }))
    // .then(myJSON => console.log(myJSON))
    // .then(data => this.setState({ replies: data }))
    // .then(this.setState({ ready: true }))
  }  


  onReplyChange = (event) => {
    this.setState({ reply: event.target.value });
  }

  onReply = () => {
    fetch('http://localhost:3000/api/reply', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.username,
        text: this.state.reply, 
        id: this.state.id
      })
    })
      .then((response) => response.json())
      .then(response => {
          console.log("heres the resp", response)
        }).catch((err)=>{
          console.log(err)
        })
      .then(this.setState({ replyCompleted: true }))
    }

  render() {
    const { replyTitle, id, replyText, ready } = this.state;

    if (this.state.replyCompleted) {
      return (
        <Redirect to="/" />
      )
    } 

    return (!ready) ?
      <h1>loading...</h1> :
     (
        <div>
        <section className="mw5 mw7-ns center bg-moon-gray pa3 ph3-ns relative top-2">
          <div className="form-group">
          <div>
          <h2>{replyTitle}</h2>
          <h3>{replyText}</h3>
          <ReplyList
          id={id}
           />
          </div>
            <textarea rows="3" id="text" onChange={this.onReplyChange} className="input-reset form-control ba b--black-20 pa2 mb2 db w-100" placeholder='your message' type="text" aria-describedby="name-desc" />
          </div>
          <form className="pa4 black-80">
            <div className="measure flex left-1 absolute">
              <button onClick={this.onReply} className="f6 link dim ph3 pv2 dib mb2 white bg-black" type="submit">Submit</button>    
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
    isSignedIn: state.user.isSignedIn
  }
}

export default connect(mapStateToProps)(Reply);