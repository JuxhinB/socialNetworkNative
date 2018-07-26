import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import {  createMaterialTopTabNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Login from './src/components/Login';
import Home from './src/components/Home';
import Logout from './src/components/Logout';

const UnAuthNav = createMaterialTopTabNavigator({
    Login:{
        screen: Login,
        navigationOptions: {
            tabBarVisible: false
        }
    }
});

const AuthNav = createStackNavigator({
        Home: Home
    });

class AuthCheckScreen extends Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('token');
        this.props.navigation.navigate(userToken ? 'Home' : 'Login');
    }

    render(){
        return(
            <View>
            </View>
        );
    }
}

export const Navigation = createSwitchNavigator(
    {
        AuthCheck : AuthCheckScreen,
        UnAuth : UnAuthNav,
        Auth: AuthNav
    },
    {
        initialRouteName: 'AuthCheck',
    }
);

