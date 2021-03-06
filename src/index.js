import React from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { API_WS_ROOT } from './constants';

import 'semantic-ui-css/semantic.min.css';

import {createStore, applyMiddleware} from 'redux';
import manageUsers from './reducers/manageUsers';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux';

const store = createStore(manageUsers, applyMiddleware(thunk))
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  <Provider store={store}>
    <ActionCableProvider url={API_WS_ROOT}>
      <App />
    </ActionCableProvider>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
