import React, { Component } from 'react';
import { View, TextInput, KeyboardAvoidingView, Button } from 'react-native';
import { style } from '../style/style';
import { postLogin } from '../actions/postLogin';
import { AsyncStorage } from "react-native";

export default class Login extends Component {
    state = {
        email: 'juxhinb@gmail.com',
        password: '123456'
    };

    handleEmailChange = async (value) => {
        await this.setState({ email: value });
    }

    handlePasswordChange = async (value) =>{
        await this.setState({ password: value });
    }

    setUserInfo = async (id,name,token) => {
        try {
            await Promise.all([
                AsyncStorage.setItem('id' , id),
                AsyncStorage.setItem('name',name),
                AsyncStorage.setItem('token',"Bearer "+token),
            ]);
            } catch (error) {
            console.warn(error);
        }
    }

    handleLogin = () => {
        if (this.state.email !== '' && this.state.password !== '') {
            postLogin(this.state.email, this.state.password).then(
                result => {
                    this.setUserInfo(result.data.id, result.data.name, result.data.token);
                    this.props.navigation.navigate('Home');
                }).catch(error=>{
                    console.error('Wrong Credentials !' + error);
                });
        }
    }

    clearFirst = async() => {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.warn(error);
        }
    }
    
    componentDidMount(){
        this.clearFirst();
    }

    render() {
    return (
      <View style={[style.alignAllCenter, style.cyan]}>
        <KeyboardAvoidingView style={style.alignAllCenter}>

            <TextInput
            style={style.inputs}
            onChangeText={(value) => this.handleEmailChange(value)}
            value={this.state.email}
            placeholder={'Email Here'}
            />

            <TextInput
            style={style.inputs}
            onChangeText={(value) => this.handlePasswordChange(value)}
            value={this.state.password}
            placeholder={'Password Here'}
            secureTextEntry={true}
            />
            <Button onPress={this.handleLogin} title={'Log In'} />

        </KeyboardAvoidingView>
      </View>
    );
  }
}