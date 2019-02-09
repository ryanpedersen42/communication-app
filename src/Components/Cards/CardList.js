import React, { Component } from 'react';
import { connect } from 'react-redux'

class CardList extends Component {
  render() {
    const { username } = this.props;
    return (
      <div>
        {username}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    username: state.user.username,
  }
}

export default connect(mapStateToProps)(CardList);
