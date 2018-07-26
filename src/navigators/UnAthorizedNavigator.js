import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Login from '../Login';
import Signup from '../Signup';

export const UnAuthorizedNavigation = createBottomTabNavigator(
    {
    Login :{
        screen :Login
    },
    Signup:{
        Signup:Signup
    }
});