import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Evening extends Component {
  render() {
    return (
      <View style={styles.eveningContainer}>
        <Text>Evening Routine!</Text>
      </View>
    )
  }
}

const styles =  StyleSheet.create({
  eveningContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Evening;