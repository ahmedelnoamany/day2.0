import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import configureStore from './src/redux/configureStore';
import App from './App';

const store = configureStore();

const day = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('day2', () => day);
