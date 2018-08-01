import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import { UnAuthorizedNav } from './UnAuthorizedNav';
import { AuthorizedNav } from './AuthorizedNav';


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

verifyToken = async () => {
    const userToken = await AsyncStorage.getItem('token');
    if(userToken != null){
      await this.setState({token:true});
      }
}

export const SwitchNav = createSwitchNavigator(
    {
        AuthCheck : AuthCheckScreen,
        Guest : UnAuthorizedNav,
        User: AuthorizedNav
    },
    {
        initialRouteName: 'AuthCheck',
    }
);