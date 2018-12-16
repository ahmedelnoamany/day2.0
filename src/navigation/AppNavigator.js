import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { View } from 'react-native';

import Login from '../containers/account/Login';
import SignUp from '../containers/account/SignUp';

import Routine from '../containers/routine/Routine';
import Header from '../components/Header/Header';
import SecondaryHeader from '../components/Header/SecondaryHeader';
import EditSchedule from '../containers/utility/EditSchedule';

import Settings from '../containers/utility/Settings';
import Notifications from '../containers/utility/Notifications';
import MyAchievements from '../containers/utility/MyAchievements';


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  },
  Routine: {
    screen: Routine,
    navigationOptions: {
      header: null
    }
  },
  EditSchedule: {
    screen: EditSchedule,
    navigationOptions: {
      header: null
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: null
    }
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      header: null
    }
  },
  MyAchievements: {
    screen: MyAchievements,
    navigationOptions: {
      header: null
    }
  }
});

export default Navigator = createAppContainer(AppNavigator);
