import React, { Component } from 'react';
import { AsyncStorage,View } from 'react-native';
import Login from './src/components/Login';
import Home from './src/components/Home';

export default class App extends Component {  

  state = {
    token : false
  }

  verifyToken = async () => {
      const userToken = await AsyncStorage.getItem('token');
      if(userToken){
        await this.setState({token:true});
        }
      //this.props.navigation.navigate(userToken ? 'Home' : 'Login');
  }

  render() {
    if(this.state.token === true){
      return (
        <Login/>
      );
    }else{
      return (
        <Home/>
      );
    }
  }
}
