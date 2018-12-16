import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SecondaryHeader from '../../components/Header/SecondaryHeader';

export default class Notifications extends Component {
  render() {
    return (
      <View style={{flex: 1, width: '100%'}}>
        <SecondaryHeader navigator={this.props.navigation} title='Notifications'/>
      </View>
    )
  }
}