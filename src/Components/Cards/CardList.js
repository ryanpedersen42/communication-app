import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from './Card'

class CardList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      username: this.props.user.user,
    }
  }

  componentDidMount() {
      fetch('http://localhost:3000/api/loadPosts', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: this.state.username,
        })
      })
      .then(response => response.json())      
      .then(text => this.setState({ posts: text}))
  }

  
  render() {
    const { posts } = this.state;

    return (
      <div>
      {
        posts.map((post, i) => {
          return(
          <Card 
          key={i}
          id={posts[i].id}
          username={posts[i].username}
          title={posts[i].title}
          text={posts[i].text}
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

export default connect(mapStateToProps)(CardList);
