import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SecondaryHeader from '../../components/Header/SecondaryHeader';
import { styles } from './styles';

export default class EditSchedule extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      activeRoutine: 1
    }
  }
  renderRoutine() {
    return (
      <View style={styles.eventContainer}>
        <View style={styles.routineCard}><Text>Card</Text></View>
        <View style={styles.routineCard}><Text>Card</Text></View>
      </View>
    )
  }
  setActiveRoutine(index) {
    let { activeRoutine } = this.state;
    if(index === activeRoutine) {
      return;
    } else {
      this.setState({ activeRoutine: index });
    }
  }
  render() {
      let { activeRoutine } = this.state;
    return (
      <View style={styles.secondaryPageContainer}>
        <SecondaryHeader navigator={this.props.navigation} title='Edit Schedule'/>
        <View style={styles.tabNavContainer}>
          <TouchableOpacity 
            style={activeRoutine === 1 ? [styles.navButton, styles.activeNav] : styles.navButton}
            onPress={() => this.setActiveRoutine(1)}
          >
            <Text>Morning</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={activeRoutine === 2 ? [styles.navButton, styles.activeNav] : styles.navButton}
            onPress={() => this.setActiveRoutine(2)}
          >
            <Text>Afternoon</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={activeRoutine === 3 ? [styles.navButton, styles.activeNav] : styles.navButton}
            onPress={() => this.setActiveRoutine(3)}
          >
            <Text>Evening</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.optionButtonContainer}>
          <View style={styles.singleOption}>
            <Text>Morning Alarm?</Text>
            <TouchableOpacity style={styles.optionToggle}></TouchableOpacity>
          </View>
          <View style={styles.singleOption}>
            <Text>Morning Routine Notifications</Text>
            <TouchableOpacity style={styles.optionToggle}></TouchableOpacity>
          </View>
          <View style={styles.singleOption}>
            <Text>Disable Morning Routine</Text>
            <TouchableOpacity style={styles.optionToggle}></TouchableOpacity>
          </View>
        </View>
        <View style={styles.routineContainer}>
          <View style={styles.newEventContainer}>
            <TouchableOpacity style={styles.newEventButton}>
                <Text style={styles.newEventText}>Add New Event</Text>
            </TouchableOpacity>
          </View>
          {this.renderRoutine()}
        </View>
        
      </View>
    )
  }
}
