import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, StatusBar } from 'react-native';
import {  Input,Overlay } from 'react-native-elements';
import { pxToWidth } from '../../../util/styl';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import RNButton from '../../../components/RNButton/index';
import {connect} from 'react-redux'
import {setTokenAction,asyncSetToken} from '../../../redux/actions/index'
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
  root: { flex: 1, padding: 20 },
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
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
  codeTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  codeTip: {
    fontSize: 16,
  },
});
 class Login extends Component {
  state = {
    tel: '15830104417',
    isShow: true,
    code: '',
    btnText: '重新获取',
    isLoading: false,
    visible: false
  };
  getPhoneNum = () => {
    alert('获取手机验证码');
    this.setState({
      isShow: false,
    });
    // 开启定时器
    this.countDown();
  };
  // 
  // 重新获取验证码
  repeatGetNum() {
    this.countDown();
  }
  //  开启获取验证码的定时器
  countDown() {
    if (this.state.isLoading) {
      return;
    }
    this.setState({ isLoading: true });
    let seconds = 5;
    this.setState({ btnText: `重新获取${seconds}s` });
    let timeId = setInterval(() => {
      seconds--;
      this.setState({ btnText: `重新获取${seconds}s` });
      if (seconds == 0) {
        clearInterval(timeId);
        this.setState({ btnText: `重新获取`, isLoading: false });
      }
    }, 1000);
  }
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
          onSubmitEditing={this.login}
          keyboardType={'number-pad'} // 数字键盘
          rootStyle={{
            marginBottom: 20,
          }}
          // textContentType={'oneTimeCode'}
          cellCount={4}
          renderCell={({ index, symbol, isFource }) => {
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
          disabled={this.state.isLoading}
          textColor={'#fff'}
          title={this.state.btnText}
          btnEvent={() => {
            this.repeatGetNum();
          }}></RNButton>
        <Overlay animated='slide' isVisible={this.state.visible}>
        <RNButton
          textColor={'#fff'}
          title={'跳转用户信息'}
          btnEvent={() => {
            this.setState({ visible:false },()=>{
              this.props.navigation.navigate("UserInfo")
            });
          }}></RNButton>
             <RNButton
          textColor={'#fff'}
          title={'跳转首页'}
          btnEvent={() => {
            this.setState({ visible:false },()=>{
              this.props.navigation.navigate("Home")
            });
          }}></RNButton>
        </Overlay>
      </>
    );
  }
  // 渲染按钮
  renderBtn = () => {
    const { tel, isShow } = this.state;
    return (
      // <View style={{justifyContent: 'center', flexDirection: 'row'}}>
      <>
        <Text style={styly.telNum}>手机号登录注册</Text>
        <Input
          keyboardType="phone-pad"
          maxLength={11}
          value={tel}
          leftIcon={{ type: 'font-awesome', name: 'comment' }}
          onChangeTex={tel => {
            this.setState({ tel });
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
  // 登录
  login = () => {
    if (this.state.code.length !== 4) {
      alert('验证码错误')
      return
    }
    let params = {
      tel: this.state.tel,
      code: this.state.code,
      codeId: Math.random()
    }
    this.setState({ visible:true  });
    // alert(JSON.stringify(params))
    // this.props.navigation.navigate("UserInfo")
  }

  render() {
    const { tel, isShow } = this.state;
    return (
      <View>
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          hidden={false}></StatusBar>
        <Image
          style={styly.bgLogin}
          source={require('../../../assets/images/loginBg.jpg')}></Image>
          <Text onPress={()=>{
         
            this.props.setToken('wiiiiiiiiiiii')
          
          }}>
            {this.props.token}
          </Text>
          <Text onPress={()=>{
        
            this.props.asyncSetToken('kkkk')
          
          }}>
            异步修改--------------{this.props.token}
          </Text>



        <View style={styly.loginTitle}>
          {isShow ? this.renderBtn() : this.renderCode()}
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state,'nnnnnnnnn')
  return {
    token:state.tokenReduce.token
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setToken:(token)=>{
      dispatch(setTokenAction(token))
    },
    asyncSetToken:(token)=>{
      dispatch(asyncSetToken(token))
    }
  }
}
/* 
mapStateToProps,mapDispatchToProps 都是函数返回一个对象映射在props上


*/
export default connect(mapStateToProps,mapDispatchToProps)(Login)
