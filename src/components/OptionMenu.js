import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class OptionMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsActive: false
    }
  }
  renderButtons() {
    return (
      <View style={styles.buttonActive}>
        <TouchableOpacity onPress={() => this.setState({ optionsActive: false})} style={styles.exitButton}><Text>x</Text></TouchableOpacity>
        <View style={styles.buttonContainerA}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableOpacity style={styles.option}><Icon name='event' size={50} color='#0098E5'></Icon></TouchableOpacity>
            <Text style={styles.optionText}>Add Event</Text>
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableOpacity style={styles.option}><Icon name='schedule' size={50} color='#0E5183'></Icon></TouchableOpacity>
            <Text style={styles.optionText}>Edit Schedule</Text>
          </View>
        </View>
        <View style={styles.buttonContainerB}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableOpacity style={styles.option}><Icon name='notifications' size={50} color='#F6422E'></Icon></TouchableOpacity>
            <Text style={styles.optionText}>Manage Notifications</Text>
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableOpacity style={styles.option}><Icon name='stars' size={50} color='#FEC900'></Icon></TouchableOpacity>
            <Text style={styles.optionText}>My Achievements</Text>
          </View>
        </View>
      </View>
    )
  }
  renderSwitch() {
    return (
      <TouchableOpacity 
        style={styles.buttonInactive}
        onPress={() => this.setState({ optionsActive: true })}
      >
        <Icon name='menu' size={30}></Icon>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View 
        style={this.state.optionsActive ? styles.optionsOpen : styles.optionsContainer}
      >
        {this.state.optionsActive ? this.renderButtons() : this.renderSwitch()}
      </View>

    )
  }
}
const styles = StyleSheet.create({
  optionsContainer: {
    flex: .05,
    width: '100%',
  },
  optionsOpen: {
    flex: .4,
    width: '100%',
  },
  buttonInactive: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems : 'center'
  },
  buttonActive: {
    flex: 1,
    marginVertical: '1%',
    backgroundColor: '#FFFFFF',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  buttonContainerA: {
    flex: .5,
    marginTop: '10%',
    width: '66%',
    marginLeft: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonContainerB: {
    flex: .5,
    width: '75%',
    marginBottom: '20%',
    marginLeft: '23%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exitButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    position: 'absolute',
    top: 4,
    right: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#707070',
    borderWidth: 1
  },
  option: {
    height: 75,
    width: 70,
    borderWidth: 3,
    borderColor: '#707070',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    marginTop: '10%',
    fontFamily: 'Helvetica',
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'center'
  }
})

export default OptionMenu;