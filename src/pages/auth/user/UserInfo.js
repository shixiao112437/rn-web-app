import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';
import {man, woman} from '../../../util/iconfont';
import {pxToWidth} from '../../../util/styl';
import DatePicker from 'react-native-datepicker';
import RNButton from '../../../components/RNButton';
const userStyle = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  top: {
    fontWeight: 'bold',
    color: '#666',
    fontSize: 20,
  },
  iconWrap: {
    width: pxToWidth(60),
    height: pxToWidth(60),
    backgroundColor: '#eee',
    borderRadius: pxToWidth(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default class UserInfo extends Component {
  state = {
    gender: '男',
    nickname: '',
    birth: '',
    location: '',
  };
  render() {
    return (
      <View style={userStyle.wrap} flex={1}>
        <View>
          <Text style={userStyle.top}>填写资料</Text>
        </View>
        <View>
          <Text style={userStyle.top}>完善自己的信息</Text>
        </View>
        {/* 性别 */}
        <View style={{justifyContent:"center",flexDirection:"row",marginTop:20}}>
          <View
            style={{
              width: '60%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              
            }}>
            <TouchableOpacity style={userStyle.iconWrap}>
              <SvgUri width="50" height="50" svgXmlData={man}></SvgUri>
            </TouchableOpacity>
            <TouchableOpacity style={userStyle.iconWrap}>
              <SvgUri width="50" height="50" svgXmlData={woman}></SvgUri>
            </TouchableOpacity>
          </View>
        </View>
        {/* 昵称 */}
        <View>
          <Input
            placeholder={'昵称设置'}
            onChangeText={nickname => {
              this.setState({nickname});
            }}
            value={this.state.nickname}></Input>
        </View>
        {/* 生日 */}
        <View>
          <DatePicker
            style={{width: '100%'}}
            mode="date"
            date={this.state.birth}
            // placeholder="设置生日"
            format="YYYY-MM-DD"
            confirmBtnText="确认"
            cancelBtnText="取消"
            androidMode="spinner"
            customStyles={{
              dateInput: {
                borderWidth: 0,
                borderBottomWidth: 1.1,
                alignItems: 'flex-start',
                paddingLeft: 6,
                textAlign: 'left',
              },
              // placeholderText: {
              //   fontSize: 18,
              //   color: '#afafaf',
              // },
              dateIcon:{
                display:"none"
              }
            }}
            onDateChange={date => {
              this.setState({birth: date});
            }}
          />

          {/* <Text>{this.state.birth}</Text> */}
        </View>
        {/* 地址 */}
        <View>
          <Input
            onChangeText={value => {
              this.setState({ location:value  });
            }}
            value={'自动定位:北京市'}></Input>
        </View>
        {/* 头像 */}
        <View>
          <RNButton textColor="#fff" title={'设置头像'}></RNButton>
        </View>
      </View>
    );
  }
}
