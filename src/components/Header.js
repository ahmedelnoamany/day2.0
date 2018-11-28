import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

class Header extends Component {

  renderHeader() {
    if (this.props.activeView === 0) {
      return this.renderMorningHeader();
    } else if (this.props.activeView === 1) {
      return this.renderAfternoonHeader();
    } else if (this.props.activeView === 2) {
      return this.renderEveningHeader();
    }
  }

  renderMorningHeader() {
    return (
        <View style={styles.headerContainer}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#92C5D0', '#23B5D3']}
            style={{flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
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
          style={{flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
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
          style={{flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}
        >
          <View style={styles.eveningMoon}><Text>&nbsp;</Text></View>
          <Text numberOfLines={1} style={styles.eveningText}>Good Evening</Text>
          <View style={styles.sunEvening}><Text>&nbsp;</Text></View>
        </LinearGradient>
      </View>  
    );
  }

  render() {
    return (
      this.renderHeader()
    )
  }
}
const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
    overflow: 'hidden'
  },
  sunMorning: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FDFFCB',
    marginTop: '12%',
    marginLeft: '5%'
  },
  sunAfternoon: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#FFC04A',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
  },
  sunEvening: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FDFFCB',
    marginTop: '34%',
    marginRight: '1%'
  },
  eveningMoon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFF8',
    marginTop: '-6%',
    marginLeft: '3%'
  },
  morningText: {
    fontSize: 25,
    fontWeight: 'normal',
    letterSpacing: 4,
    color: '#FDFFCB',
    marginRight: '5%',
    textAlign: 'center',
  },
  afternoonText: {
    fontSize: 25,
    fontWeight: 'normal',
    letterSpacing: 2,
    color: '#FDFFCB',
    textAlign: 'center',
    position: 'absolute',
    zIndex: 1,
    letterSpacing: 5
  },
  eveningText: {
    fontSize: 25,
    fontWeight: 'normal',
    letterSpacing: 4,
    color: '#FDFFCB',
    textAlign: 'center',
    marginLeft: '5%'
  }
})


const mapStateToProps = state => ({
  activeView: state.BaseReducer.activeView,
  
});

export default connect(mapStateToProps)(Header);
