import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import userReducer from './Redux/Reducers/userReducer'
import thunk from 'redux-thunk';
import { BrowserRouter, Switch } from "react-router-dom";

const rootReducer = combineReducers({ 
  user: userReducer,
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  rootReducer,
  allStoreEnhancers
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <App />       
      </Switch>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
