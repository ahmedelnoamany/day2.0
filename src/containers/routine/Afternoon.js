import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { styles } from './styles';

import OptionMenu from '../../components/OptionMenu/OptionMenu';
import HorizontalTimeline from '../../components/HorizontalTimeline/HorizontalTimeline';
import VerticalTimeline from '../../components/VerticalTimeline/VerticalTimeline';

class Afternoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: {}
    }
  }
  componentDidMount() {
    this.setState({ routine: this.props.routine })
  }
  render() {
    return (
      <View style={styles.morningContainer}>
        <OptionMenu navigator={this.props.navigator}/>
        <View style={styles.horizontalTimelineContainer}>
          <HorizontalTimeline routine={this.state.routine}/>
        </View>
        <View style={styles.VerticalTimelineContainer}>
          <VerticalTimeline routine={this.state.routine}/>
        </View>
      </View>

    )
  }
}


export default Afternoon;