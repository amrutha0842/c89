import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import Exchange from '../Screens/exchangeScreen';


export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon :   <Image source={require("../assets/home.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "HomeScreen",
    }
  },
  BookRequest: {
    screen: Exchange,
    navigationOptions :{
      tabBarIcon :<Image source={require("../assets/ads.png")} style={{width:20, height:20,}} />,
      tabBarLabel : "Exchange",
    }
  }
});
