import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import ActiveCard from '../TimeLineCard/ActiveCard';
import NormalCard from '../TimeLineCard/NormalCard';


class VerticalTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: [],
      time: ''
    }
  }
  componentWillReceiveProps(props) {
    if(props.routine) {
      let { activities } = props.routine;
      let beforeCard = {name: 'Good Morning!', time: ''};
      let afterCard = {name: 'Well done on completing your morning routine! Press here to move on to your afternoon!', time:''};
      let routine = [];
      routine.push(beforeCard);
      routine = routine.concat(activities);
      routine.push(afterCard);
      this.setState({ routine });
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
        keyExtractor={(item, index) => item.name + index}
        renderItem={({item, index}) =>(this.renderCard(item, index))}
      />
    )
  }
  render() {
    return this.renderRoutine()
  }
}

export default VerticalTimeline;