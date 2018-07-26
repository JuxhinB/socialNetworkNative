import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { style, post } from '../../style/style';
import { imgBaseAPI } from '../../globals';

export default class UserPost extends Component {
  capitalize = (name) =>{
    return name.charAt(0).toUpperCase() + name.slice(1);
    }
  render() {
    const {content, created_at, id, image, image_id, name, path, updated_at, user_id} = this.props.post;
  
    if(path){
      return (
        <View style={[post.postWrap]}>
  
          <Text style={post.topText}>
            {this.capitalize(name) } made a post !
          </Text>
          <Text style={post.subText}>
          Last update : {updated_at}
          </Text>
  
            <View style={style.centerContent}>
              <Image 
              style={post.postImg}
              source={{uri: imgBaseAPI+path}}/>
              <Text style={post.postContentText}>{content}</Text>
            </View>
        </View>
      )
    }
    else{
      return (
        <View style={[post.postWrap]}>
  
          <Text style={post.topText}>
            {this.capitalize(name) } made a post !
          </Text>
          <Text style={post.subText}>
          Last update : {updated_at}
          </Text>
            <View style={style.centerContent}>
              <Text style={post.postContentText}>{content}</Text>
            </View>
  
        </View>
      )
    }
    
  }
}
