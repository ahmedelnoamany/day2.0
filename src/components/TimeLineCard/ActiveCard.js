import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {styles} from './styles';

export default class ActiveCard extends Component {
  render() {
    let { card } = this.props;
    return (
      <View 
        style={styles.activeCardContainer}
      >
        <Text style={styles.smallHeadingText}>Now</Text>
        <View style={styles.activeCardFlex}>
          <View style={styles.activeDetailsContainer}>
            <View style={styles.infoContainer}>
              <View style={styles.iconContainer}>

              </View>
              <View style={styles.infoContainerRight}>
                <Text style={styles.activityNameText}>{card.name}</Text>
                <Text style={styles.timeText}>From {card.time}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.streakText}>You are on an 18 day streak!</Text>
            </View>
          </View>
          <View style={styles.activeCardTimelineContainer}>
            <View style={styles.activeCardTimeline}>
              <View style={styles.activeCardTimelineButton}></View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}