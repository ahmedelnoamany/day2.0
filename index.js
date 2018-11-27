import React from 'react';
import {AppRegistry, SafeAreaView, StyleSheet} from 'react-native';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import configureStore from './src/redux/configureStore';
import App from './App';

const store = configureStore();

const day = () => (
  <SafeAreaView style={styles.safeArea}>
    <Provider store={store}>
      <App />
    </Provider>
  </SafeAreaView>
 
)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EB6B6B'
  }
})

AppRegistry.registerComponent('day2', () => day);
