import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import Geo from '../../util/geo';

// 对于 Android 需要自行根据需要申请权限

export default class index extends Component {
  render() {
    return (
      <View>
        <Text>hhhhhhh</Text>
        <View>
          <Button title={'初始化'} onPress={this.init}>
            <Text>按钮1</Text>
          </Button>
        </View>
        <View style={{ marginTop: 20 }}>
          <Button  title={'初始化11'}  onPress={this.getCurrent}>
            <Text>按钮2</Text>
          </Button>
        </View>
      </View>
    );
  }
  async getCurrent() {
    let res = await Geo.getCurrentPosition();
    console.log(res, '2222');
  }
   init() {
     Geo.initGeo();
 
  }
  // async componentDidMount() {
  //   import { PermissionsAndroid } from "react-native";
  //   import { init, Geolocation } from "react-native-amap-geolocation";

  //   await PermissionsAndroid.requestMultiple([
  //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //     PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
  //   ]);

  //   await init({
  //     ios: "9bd6c82e77583020a73ef1af59d0c759",
  //     android: "043b24fe18785f33c491705ffe5b6935"
  //   });

  //   Geolocation.getCurrentPosition(({ coords }) => {
  //     console.log(coords);
  //   });
  // }
}
