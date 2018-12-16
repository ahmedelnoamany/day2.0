import React, {Component} from 'react';
import Navigator from './src/navigation/AppNavigator';

export default class App extends Component {
  render() {
    return (
        <Navigator />
    );
  }
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#EB6B6B',
//   },
//   header: {
//     flex: .1,
//     width: '100%'
//   },
//   routine: {
//     flex: .9,
//     width: '100%'
//   },
// });
