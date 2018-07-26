import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'

export default class Logout extends Component {
    clearFirst = async() => {
      try {
          await AsyncStorage.clear();
          this.props.navigation.navigate('Login');
      } catch (error) {
          console.warn(error);
      }
  }
    // _bootstrapAsync = async () => {
    //     const userToken = await AsyncStorage.getItem('token');
    // }

  componentDidMount(){
    //   if(){

    //   }
    //   else{

    //   }
      this.clearFirst();
  }
  
  render() {
    return (
      <View>
        <Text>
            {"Logging Out"}
        </Text>
      </View>
    )
  }
}