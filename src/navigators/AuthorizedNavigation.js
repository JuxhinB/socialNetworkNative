import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Home from '../components/Home';


export const AuthorizedNavigation = createBottomTabNavigator(
    {
        home: {screen: Home}
    },
    {
        initialRouteName: 'Home',
    }
);