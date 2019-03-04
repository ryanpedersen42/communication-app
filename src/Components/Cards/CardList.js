import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from './Card'

class CardList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allPosts: [],
      userPosts: [],
      username: this.props.user.user,
    }
  }

  componentDidMount() {
    Promise.all([
      fetch('http://localhost:3000/api/loadUserPosts', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: this.state.username,
        })
      }),
      fetch('http://localhost:3000/api/loadAllPosts', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: this.state.username,
        })
      })
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => this.setState({
          userPosts: data1, 
          allPosts: data2
      }))
  }

  loadUserPosts = () => {
    this.setState({ renderThis: 'userPosts' })
  }

  loadAllPosts = () => {
    this.setState({ renderThis: 'allPosts' })
  }

  //algorithm from reddit to be converted for this 
//   from datetime import datetime, timedelta
// from math import log

// epoch = datetime(1970, 1, 1)

// def epoch_seconds(date):
//     td = date - epoch
//     return td.days * 86400 + td.seconds + (float(td.microseconds) / 1000000)

// def score(ups, downs):
//     return ups - downs

// def hot(ups, downs, date):
//     s = score(ups, downs)
//     order = log(max(abs(s), 1), 10)
//     sign = 1 if s > 0 else -1 if s < 0 else 0
//     seconds = epoch_seconds(date) - 1134028003
//     return round(sign * order + seconds / 45000, 7)
  
  render() {
    const { allPosts } = this.state;
    const sortedPostsAll = allPosts.sort((a, b) => (a.upvotes > b.upvotes) ? -1 : 1)

    return (
      <div>
   
      {
        sortedPostsAll.map((post, i) => {
          return(
          <Card 
          key={i}
          id={allPosts[i].id}
          username={allPosts[i].username}
          title={allPosts[i].title}
          text={allPosts[i].text}
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
