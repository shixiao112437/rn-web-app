import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, ImageBackground, Image } from 'react-native';
import NavTop from '../../components/Nav';
const style = StyleSheet.create({
 
})
const cards = [
    {
        uri:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2F50fd3188-0812-21ad-b415-24ae901643cf%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641615602&t=978e03533450d32016db879de6f05253"
    },
    {
        uri: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F31%2F20170831114250_tiZhc.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641615602&t=ef85761d137beeeefc9aa00dbd73c85c",
    },
    {
        uri:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F27%2F20160327110046_nRyuE.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641615602&t=7f6356dadaa4fb67379f3d5f91580f9a"
    },
    {
        uri:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2F50fd3188-0812-21ad-b415-24ae901643cf%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641615602&t=978e03533450d32016db879de6f05253"
    },
    {
        uri:"https://bpic.588ku.com/back_list_pic/21/07/09/287375a18d4f0ae5f592de31801ba151.jpg!/fw/630/quality/90/unsharp/true/compress/true"
    },
    {
        uri:"https://bpic.588ku.com/back_list_pic/21/08/03/ac788be4b1a8e904032f0244ee045243.jpg!/fw/630/quality/90/unsharp/true/compress/true"
    },
]
export default class index extends Component {
    state = {
    
    }


    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavTop>用户详情</NavTop>
            

            </View>
        )
    }
}
