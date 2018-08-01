import React, { Component } from 'react';
import { View, TextInput, KeyboardAvoidingView, Button } from 'react-native';
import { connect } from 'react-redux';
import { style } from '../style/style';
import { postLogin } from '../actions/postLogin';
import { AsyncStorage } from 'react-native';
import { UnAuthorizedNav } from '../navigators/UnAuthorizedNav';
import { _emailChange } from '../actions/_emailChange';
import { _passwordChange } from '../actions/_passwordChange';

class Login extends Component {

    handleEmailChange = async (email) => {
        this.props._emailChange(email);
    }
    handlePasswordChange = async (password) =>{
        this.props._passwordChange(password);
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
            onChangeText={this.handleEmailChange.bind(this)}
            placeholder={'Email Here'}
            />

            <TextInput
            style={style.inputs}
            onChangeText={this.handlePasswordChange.bind(this)}
            placeholder={'Password Here'}
            secureTextEntry={true}
            />
            <Button onPress={this.handleLogin} title={'Log In'} />

        </KeyboardAvoidingView>
      </View>
    );
  }
}


export default connect(null,{ _emailChange,_passwordChange })(Login);