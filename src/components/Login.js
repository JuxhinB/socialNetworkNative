import React, { Component } from 'react';
import { View, TextInput, KeyboardAvoidingView, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { style } from '../style/style';
//import { AsyncStorage } from 'react-native';
import { UnAuthorizedNav } from '../navigators/UnAuthorizedNav';
import { _emailChange } from '../actions/_emailChange';
import { _passwordChange } from '../actions/_passwordChange';
import { _loginSuccess } from '../actions/_loginSuccess';

class Login extends Component {

    handleEmailChange = async (email) => {
        await this.props._emailChange(email);
    }
    handlePasswordChange = async (password) =>{
        await this.props._passwordChange(password);
    }

    handleLoginPress =  () => {
        const {email, password} = this.props;
        this.props._loginSuccess(email,password);
    }

    errorLoginCheck = () =>{
        if(this.props.error){
            return(
                <View>
                    <Text>{this.props.error}</Text>
                </View>
            )
        }
    }

    handleWait = () =>{
        if(this.props.loading===true){
            return(
                <Text>Please Wait !</Text>
            );
        }
        else{
            return(
                <Button onPress={this.handleLoginPress} title={'Log In'} />
            );
        }
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

            {this.handleWait()}
            
            {this.errorLoginCheck()}
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = ({login}) =>{
    const {email, password,loading,error} = login;
    return ({email, password, loading, error});
}

export default connect(
    mapStateToProps,
    { 
        _emailChange, 
        _passwordChange,
        _loginSuccess
    }
)(Login);