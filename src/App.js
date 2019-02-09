import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import { connect } from 'react-redux'
import Register from './Components/Register';
import SignIn from './Components/SignIn';
import Header from './Components/Header/Header';
import Card from './Components/Cards/Card.js';
import LogInHeader from './Components/Header/LogInHeader';
import About from './Components/About.js';
import Editor from './Components/Editor.js';
import CardList from './Components/Cards/CardList.js'
import { Route, Switch } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
  }
      
  render() {
    const { isSignedIn } = this.props;

    return (
      <div>
      { isSignedIn === true ? <Header /> : <LogInHeader/> }
      { isSignedIn === true ? (
        <Switch>
          <Route exact path="/" component={CardList} />
          <Route path="/about" component={About} />
          <Route path="/editor" component={Editor} />
        </Switch>
      )
        : <SignIn/> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isSignedIn: state.isSignedIn
  }
}

export default connect(mapStateToProps)(App);