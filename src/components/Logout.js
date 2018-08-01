import React, { Component } from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native'

export default class Logout extends Component {
   handleLogout = async () =>{
    try {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Login');
    } catch (error) {
        console.warn(error);
    }
  }
  
  render() {
    return (
      <View>
            <Button onPress={this.handleLogout} title={'Log Out'} />
      </View>
    )
  }
}