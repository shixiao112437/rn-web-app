import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Alert } from 'react-native';
import { Input, Icon, Overlay } from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';
import { man, woman } from '../../../util/iconfont';
import { pxToWidth } from '../../../util/styl';
import DatePicker from 'react-native-datepicker';
import RNButton from '../../../components/RNButton';
import Geo from '../../../util/geo'
import axios from "axios";
import Picker from 'react-native-picker';
import ImagePicker from 'react-native-image-crop-picker'; // 图像裁剪
import { Button } from 'react-native-elements/dist/buttons/Button';
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
    isShow: false,
    photo: "",
  };
  // 获取当前城市
  async getLocation() {
    await Geo.initGeo()
    let res = await Geo.getCurrentPosition() // 定位
    console.log(res, '定位信息')
    let params = {
      location: `${res.location.longitude},${res.location.latitude}`,
      key: "07e42434b9cba4066161ef378e08a632"
    }
    let res1 = await axios.get('https://restapi.amap.com/v3/geocode/regeo', {
      params
    })
    console.log(res1, '位置转换')
    this.setState({ location: "自动定位:" + res1.data.regeocode.addressComponent.district });

  }
  // 打开选择城市
  openCityModel = () => {
    Picker.init({
      pickerData: [{ a: [1, 2, 2, 3] }],
      selectedValue: ["北京", "北京"],
      wheelFlex: [1, 1, 0], // 显示省和市
      pickerConfirmBtnText: "确定",
      pickerCancelBtnText: "取消",
      pickerTitleText: "选择城市",
      onPickerConfirm: data => {
        // data =  [广东，广州，天河]
        console.log(this.state)
        this.setState(
          {
            location: data[1]
          }
        );
      }
    });
    Picker.show();
  }
  // 设置头像
  setPhoto = async () => {
    let res = await ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true
    })
    console.log('12222', res.path)
    this.setState({ photo: res.path, isShow: true });
    setTimeout(() => {
      Alert.alert('图片审核成功')
      this.setState({ isShow: false }, () => {
      });
    }, 3000)
  }
  // redux 存储用户信息
  saveInfo = () => {
    
  }

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
        <View style={{ justifyContent: "center", flexDirection: "row", marginTop: 20 }}>
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
              this.setState({ nickname });
            }}
            value={this.state.nickname}></Input>
        </View>
        {/* 生日 */}
        <View>
          <DatePicker
            style={{ width: '100%' }}
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
              dateIcon: {
                display: "none"
              }
            }}
            onDateChange={date => {
              this.setState({ birth: date });
            }}
          />

          {/* <Text>{this.state.birth}</Text> */}
        </View>
        {/* 地址 */}
        <View>
          <TouchableOpacity onPress={this.openCityModel}>
            <Input
              onChangeText={value => {
                this.setState({ location: value });
              }}
              disabled
              inputStyle={{
                color: '#666',
                fontSize: 18
              }}
              value={this.state.location} />
          </TouchableOpacity>
        </View>
        {/* 头像 */}
        <View>
          <RNButton btnEvent={this.setPhoto} textColor="#fff" title={'设置头像'}></RNButton>
        </View>
        {/* 头像地址 */}
       {this.state.photo? (<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Image width={50} height={50} source={{ uri: this.state.photo }}></Image>
          <Text>
            {this.state.photo}
          </Text>
        </View>):<></>}
        {/* action */}
        <View>
          <RNButton style={{marginTop:20}} btnEvent={() => {
            this.props.navigation.navigate("Home")
          }} textColor="#fff" title={'跳转首页'}></RNButton>

          <RNButton btnEvent={this.saveInfo} style={{marginTop:20}} textColor="#fff" title={'存储数据'}></RNButton>


        </View>
        {/* <View>
        <Image style={{width:300,height:300}}  source={{uri:this.state.photo}} />
        </View> */}
        {/* overlay */}
        <Overlay overlayStyle={{
          backgroundColor: "#000",
          justifyContent: "center",
          alignItems: "center"
        }} fullScreen={true} isVisible={this.state.isShow} onBackdropPress={() => { }}>
          <ImageBackground style={{ width: 300, height: 300, justifyContent: "center", alignItems: "center" }} source={require("../../../assets/images/scan.gif")} >
            <Image style={{ width: "50%", height: '50%' }} source={{ uri: this.state.photo }} />
          </ImageBackground>
          <Button title={'取消'} onPress={() => { this.setState({ isShow: false }); }}></Button>
        </Overlay>
      </View >
    );
  }
  async componentDidMount() {
    this.getLocation()
  }
}
