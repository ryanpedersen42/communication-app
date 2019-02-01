
import React from 'react';
class SignIn extends React.Component {

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
              disabled={!this.state.canSubmit}              
              className="b tac pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value="Register" 
              >Sign In</button>
          </div>
        </div>
    </form>
    </article>
    )
  }
}

export default SignIn;