import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import ActiveCard from '../TimeLineCard/ActiveCard';
import NormalCard from '../TimeLineCard/NormalCard';

var activites = [
  {name: 'Good Morning!', time: ''},
  {name: 'Work', time: '12:00'},
  {name: 'Excercise', time: '1:00'},
  {name: 'Read', time: '4:00'},
  {name: 'Eat', time: '5:00'},
  {name: 'Well done on completing your morning routine! Press here to move on to your afternoon!', time:''}
]

class VerticalTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: activites,
      time: ''
    }
  }
  getTime() {
    let date = new Date();
    let hour = date.getHours();
    if (hour === 0) {
      hour = '12:00';
    } else if (hour > 12) {
      hour = hour - 12;
      hour = `${hour}:00`;
    }
    return hour;
  }
  renderCard(item, index) {
    let { routine } = this.state;
    if(index === 0)
      return <NormalCard card={item} type='start'/>
    else if (index === routine.length - 1) 
      return <NormalCard card={item} type='end'/>
    else if (item.time === this.getTime())
      return <ActiveCard card={item}/>
    else
      return <NormalCard card={item} type='normal'/>
  }
  renderRoutine() {
    return (
      <FlatList
        data={this.state.routine}
        renderItem={({item, index}) =>(this.renderCard(item, index))}
      />
    )
  }
  render() {
    return this.renderRoutine()
  }
}

export default VerticalTimeline;