import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SecondaryHeader from '../../components/Header/SecondaryHeader';

export default class MyAchievements extends Component {
  render() {
    return (
      <View style={{flex: 1, width: '100%'}}>
        <SecondaryHeader navigator={this.props.navigation} title='My Achievements'/>
        <Text>My Achievements</Text>
      </View>
    )
  }
}