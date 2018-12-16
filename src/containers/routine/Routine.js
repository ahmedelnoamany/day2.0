import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';

import { changeView } from '../../redux/actions/BaseActions';

import Morning from './Morning';
import Afternoon from './Afternoon';
import Evening from './Evening';
import Header from '../../components/Header/Header';

class Routine extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    let { morningRoutine, afternoonRoutine, eveningRoutine } = this.props;
    return (
      <View style={{flex: 1, width: '100%', backgroundColor:'#EB6B6B'}}>
        <View style={{height: 90}}>
          <Header/>
        </View>
        <Swiper 
          loop={false} 
          showsPagination={false} 
          horizontal={true} 
          onIndexChanged={(index) => this.props.changeView(index)}
        >
          <Morning routine={morningRoutine} navigator={this.props.navigation}/>
          <Afternoon routine={afternoonRoutine} navigator={this.props.navigation}/>
          <Evening routine={eveningRoutine} navigator={this.props.navigation}/>
        </Swiper>
      </View>
      
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
  morningRoutine: state.BaseReducer.morningRoutine,
  afternoonRoutine: state.BaseReducer.afternoonRoutine,
  eveningRoutine: state.BaseReducer.eveningRoutine
});

export default connect(mapStateToProps, bindActions)(Routine);

