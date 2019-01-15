import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Register from '../Components/Register/Register';
import SignIn from '../Components/SignIn/SignIn';
import Header from '../Components/Header/Header';import Card from '../Components/Cards/Card.js';

const initialState = {
  input: '',
  route: 'register',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
      }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { route } = this.state;
    return (
      <div>
        <Header />
        { route === 'home' 
          ? <Card />
          : ( route === 'signin'
          ? <SignIn /> 
          : <Register/> 
          )
        }
      </div>
    );
  }
}

export default App;
