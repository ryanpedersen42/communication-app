import React from 'react';
import { connect } from 'react-redux'
import { updateUser, signIn } from '../Redux/Actions/userActions';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
    }
  }
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }
  onSubmitSignin = () => {
    fetch('http://localhost:3000//signin/', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.onUpdateUser(user.username);
          this.props.onSignIn();
        } else {
          alert(`this un / pw combo doesn't exist`)
        } 
    })
  }

  render() {
    return(
      <article className='br2 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center'>
      <form className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className={`pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100`} 
              type="email" 
              name="email"  
              id="email-address" 
              value={this.state.email}
              onChange={this.handleChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className={`pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100`} 
              type="password" 
              name="password"  
              id="password" 
              value={this.state.password}
              onChange={this.handleChange}
              />
            </div>          </fieldset>
          <div className="justify-center">
            <button 
              className="b tac pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              onclick={this.onSubmitSignIn}
              value="Register" 
              >Sign In</button>
          </div>
        </div>
    </form>
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