//keeping local state in React and not Redux for this UI-specific page
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateUser, signIn } from '../Redux/Actions/userActions';

class Register extends Component {
  constructor(props) {
    super(props);      
    this.state = {
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        canSubmit: false,
        formErrors: {
          email: '',
          username:'', 
          password: '', 
          confirmPassword: '',
          },
        formValidity: {
          email: false,
          username: false, 
          password: false, 
          confirmPassword: false,
        }
      };
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
      const { name, value } = event.target
      this.setState({
        [name]: value
      }, function(){ this.validateField(name, value)})
    }
  
    validateField(name, value) {
      if(Object.keys(this.state.formValidity).includes(name)){
        const fieldValidationErrors = this.state.formErrors
        const validity = this.state.formValidity
        const isEmail = name === "email"
        const isPassword = name === "password"
        const isPasswordConfirmation = name === "confirmPassword"
        const label = name === "confirmPassword"? 'password confirmation' : name
        const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    
        validity[name] = value.length >0
        fieldValidationErrors[name] = validity[name] ? '': `${label} is required and cannot be empty`
    
        if(validity[name]) {
          if(isPassword){
            validity[name] = value.length >= 5;
            fieldValidationErrors[name] = validity[name] ? '': `${label} should be 5 characters or more`
          }
          if(isEmail){
            validity[name] = emailTest.test(value);
            fieldValidationErrors[name] = validity[name] ? '' : `${label} should be a valid email address`
          }
          if(isPasswordConfirmation){
            validity[name] = value === this.state.password
            fieldValidationErrors[name] = validity[name] ? '' : `${label} should match password`
          }
        }
      
        this.setState({
          formErrors: fieldValidationErrors,
          formValidity: validity,
        }, () => this.canSubmit())
      }
    }
    canSubmit() {
      this.setState({ canSubmit: this.state.formValidity.email && this.state.formValidity.username && this.state.formValidity.password && this.state.formValidity.confirmPassword })
    }
  

      onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
          })
        })
          .then(response => response.json())
          .then(user => {
            if (user) {
              this.props.onUpdateUser(user.username);
              this.props.onSignIn();
            }
          })
      }

  render() {
    return(
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Username</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="username"
                  id="name"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
              <div className="invalid-feedback">{this.state.formErrors.username}</div>
              <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="invalid-feedback">{this.state.formErrors.email}</div>
              <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Password</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="invalid-feedback">{this.state.formErrors.password}</div>
              <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Confirm Password</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
              </div>
              <div className="invalid-feedback">{this.state.formErrors.confirmPassword}</div>
            </fieldset>
            <div className="">
              <button
                disabled={!this.state.canSubmit}       
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              >Register</button>
            </div>
          </div>
        </main>
      </article>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  user: state.user,
  }
}

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onSignIn: signIn
  // onApiRequest: apiRequest
};

export default connect(mapStateToProps, mapActionsToProps)(Register);