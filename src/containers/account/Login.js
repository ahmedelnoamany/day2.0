import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'yellow'}}>
        <Text>LOGIN FORM!!</Text>
        <TouchableOpacity 
          style={{width: 100, height: 100, backgroundColor: 'green'}}
          onPress={() => this.props.navigation.navigate('Routine')}
        >
          <Text>Go to routine</Text>
        </TouchableOpacity>
      </View>
    )
  }
}