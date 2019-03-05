import React from 'react';
import ReactDOM from 'react-dom';

import Blog from './Blog';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import postReducer from './reducers/postReducer';
const store = createStore(postReducer);

ReactDOM.render(
  <Provider store={store}>
    <Blog />
  </Provider>,
  document.getElementById('root')
);
