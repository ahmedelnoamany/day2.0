import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    console.log('Component has mounted');
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
    console.log('rendering card with size: ', size);
    return (
      <View style={styles.outer}>
        <View style={size === 1 ? styles.regularCard : styles.mediumCard}>
          <View style={styles.iconContainer}>
            {!this.state.eventIcon && <Text>Logo Here!</Text>}
          </View>
          <View><Text style={size === 1 ? styles.eventText : styles.eventTextMedium}>{this.state.eventName}</Text></View>
        </View>
        <View style={size === 1 ? styles.regularTimeStamp : styles.mediumTimeStamp}>
          <View style={styles.timeFlag}>
            <View style={{width: 80, justifyContent: 'center', alignItems: 'center'}}>
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
            <Text style={{ color: '#F4F4F4', fontSize: 10, fontWeight: 'normal'}}>{this.state.eventName}</Text>
        </View>
        <View style={this.state.index % 2 === 0 ? styles.switchedSmallLine : styles.smallLine}><Text>&nbsp;</Text></View>
        <View style={styles.smallCard}><Text>&nbsp;</Text></View>
        <View style={this.state.index % 2 === 0 ? styles.switchedSmallTimeStamp : styles.smallTimeStamp}><Text>&nbsp;</Text></View>
      </View>
    )
  }
  render() {
    return (
      (this.state.size === 1 || this.state.size === 2) ? this.renderRegularCard() : this.renderSmallCard()
    )
  }
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    width: '100%',
    margin: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  regularCard: {
    marginTop: '20%',
    flex: .8,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E8E8E8'
  },
  mediumCard: {
    marginTop: '20%',
    flex: .6,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E8E8E8'
  },
  regularTimeStamp: {
    flex: .2,
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  mediumTimeStamp: {
    flex: .4,
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  iconContainer: {
    marginTop: '10%',
    width: '80%',
    height: '60%',
    borderWidth: 3,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  eventText: {
    color: '#331832',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    fontFamily: 'Helvetica',
    textTransform: 'capitalize'
  },
  eventTextMedium: {
    color: '#331832',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    fontFamily: 'Helvetica',
    textTransform: 'capitalize'
  },
  timeFlag: {
    flex: 1,
    width: '5%',
    backgroundColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeStamp: {
    color: '#23B5D3',
    fontSize: 12,
    fontWeight: 'bold',
  },
  smallTitleContainer: {
    flex: .1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  smallLine: {
    width: '10%',
    flex: .2,
    backgroundColor: '#707070'
  },
  switchedSmallLine: {
    width: '10%',
    flex: .1,
    backgroundColor: '#707070'
  },
  smallCard: {
    flex: .3,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E8E8E8'
  },
  smallTimeStamp: {
    flex: .4,
    width: '10%',
    backgroundColor: '#707070',
    alignItems: 'center'
  },
  switchedSmallTimeStamp: {
    flex: .3,
    width: '10%',
    backgroundColor: '#707070',
    alignItems: 'center'
  }
})