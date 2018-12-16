import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

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
        <TouchableOpacity 
          onPress={() => this.setState({ optionsActive: false})} 
          style={styles.exitButton}
        >
          <Text>x</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainerA}>
          <View style={styles.buttonContents}>
            <TouchableOpacity 
              style={styles.option}
            >
              <Icon name='event' size={50} color='#0098E5'></Icon>
            </TouchableOpacity>
            <Text style={styles.optionText}>Add Event</Text>
          </View>
          <View style={styles.buttonContents}>
            <TouchableOpacity 
              style={styles.option}
              onPress={() => this.props.navigator.navigate('EditSchedule')}
            >
              <Icon name='schedule' size={50} color='#0E5183'></Icon>
            </TouchableOpacity>
            <Text style={styles.optionText}>Edit Schedule</Text>
          </View>
        </View>
        <View style={styles.buttonContainerB}>
          <View style={styles.buttonContents}>
            <TouchableOpacity 
              style={styles.option}
              onPress={() => this.props.navigator.navigate('Notifications')}
            >
              <Icon name='notifications' size={50} color='#F6422E'></Icon>
            </TouchableOpacity>
            <Text style={styles.optionText}>Manage Notifications</Text>
          </View>
          <View style={styles.buttonContents}>
            <TouchableOpacity 
              style={styles.option}
              onPress={() => this.props.navigator.navigate('MyAchievements')}
            >
              <Icon name='stars' size={50} color='#FEC900'></Icon>
            </TouchableOpacity>
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
    console.log('Options menu loaded, nav is: ', this.props.navigator);
    return (
      <View 
        style={this.state.optionsActive ? styles.optionsOpen : styles.optionsContainer}
      >
        {this.state.optionsActive ? this.renderButtons() : this.renderSwitch()}
      </View>

    )
  }
}

export default OptionMenu;