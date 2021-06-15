import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../Screens/homeScreen';
import ReceiverDetailsScreen  from '../Screens/ReceiverDetailsScreen';




export const AppStackNavigator = createStackNavigator({
  BarterList : {
    screen : HomeScreen,
    navigationOptions:{
      headerShown : false
    }
  },

  ReceiverDetails : {
    screen : ReceiverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  },

},
  {
    initialRouteName: 'BarterList'
  }
);