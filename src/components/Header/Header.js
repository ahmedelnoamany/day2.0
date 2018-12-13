import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

class Header extends Component {

  renderHeader() {
    if (this.props.activeView === 0)
      return this.renderMorningHeader();
    else if (this.props.activeView === 1) 
      return this.renderAfternoonHeader();
    else if (this.props.activeView === 2) 
      return this.renderEveningHeader();
  }

  renderMorningHeader() {
    return (
        <View style={styles.headerContainer}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#92C5D0', '#23B5D3']}
            style={styles.linearGradientContainerMorning}
          >
            <View style={styles.sunMorning}><Text>&nbsp;</Text></View>
            <Text style={styles.morningText}>Good Morning</Text>
          </LinearGradient>
        </View>  
    );
  }

  renderAfternoonHeader() {
    return (
      <View style={styles.headerContainer}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#23B5D3', '#279AF1']}
          style={styles.linearGradientContainerAfternoon}
        >
          <View style={styles.sunAfternoon}><Text>&nbsp;</Text></View>
          <Text numberOfLines={1} style={styles.afternoonText}>Good Afternoon</Text>
        </LinearGradient>
      </View>  
    );
  }

  renderEveningHeader() {
    return (
      <View style={styles.headerContainer}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#279AF1', '#001242']}
          style={styles.linearGradientContainerEvening}
        >
          <View style={styles.eveningMoon}><Text>&nbsp;</Text></View>
          <Text numberOfLines={1} style={styles.eveningText}>Good Evening</Text>
          <View style={styles.sunEvening}><Text>&nbsp;</Text></View>
        </LinearGradient>
      </View>  
    );
  }

  render() {
    return this.renderHeader();
  }
}

const mapStateToProps = state => ({
  activeView: state.BaseReducer.activeView,
  
});

export default connect(mapStateToProps)(Header);
