import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import { connect } from 'react-redux'
import Register from './Components/Register';
// import SignIn from './Components/SignIn';
import Header from './Components/Header/Header';
import Card from './Components/Cards/Card.js';
import LogInHeader from './Components/Header/LogInHeader';


class App extends Component {
  constructor(props) {
    super(props);
  }
      
  render() {
    const { isSignedIn } = this.props;

    return (
      <div>
      { isSignedIn === true ? <Header />: <LogInHeader/> }
        { isSignedIn === true ? <Card /> : <Register/> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isSignedIn: state.user.isSignedIn
  }
}

export default connect(mapStateToProps)(App);