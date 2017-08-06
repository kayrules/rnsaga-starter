'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class ScreenTwo extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Screen Two' }</Text>
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('ScreenThree') }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow',
            marginTop:20
          }}>
          <Text>{'Go to screen three'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ () => this.props.navigation.goBack() }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'deeppink',
            marginTop:20
          }}>
          <Text>{'Go back one screen'}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
