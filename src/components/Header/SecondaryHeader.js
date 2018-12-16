import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SecondaryHeader extends Component {
  render() {
    return (
      <View style={{height: 90, flexDirection: 'row', backgroundColor: '#696969'}}>
        <TouchableOpacity
          style={{
            flex: .2,
            height: '100%',
            backgroundColor: '#D81E5B',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => this.props.navigator.pop()}
        >
          <Icon name='ios-arrow-back' size={60} color='#696969'></Icon>
        </TouchableOpacity>
        <View
          style={{
            flex: .8,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontFamily: 'Helvetica',
              fontWeight: 'normal',
              fontSize: 30,
              color: '#FDFFCB',
              letterSpacing: 8,
              textAlign: 'center'
            }}
          >
            {this.props.title}
          </Text>
        </View>
      </View>
    );
  }
}