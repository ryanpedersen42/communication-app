import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: '',
      username: this.props.user.user,
      postCompleted: false,
    }
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  onTextChange = (event) => {
    this.setState({ text: event.target.value });
  }

  submitPost = () => {
    fetch('http://localhost:3000/api/posts', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.username,
        title: this.state.title,
        text: this.state.text, 
      })
    })
      .then((response) => response.json())
      .then(response => {
          console.log("heres the resp", response)
        }).catch((err)=>{
          console.log(err)
        })
      this.setState({ postCompleted: true })
      }
  
  render() {
    if (this.state.postCompleted) {
      return (
        <Redirect to="/" />
      )
    } 
    return(
      <div>
      <section className="mw5 mw7-ns center bg-moon-gray pa3 ph3-ns relative top-2">
      <div className="form-group">
      <input id="title" className="input-reset ba b--black-20 pa2 mb2 db w-100" onChange={this.onTitleChange} placeholder='title' type="text" aria-describedby="name-desc" />
      <textarea rows="3" id="text" onChange={this.onTextChange} className="input-reset form-control ba b--black-20 pa2 mb2 db w-100" placeholder='your message' type="text" aria-describedby="name-desc" />
      </div>
      <form className="pa4 black-80">
        <div className="measure flex left-1 absolute">
          <button onClick={this.submitPost} className="f6 link dim ph3 pv2 dib mb2 white bg-black" type="submit">Submit</button>    
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
  }
}

export default connect(mapStateToProps)(Editor);