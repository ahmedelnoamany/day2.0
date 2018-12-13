import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import Event from '../Event/Event';
import { styles } from './styles';

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
          <Event name={item.label} time={item.time} size={1} />
        </TouchableOpacity>
      )
    } else if (this.state.data.length > 4 && this.state.data.length <= 6) {
      return (
        <TouchableOpacity
          style={styles.draggableItemMedium}
          onLongPress={move}
          onPressOut={moveEnd}
        >
          <Event name={item.label} time={item.time} size={2} />
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          style={styles.draggableItemSmall}
          onLongPress={move}
          onPressOut={moveEnd}
        >
          <Event name={item.label} time={item.time} size={3} index={index}/>
        </TouchableOpacity>
      )
    }
  }
  handleData = newData => {
    let recievedData = newData;
    let { schedule } = this.state;
    let finalData = [];

    for(let i = 0; i < recievedData.length; i++) {
      recievedData[i].time = schedule[i];
      finalData.push(recievedData[i]);
    }
    this.setState({ data: finalData, schedule});
    
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

export default HorizontalTimeline;