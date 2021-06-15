import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './Screens/welcomeScreen';
import HomeScreen from './Screens/homeScreen'
import Exchange from './Screens/exchangeScreen';
import SettingScreen from './Screens/settingScreen.js';
import customSidebarMenu from './components/customSidebarMenu.js'


export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
    HomeScreen: {screen: HomeScreen},
    Exchange: {screen: Exchange},
  },
  {
    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        if(routeName === "HomeScreen"){
          return(
            <Image
            source={require("./assets/home.png")}
            style={{width:20, height:20}}
          />
          )

        }
        else if(routeName === "Exchange"){
          return(
            <Image
            source={require("./assets/ads.png")}
            style={{width:20, height:20,}}
          />)

        }
      }
    })
  }
);

const AppDrawNavigator = createDrawerNavigator({
  Home : {
    screen : TabNavigator
    },
  Settings : {
    screen : SettingScreen
    }
  },
  {
    contentComponent:customSidebarMenu
  },
  {
    initialRouteName : 'Home'
  })

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  AppDrawNavigator : AppDrawNavigator,
})

const AppContainer =  createAppContainer(switchNavigator);