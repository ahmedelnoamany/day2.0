import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0,
      eventName:'',
      eventIcon: false,
      setTime: '',
      index: 0
    }
  }
  componentWillMount() {
    if(!this.state.eventName) {
      let {name, time, size, index} = this.props;
      this.setState({eventName: name, setTime: time, size, index})
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props === nextProps) {
      return
    }
    this.setState({
      eventName: nextProps.name,
      setTime: nextProps.time,
      size: nextProps.size,
      index: nextProps.index
    })
  }
  renderRegularCard() {
    let { size } = this.state;
    return (
      <View style={styles.outer}>
        <View style={size === 1 ? styles.regularCard : styles.mediumCard}>
          <View style={styles.iconContainer}>
            {!this.state.eventIcon && <Text>Logo Here!</Text>}
          </View>
          <View>
            <Text 
              style={size === 1 ? styles.eventText : styles.eventTextMedium}
            >
              {this.state.eventName}
            </Text>
          </View>
        </View>
        <View style={size === 1 ? styles.regularTimeStamp : styles.mediumTimeStamp}>
          <View style={styles.timeFlag}>
            <View style={styles.timeStampContainer}>
              <Text numberOfLines={1} style={styles.timeStamp}>{this.state.setTime}</Text>
            </View> 
          </View>
        </View>
      </View>
    )
  }
  renderSmallCard = () => {
    return (
      <View style={styles.outer}>
        <View style={styles.smallTitleContainer}>
            <Text style={styles.eventTextSmall}>{this.state.eventName}</Text>
        </View>
        <View style={this.state.index % 2 === 0 ? styles.switchedSmallLine : styles.smallLine}><Text>&nbsp;</Text></View>
        <View style={styles.smallCard}><Text>&nbsp;</Text></View>
        <View style={this.state.index % 2 === 0 ? styles.switchedSmallTimeStamp : styles.smallTimeStamp}><Text>&nbsp;</Text></View>
      </View>
    )
  }
  render() {
    return this.state.size === 1 || this.state.size === 2 ? this.renderRegularCard() : this.renderSmallCard();
  }
}