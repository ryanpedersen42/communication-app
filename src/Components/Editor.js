import React, { Component } from 'react';
import { connect } from 'react-redux'


class Editor extends Component {
  constructor() {
    super()
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
    const formdata = new FormData()
    formdata.append('author_id', this.props.user.username)



    const url = fetch()
    fetch('http://localhost:3000/editor', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.username,
        title: this.state.title,
        text: this.state.text,
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
    })
  }
  
  render() {
    return(
      <div>
      <section class="mw5 mw7-ns center bg-moon-gray pa3 ph3-ns relative">
      <a class="f6 link dim ph3 pv2 dib right mb2 white bg-black absolute top-1 right-1" href="#0">X</a>
      <input id="title" class="input-reset ba b--black-20 pa2 mb2 db w-100" placeholder='title' type="text" aria-describedby="name-desc" />
      {/* username populates here */}
      <input id="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" placeholder='your message' type="text" aria-describedby="name-desc" />
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

const matchStateToProps = state => {
  return {
    user: state.authUser.user
  }
}

export default connect(matchStateToProps)(Editor);