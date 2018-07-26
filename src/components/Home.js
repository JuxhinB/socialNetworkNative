import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { AsyncStorage } from 'react-native';
import { getHomePost } from '../actions/getHomePost';
import UserPost from './snippets/userPost';
import { style } from '../style/style';
import { AuthorizedNavigation } from '../navigators/AuthorizedNavigation';

export default class Home extends Component {

    state = {
        token : '',
        postResult : {}
    };

    setToken = async() => {
        try {
            await AsyncStorage.getItem('token').then(result=>{
                if(result){
                    this.setState({token : result});
                }
            });
        } catch (error) {
            return 'error';
        }
    }

    async componentDidMount(){

        await this.setToken();
        await getHomePost(this.state.token).then(
            result=>{
                this.setState({
                    postResult: result.data
                });
            }
        ).catch(
            error=>{
                console.warn('err '+error);
            }
        );
    }

    render() {

    const { postResult } = this.state;

    return (
        <View>
            <AuthorizedNavigation/>
            
            <ScrollView style={style.saffron}>

                {
                (postResult && Array.isArray(postResult) && postResult.length > 0 ) && postResult.map((item)=>(
                    <UserPost key={item.id} post={item}/>
                    ))
                }

            </ScrollView>
        </View>
        );
    }
}