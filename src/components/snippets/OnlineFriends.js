import React, { Component } from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import { getFriendInfo } from '../../actions/getFriendInfo';
import { getFriends } from '../../actions/getFriends';

export default class OnlineFriends extends Component {
    state = {
        chat:{},
        id:'',
        name:'',
        token:''
    }
    
    getChatList = async() =>{
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


    setCurrentUserInfo = async ()=>{
        //get the current user id
        await AsyncStorage.getItem('id').then(result=>{
            if(result){
              this.setState({id:result});
            }
        });
        //get the current user name
        await AsyncStorage.getItem('name').then(result=>{
            if(result){
              this.setState({name:result});
            }
        });
        //get the current user token from props
        await AsyncStorage.getItem('token').then(result=>{
            if(result){
              this.setState({token:result});
            }
        });
    }

    checkId = async (user_1,user_2) =>{
        if(user_1.id!==this.state.id){
            console.warn('not me1');
            await getFriendInfo(user_1,this.state.token).then(
                result=>{
                    this.setState({id:result.data.id})
                }
            ).catch(error=>{
                console.warn(error);
            });
        }
        else if(user_2.id!==this.state.id){
            console.warn('not me2');
            await getFriendInfo(user_2,token).then(
                result=>{
                    this.setState({name:result.data.name})
                }
            ).catch(error=>{
                console.warn(error);
            });
        }
    }

    componentDidMount(nextProps){
        //console.warn(nextProps.chat);
        this.setCurrentUserInfo();
        this.getChatList();
        const {chat} = this.state
        console.warn(chat);
        //this.checkId(user_1,user_2);
    }

    render() {
        const {chat,id,name} = this.state;
        return(
            <View>
                {
                (chat && Array.isArray(chat) && chat.length > 0 ) && chat.map(
                    (item)=>(<Text key={item.id}>{name}</Text>)
                    )
                }
            </View>
        );
    }
}