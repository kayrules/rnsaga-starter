'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button } from 'native-base'
import * as Animatable from 'react-native-animatable';


export default class ScreenOne extends React.Component
{

    render(){
        return(
            <View style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                <Text>{ 'Screen One' }</Text>

                <TouchableOpacity
                    onPress={ () => this.props.navigation.navigate('ScreenTwo') }
                    style={{
                        padding:20,
                        borderRadius:20,
                        backgroundColor:'yellow',
                        marginTop:20
                    }}>
                    <Text>{'Go to next screen'}</Text>
                </TouchableOpacity>

                <Animatable.View animation="zoomInUp">
                    <Button warning onPress={() => this.props.navigation.navigate('DrawerOpen')}><Text>Open Menu</Text></Button>
                </Animatable.View>

            </View>
        )
    }
}
