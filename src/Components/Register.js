import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, signIn } from '../Redux/Actions/userActions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  };

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.onUpdateUser(user.username);
          this.props.onSignIn();
        } 
    })
  }

  render() {
    return(
      <article className='br2 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center'>
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className={`pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100`} 
              type="email" 
              name="email-address"  
              id="email-address" 
              onChange={this.onEmailChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className={`pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100`} 
              type="password" 
              name="password"  
              id="password" 
              onChange={this.onPasswordChange}
              />
            </div>          
            </fieldset>
          <div className="">
            <button 
              className="b tac pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              onClick={this.onSubmitSignIn}
              value="SignIn" 
              >Sign In</button>
          </div>
        </div>
    </main>
    </article>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isSignedIn: state.user.isSignedIn
  }
}

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onSignIn: signIn
};

export default connect (mapStateToProps, mapActionsToProps)(SignIn);