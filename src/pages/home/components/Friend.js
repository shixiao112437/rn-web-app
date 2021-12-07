import React, { Component } from 'react'
import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { yongbao, linghun, dingwei, shaixuan, xiaoxi } from '../../../util/iconfont'
import SvgUri from 'react-native-svg-uri'
import { Overlay } from 'react-native-elements'
import {NavigationContext} from '@react-navigation/native'
import RNButton from '../../../components/RNButton';

const style = StyleSheet.create({
    navWrap: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        opacity: 0.7
    }
})
export default class Friends extends Component {
    //  导航上下文
    static contextType = NavigationContext; // 将navigation挂载在this上(this.context)
    state = {
        isShow: false,
        List: []
    }
    pageJump(name){
        this.context.navigate(name)
    }
    renderNavs = () => {
        return (
            <>
                <TouchableOpacity onPress={()=>{
                    this.pageJump('Tanhua')
                }}>
                    <View style={{ ...style.navWrap, backgroundColor: "red" }}>
                        <SvgUri width={40} height={40} svgXmlData={yongbao} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>

                    <View style={{ ...style.navWrap, backgroundColor: "blue" }}>
                        <SvgUri width={40} height={40} svgXmlData={dingwei} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>

                    <View style={{ ...style.navWrap, backgroundColor: "yellow" }}>
                        <SvgUri width={40} height={40} svgXmlData={linghun} />
                    </View>
                </TouchableOpacity>

            </>
        )
    }
    render() {
        return (
            //     <View>
            <ImageHeaderScrollView
                maxHeight={200}
                minHeight={80}
                headerImage={require("../../../assets/images/loginBg.jpg")}
                renderForeground={() => (

                    <View style={{ height: 80, justifyContent: "center", alignItems: "center", paddingTop: 50 }} >
                        <StatusBar translucent={true}
                            backgroundColor="transparent"
                            hidden={false}></StatusBar>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", width: "80%" }}>
                            {this.renderNavs()}
                        </View>


                    </View>
                )}
            >
                <View style={{ height: 100000, backgroundColor: "#FFF" }}>
                    <TriggeringView onHide={() => console.log("text hidden")}>
                        {/* 访客模块开始 */}
                        <View style={{ justifyContent: "space-between", backgroundColor: "#eee", paddingTop: 10, paddingLeft: 20, paddingBottom: 10 }}>
                            <Text>访客模块</Text>
                        </View>
                        {/* 访客模块开始 */}
                        <View style={{ justifyContent: "center", backgroundColor: "#eee", alignItems: "center", marginTop: 10, height: 100, marginBottom: 10 }}>
                            <Text>推荐模块</Text>
                        </View>

                        <View style={{ justifyContent: "space-between", backgroundColor: "#eee", paddingTop: 10, paddingLeft: 20, paddingBottom: 10, paddingRight: 20, flexDirection: "row" }}>
                            <Text style={{ color: "#000" }}>访客模块</Text>
                            <TouchableOpacity onPress={() => {
                                this.setState({ isShow: true });
                            }}>
                                <Text style={{ color: "#000" }}>筛选</Text>
                                <SvgUri width={20} height={20} svgXmlData={shaixuan} />
                            </TouchableOpacity>
                        </View>

                    </TriggeringView>
                    {this.renderOverlay()}
                </View>
            </ImageHeaderScrollView>


        )
    }
    // 筛选弹框
    renderOverlay = () => {
        return (
            <Overlay overlayStyle={{
                backgroundColor: " rgb(255,255,0,.3)",
                justifyContent: "flex-end",
                padding: 0
            }} fullScreen={true} isVisible={this.state.isShow}>
                <View style={{ backgroundColor: '#fff', height: 500, paddingTop: 50 }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
                        <Text>性别</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
                        <Text>登录时间</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
                        <Text>距离</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
                        <Text>居住地</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
                        <Text>学历</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
                        <RNButton textColor={'#fff'} title={'确认选择'} btnEvent={() => {
                            this.setState({ isShow: false });
                        }}>
                        </RNButton>
                    </View>

                </View>
            </Overlay>
        )

    }
    componentDidMount(){
        console.log(this.context,1111111111111)
    }
}
