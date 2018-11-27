import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class Afternoon extends Component {
  render() {
    return (
      <View style={styles.afternoonContainer}>
        <Text>Afternoon Routine!</Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  afternoonContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default Afternoon;