import React, { Component } from 'react';
import { connect } from 'react-redux'
import Replies from './Replies.js'

class ReplyList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      replies: [],
      id: this.props.id,
      username: this.props.user.user,
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
      .then(text => this.setState({ replies: text}))
  }
  
  render() {
    const { replies } = this.state;

    return (
      <div>
      {
        replies.map((post, i) => {
          return(
          <Replies 
          key={i}
          id={replies[i].id}
          username={replies[i].username}
          text={replies[i].text}
          />
          );
        })
      }
      </div>
    )
  };
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(ReplyList);
