import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { createStore } from 'redux';

function value(store = [], action) {
  switch (action.type) {
    case 'ADD_VALUE':
      return store.concat([action.payment]);
    default:
      return store;
  }
}

const store = createStore(value);

store.dispatch({
  type: 'ADD_VALUE',
  payment: 'I got value from store'
})

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
