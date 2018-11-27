import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Routine from './src/containers/routine/Routine';
import Header from './src/components/Header';

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.routine}>
            <Routine />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    flex: .1
  },
  routine: {
    flex: .9
  },
});
