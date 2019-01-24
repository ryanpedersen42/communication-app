
import React from 'react';

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      name: '',
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
      // use dynamic name value to set our state object property
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

  errorClass(error) {
    return(error.length === 0 ? '' : 'is-invalid');
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  onSubmitSignIn = () => {
    fetch('localhost:3000/register/', {
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
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }


  render() {
    return(
      <article className='br2 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center'>
      <form method='POST' action='/register' className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
              <input className={`pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 ${this.errorClass(this.state.formErrors.username)}`} 
              type="name" 
              name="username"  
              id="name" 
              value={this.state.username}
              onChange={this.handleChange}
              />
              <div className="invalid-feedback">{this.state.formErrors.username}</div>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className={`pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 ${this.errorClass(this.state.formErrors.email)}`} 
              type="email" 
              name="email"  
              id="email-address" 
              value={this.state.email}
              onChange={this.handleChange}
              />
              <div className="invalid-feedback">{this.state.formErrors.email}</div>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className={`pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 ${this.errorClass(this.state.formErrors.password)}`} 
              type="password" 
              name="password"  
              id="password" 
              value={this.state.password}
              onChange={this.handleChange}
              />
              <div className="invalid-feedback">{this.state.formErrors.password}</div>
            </div>
            <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
            <input className={`pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 ${this.errorClass(this.state.formErrors.confirmPassword)}`} 
            type="password" 
            name="confirmPassword"  
            id="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            />
            <div className="invalid-feedback">{this.state.formErrors.confirmPassword}</div>
          </div>
          </fieldset>
          <div className="justify-center">
            <button 
              disabled={!this.state.canSubmit}       
              onClick={this.onSubmitSignIn}       
              className="b tac pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value="Register" 
              onClick={this.onSubmitSignIn}
              >Register</button>
          </div>
        </div>
    </form>
    </article>
    )
  }
}

export default Register;