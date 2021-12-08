import React, { Component } from 'react'
import {View,Text} from 'react-native';
import NavTop from '../../components/Nav';
export default class index extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <NavTop>探花交友</NavTop>
            </View>
        )
    }
}
