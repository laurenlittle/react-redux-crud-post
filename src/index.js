import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import postReducer from './reducers/postReducer';
import { Provider } from 'react-redux';

// Reducer is the arguement that is passed to createStore()
const store = createStore(postReducer);

ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>, document.getElementById('root'));

