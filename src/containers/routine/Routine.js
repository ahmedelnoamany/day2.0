import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';

import { changeView } from '../../redux/actions/BaseActions';

import Morning from './Morning';
import Afternoon from './Afternoon';
import Evening from './Evening';

class Routine extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    console.log('The current Active view from store is: ', this.props.activeView)
    return (
      <Swiper 
        loop={false} 
        showsPagination={false} 
        horizontal={true} 
        onIndexChanged={(index) => this.props.changeView(index)}
      >
        <Morning />
        <Afternoon />
        <Evening />
      </Swiper>
    )
  }
}

function bindActions(dispatch) {
  return {
    changeView: index => dispatch(changeView(index)),
  };
}

const mapStateToProps = state => ({
  activeView: state.BaseReducer.activeView,
  
});

export default connect(mapStateToProps, bindActions)(Routine);

