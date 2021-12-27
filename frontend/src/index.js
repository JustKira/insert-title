import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore , applyMiddleware} from 'redux';
import authReducer from './redux/reducers/authreducer';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

const store = createStore(
  authReducer,
  applyMiddleware(thunk),
)

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
