import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import { connect } from 'react-redux'
import Register from './Components/Register';
import SignIn from './Components/SignIn';
import Header from './Components/Header/Header';
import LogInHeader from './Components/Header/LogInHeader';
import About from './Components/About.js';
import Editor from './Components/Editor.js';
import GetInfo from './Components/GetInfo.js';
import Reply from './Components/Cards/Reply.js';
import CardList from './Components/Cards/CardList.js'
import { Route, Switch } from 'react-router-dom';

class App extends Component {      
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
          <Route path="/getinfo" component={GetInfo} />
          <Route path="/editor" component={Editor} />
          <Route path="/reply" component={Reply} />
        </Switch>
      )
        : 
        <Switch>
          <Route path="/signin" component={SignIn}/>
          <Route path="/register" component={Register}/>
          <Route path="/about" component={About} />
        </Switch>
         }
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