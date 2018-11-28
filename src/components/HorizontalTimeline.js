import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

var activites = [
  {name: 'work', time: '12:00'},
  {name: 'excercise', time: '1:00'},
  {name: 'read', time: '2:00'},
  {name: 'eat', time: '3:00'}
]

class HorizontalTimeline extends Component {
  state = {
    data: [...activites].map((d, index) => ({
      key: `item-${index}`,
      label: d.name,
      time: d.time
    })),
    schedule: [
      '12:00',
      '1:00',
      '2:00',
      '3:00',
    ],
    start: '12:00',
    end: '4:00'
  }

  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    if(this.state.data.length <= 4) {
      return (
        <TouchableOpacity
          style={styles.draggableItem}
          onLongPress={move}
          onPressOut={moveEnd}
        >
          <Text>Event!</Text>
        </TouchableOpacity>
      )
    } else if (this.state.data.length > 4 && this.state.data.length <= 6) {
      return (
        <TouchableOpacity
          style={styles.draggableItemMedium}
          onLongPress={move}
          onPressOut={moveEnd}
        >
          <Text>More Events!</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          style={styles.draggableItemSmall}
          onLongPress={move}
          onPressOut={moveEnd}
        >
          <Text>Most Events!</Text>
        </TouchableOpacity>
      )
    }
  }
  handleDara = newData => {
    let recievedData = newData;
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.upperContainer}>
          <DraggableFlatList 
            data={this.state.data}
            horizontal={true}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `draggable-item-${item.key}`}
            onMoveEnd={({data}) => this.handleData(data)}
            extraData={this.state}
          />
        </View>
        <View style={styles.lowerContainer}>
          <View><Text style={styles.timelineText}>{this.state.start}</Text></View>
          <View style={styles.timeline}></View>
          <View><Text style={styles.timelineText}>{this.state.end}</Text></View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button: {

  },
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#331832',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  upperContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

  },
  lowerContainer: {
    flex: .1,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    
  },
  timeline: {
    width: '80%',
    height: '50%',
    backgroundColor: 'grey'
  },
  timelineText: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 'bold'
  },
  draggableItem: {
   width: 80,
   margin: 2,
   height: '100%'
  },
  draggableItemMedium: {
    width: 55,
    margin: 2,
    height: '100%'
  },
  draggableItemSmall: {
    width: 30,
    margin: 2,
    height: '100%'
  }
})

export default HorizontalTimeline;