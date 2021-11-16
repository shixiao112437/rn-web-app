import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, StatusBar} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {pxToWidth} from '../../../util/styl';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import RNButton from '../../../components/RNButton/index';
const styly = StyleSheet.create({
  bgLogin: {
    width: '100%',
    height: 300,
  },
  loginTitle: {
    padding: pxToWidth(30),
  },
  telNum: {
    fontSize: pxToWidth(20),
    color: '#dfc026',
  },
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    color: '#dfc026',
  },
  focusCell: {
    borderColor: '#dfc026',
  },
  codeTitle:{
    fontSize:20,
    fontWeight:"700",
    marginBottom:10,
  },
  codeTip:{
    fontSize:16
  }
});
export default class Login extends Component {
  state = {
    tel: '15830104417',
    isShow: true,
    code: '',
  };
  getPhoneNum = () => {
    setTimeout(() => {
      this.setState({isShow: false});
    });
  };
  // 渲染验证码部分
  renderCode() {
    return (
      <>
        <View>
          <Text style={styly.codeTitle}>输入4位验证码</Text>
        </View>
        <View>
          <Text style={styly.codeTip}>已发到：+86 {this.state.tel}</Text>
        </View>

        <CodeField
          value={this.state.code}
          onChangeText={code => {
            this.setState({
              code,
            });
          }}
          keyboardType={'number-pad'} // 数字键盘
          rootStyle={{
            marginBottom: 20,
          }}
          // textContentType={'oneTimeCode'}
          cellCount={4}
          renderCell={({index, symbol, isFource}) => {
            return (
              <Text
                style={[styly.cell, isFource && styly.focusCell]}
                key={index}>
                {symbol || (isFource ? <Cursor /> : null)}
              </Text>
            );
          }}
        />
        <RNButton
          textColor={'#fff'}
          title={'重新获取 '}
          btnEvent={() => {
            this.getPhoneNum();
          }}></RNButton>
      </>
    );
  }
  // 渲染按钮
  renderBtn = () => {
    const {tel, isShow} = this.state;

    return (
      // <View style={{justifyContent: 'center', flexDirection: 'row'}}>
      <>
        <Text style={styly.telNum}>手机号登录注册</Text>
        <Input
          keyboardType="phone-pad"
          maxLength={11}
          value={tel}
          leftIcon={{type: 'font-awesome', name: 'comment'}}
          onChangeTex={tel => {
            this.setState({tel});
          }}
          placeholder="请输入手机号"
        />
        <RNButton
          textColor={'#fff'}
          title={'获取手机号验证码'}
          btnEvent={() => {
            this.getPhoneNum();
          }}></RNButton>
      </>
    );
  };

  render() {
    const {tel, isShow} = this.state;

    return (
      <View>
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          hidden={false}></StatusBar>
        <Image
          style={styly.bgLogin}
          source={require('../../../assets/images/loginBg.jpg')}></Image>

        <View style={styly.loginTitle}>
          {isShow ? this.renderBtn() : this.renderCode()}
        </View>
      </View>
    );
  }
}
