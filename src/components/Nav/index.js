import React, { Component } from 'react'
import {View,Text,StatusBar, ImageBackground, TouchableOpacity} from 'react-native'
import { pxToWidth } from '../../util/styl';
import {NavigationContext} from '@react-navigation/native'

export default class NavTop extends Component {
    static contextType = NavigationContext
    render() {
        return (
            <View>
                <StatusBar
                backgroundColor="transparent"
                translucent={true}
                hidden={false}
                ></StatusBar>
                <ImageBackground
                source={require('../../assets/images/nav.jpeg')}
                style={{paddingLeft:20,paddingRight:20,height:pxToWidth(70),justifyContent:"space-between",flexDirection:"row",alignItems:"center",paddingTop:pxToWidth(20)}}>
                    <TouchableOpacity onPress={()=>{
                        console.log(this.context)
                        this.context.goBack()
                    }}>
                        <Text style={{fontWeight:"bold",color:'#fff',fontSize:pxToWidth(15)}}>返回</Text>
                    </TouchableOpacity>
                    <Text style={{fontWeight:"bold",color:'#fff',fontSize:pxToWidth(20)}}>
                        {this.props.children}
                    </Text>
                    <View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
