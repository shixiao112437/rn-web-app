import { PermissionsAndroid, Platform } from "react-native";
import { init, Geolocation } from "react-native-amap-geolocation";
import axios from "axios";
class Geo {
  async initGeo() {
    // if (Platform.OS === "android") {
    //   await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
    // }
    let res =await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);
      console.log('权限',res)
   let b=  await init({
      android: "1482130b5667f469fc20cbf52c70eca2",
    });
    console.log('初始化',b)
    return Promise.resolve();
  }
  async getCurrentPosition() {
    return new Promise((resolve, reject) => {
      console.log("开始定位");
      Geolocation.getCurrentPosition((res) => {
          console.log('weizhi',res)
        resolve(res);
      }, reject);
    })
  }

}


export default new Geo();