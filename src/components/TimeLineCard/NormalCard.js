import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {styles} from './styles';

export default class NormalCard extends Component {
  render() {
    let { card, type } = this.props;
    return (
      <View 
        key={card.name}
        style={styles.normalCardContainer}
      >
        <View 
          style={ 
            type === 'normal' ? styles.normalCardTimeLineContainer 
            : type === 'start' ? styles.startCardTimeLineContainer 
            : styles.endCardTimeLineContainer
          }
        >
          <View style={styles.normalCardTimeLineButton}><Text>{type === 'normal' ? null : '-'}</Text></View>
        </View>
        <View style={styles.normalCard}>
          {type === 'start' && (<Text style={styles.startCardHeadingText}>Before</Text>)}
          {type === 'end' && (<Text style={styles.startCardHeadingText}>All Done</Text>)}
          <Text style={type === 'end' ? styles.endCardText : styles.normalCardActivityText}>{card.name}</Text>
        </View>
      </View>
    )
  }
}