import React, { Component } from 'react';
import { AsyncStorage, Text, View, ScrollView } from 'react-native';
import OnlineFriends from './snippets/OnlineFriends';
import { getFriends } from '../actions/getFriends'
import { style } from '../style/style';
import { chat } from '../style/chat';

export default class ChatWindow extends Component {
  state={
    chat:{},
    token:''
  }

  async componentDidMount(){


    store.getState();

    try {
        await AsyncStorage.getItem('token').then(result=>{
            if(result){
              this.setState({token:result})
            }
        });
    } catch (error) {
        return 'error';
    }

    await getFriends(this.state.token).then(
        result=>{
          this.setState({chat : result.data});
        }
    ).catch(error=>{
      console.warn(error)
    });

  }


  render() {
    const { chat, token } = this.state;
    return (
      <View style={[style.saffron,style.f_1]}>
        <ScrollView >
          <Text style={chat.label}> Friends available for chat : </Text>
          <ScrollView horizontal={true}>
          {
            (chat && Array.isArray(chat) && chat.length > 0 ) && chat.map(
                (item)=>(<Text key={item.id}>{item.user2}</Text>)
                )
            }
          </ScrollView>
        </ScrollView>
      </View>
    )
  }
}