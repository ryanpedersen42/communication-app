import React, { Component } from 'react';
import { connect } from 'react-redux'


class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: '',
      days: '',
      loading: false
    }
  }

  //to do: get user_id from state
  submitPost() {
    this.setState({
      loading: true
    })
    fetch('http://localhost:3000/api/posts', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.props.user.username,
        title: this.state.title,
        text: this.state.text, 
        upvotes: 0,
      })
    })
      .then((res) => {
        this.setState({
          loading: false
        })
      }).catch((err)=>{console.log(err); this.setState({loading: false})})
  }
  
  render() {
    const { username } = this.props;
    return(
      <div>
      <section class="mw5 mw7-ns center bg-moon-gray pa3 ph3-ns relative">
      <a class="f6 link dim ph3 pv2 dib right mb2 white bg-black absolute top-1 right-1" href="#0">X</a>
      <input id="title" class="input-reset ba b--black-20 pa2 mb2 db w-100" value={this.state.title} placeholder='title' type="text" aria-describedby="name-desc" />
      {username}
      <input id="text" value={this.state.text} class="input-reset ba b--black-20 pa2 mb2 db w-100" placeholder='your message' type="text" aria-describedby="name-desc" />
      <form class="pa4 black-80">
        <div class="measure flex">
          <a class="f6 link dim ph3 pv2 dib right mb2 white bg-black" href="#0">Submit</a>    
        </div>
      </form>  
    </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  user: state.user,
  username: state.user.username,
  }
}

export default connect(mapStateToProps)(Editor);