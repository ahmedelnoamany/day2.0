import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Switch from 'react-native-customisable-switch';
import SecondaryHeader from '../../components/Header/SecondaryHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';

class EditSchedule extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      activeRoutine: 1,
      routineSwitches: [
        {title: 'Morning Alarm?', enabled: false},
        {title: 'Morning Routine Notifications', enabled: false},
        {title: 'Disable Morning Routine', enabled: false}
      ]
    }
  }
  renderRoutine() {
    let { morningRoutine, afternoonRoutine, eveningRoutine } = this.props;
    let { activeRoutine } = this.state;
    let currentEventList = null;
    if(activeRoutine === 1) {
      currentEventList = morningRoutine.activities;
    } else if (activeRoutine === 2) {
      currentEventList = afternoonRoutine.activities;
    } else if (activeRoutine === 3) {
      currentEventList = eveningRoutine.activities;
    }
    return (
      <ScrollView style={{flex: 1, width: '100%'}}>
        <View style={styles.eventContainer}>
        {currentEventList.map((event, index) => {
          return this.renderRoutineCard(event, index);
        })}
        </View>
      </ScrollView>
    )
  }
  renderRoutineCard(event, index) {
    return (
      <View style={styles.routineCard}>
        <View style={styles.routineCardTextContainer}>
          <Text style={styles.routineCardText}>{event.name}</Text>
          <Text style={styles.routineCardText}>@</Text>
          <Text style={styles.routineCardText}>{event.time}</Text>
        </View>
        <View style={styles.routineCardButtonContainer}>
          <TouchableOpacity>
            <Icon name='bell' size={30} color='#331832'></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='square-edit-outline' size={30} color='#331832'></Icon>
          </TouchableOpacity>
        </View>
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
  renderRoutineToggles() {
    let { routineSwitches } = this.state;
    return routineSwitches.map( (item, index) => {
      return (
        <View style={styles.singleOption}>
          <Text>{item.title}</Text>
          <Switch 
            value={item.enabled}
            onChangeValue={() => this.toggleSwitch(index)}
            switchBorderRadius={0}
            switchWidth={70}
            switchHeight={40}
            buttonBorderRadius={0}
            buttonHeight={30}
            buttonWidth={30}
            inactiveBackgroundColor={'rgba(51, 24, 50, .5)'}
            activeBackgroundColor={'#331832'}
          />
        </View>
      )
    });
  }
  toggleSwitch(index) {
    let { routineSwitches } = this.state;
    routineSwitches[index].enabled = !routineSwitches[index].enabled;
    this.setState(routineSwitches)

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
          {this.renderRoutineToggles()}
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

const mapStateToProps = state => ({
  morningRoutine: state.BaseReducer.morningRoutine,
  afternoonRoutine: state.BaseReducer.afternoonRoutine,
  eveningRoutine: state.BaseReducer.eveningRoutine
})

export default connect(mapStateToProps)(EditSchedule);