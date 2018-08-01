import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    alignAllCenter: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputs: {
        fontSize: 18,
        width: 150,
        textAlign: 'center',
        color : 'white'
    },
    textCenter:{
      textAlign: 'center'
    },

    firebrick: {
      backgroundColor : '#BF211E'
    },
    saffron : {
      backgroundColor: '#E9CE2C'
    },
    yellow: {
      backgroundColor: '#F9DC5C'
    },
    mindaro: {
      backgroundColor: '#E5F993'
    },
    cyan: {
      backgroundColor: '#69A197'
    },
    f_1:{
      flex:1
    },
    f_2:{
      flex:2
    },
    f_3:{
      flex:3
    }
    
  });

export const post = StyleSheet.create({
  postWrap:{
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    borderRadius:5
  },
  topText:{
    fontSize:18,
    color: 'black'
  },
  subText:{
    fontSize:14,
    color: 'gray'
  },
  postImg:{
    width: 170,
    height: 150,
    marginTop:10,
    marginBottom: 10
  },
  postContent:{
    color: 'black'
  },
  centerContent:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  postContentText:{
    color: 'black',
    fontSize: 18
  }

});