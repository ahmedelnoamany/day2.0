import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import OptionMenu from '../../components/OptionMenu/OptionMenu';
import HorizontalTimeline from '../../components/HorizontalTimeline/HorizontalTimeline';
import VerticalTimeline from '../../components/VerticalTimeline/VerticalTimeline';

class Morning extends Component {
  render() {
    return (
      <View style={styles.morningContainer}>
        <OptionMenu />
        <View style={styles.horizontalTimelineContainer}>
          <HorizontalTimeline />
        </View>
        <View style={styles.VerticalTimelineContainer}>
          <VerticalTimeline />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  morningContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  optionContainer: {
    flex: .05,
    width: '100%',
  },
  horizontalTimelineContainer: {
    flex: .3,
    width: '100%',
  },
  VerticalTimelineContainer: {
    flex: .65,
    width: '100%',
  }
});

export default Morning;