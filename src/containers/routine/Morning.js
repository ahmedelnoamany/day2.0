import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Morning extends Component {
  render() {
    return (
      <View style={styles.morningContainer}>
        <Text>Morning Routine!</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  morningContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Morning;