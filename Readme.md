## 路由使用
1. npx react-native init webApp
2. cd webApp
3. npx react-native run-android
4. 安装路由
    + `npm install @react-navigation/native`
    + `npm install react-native-screens react-native-safe-area-context`
    + `npm install @react-navigation/native-stack`
```javascript
import  React,{useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen(props) {
  const navJump =() => {
    props.navigation.navigate('Details')
  }
  // 路由参数
  const navJump1 =() => {
    props.navigation.navigate('Details',{
      id:123123,
      name:"王阿姨"
    })
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='跳转路由'onPress={navJump}></Button>
      <Button title='参数路由' onPress={navJump1}></Button>
    </View>
  );
}
function DetailsScreen(props) {
  useEffect(()=>{
      // 接受路由参数
    alert(props.route.params.id)
  },[])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen111</Text>
      <Text>Screen111</Text>
      <Text>Screen111</Text>
      <Button
        title="Go to Details... again"
        onPress={() => props.navigation.push('Details')}
      />
       <Button title="back" onPress={() => props.navigation.goBack()} />
       <Button
        title="第一个屏幕"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
  
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

## 组件介绍
1. 获取屏幕宽高  和设置 手机状态栏
```javascript
// 来隐藏 状态栏
 <StatusBar translucent={true} backgroundColor='transparent' hidden={false}></StatusBar>

 //  设计稿的宽度（ALLWidth）/元素的宽度（pxWidth） = 手机的宽度（api）/手机中元素的宽度(x)

// x = api*pxWidth/ALLWidth
import {Dimensions} from 'react-native'
// 获取屏幕宽高
const PthoneWidth = Dimensions.get('window').width 
const PthoneHight = Dimensions.get('window').height

export const pxToWidth = (width) => {
    return PthoneWidth*width/350
}
```
 2. 渐变色按钮`react-native-linear-gradient`  项目组件 /components/RNButton/index.js
```jsx
<LinearGradient colors={['#63B8FF', '#1C86EE', '#0000EE',]} style={{height: 150}}>
</LinearGradient>
 // color默认情况下，渐变色的方向是从上向下的
/*  
    start:{ x: number, y: number }
    end:{ x: number, y: number }
    start 就是渐变开始的位置，x、y 范围是 0 - 1 ，
    end 同上，就是渐变结束的位置 
*/
```

3. 验证码组件`react-native-confirmation-code-field`
4. 使用字体图标`yarn  add  react-native-svg-uri react-native-svg`

```javascript
  import SvgUri from 'react-native-svg-uri';
  // svgXmlData为字体图标的svg代码(可在网站上直接复制svg代码)
  <SvgUri width="23" height="23" svgXmlData={svgXmlData}></SvgUri>
```
5. 时间选择组件`react-native-datepicker`
```javascript
  import DatePicker from 'react-native-datepicker';
 
```
6. 高德地图使用`react-native-amap-geolocation`
  - . 在.android目录下获取发布版sha1`keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`
  - . `keytool -list -v -keystore my-release-key.keystore`
  - . 获取发布版sha1 在项目 android/app下 `keytool -list -v -keystore debug.keystore` (该目录下有debug.keystore文件) `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`(生成debug.keystore)
  - . 使用高德api `npm i react-native-amap-geolocation` 然后进行配置`npx react-native link react-native-amap-geolocation` (或手动配置 rn版本过低)
  - . 在官网中获取key(创建应用获取sha1 packagename)
  - 初始化 参考 `util/geo.js`
7. `npm i  react-native-picker`
```javascript
  import Picker from 'react-native-picker';
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
```
8. rn中显示动态图(请查看最新版文档) 可能会报错 `com.facebook.fresco`相关错误

```json
// 在在 Android 上支持 GIF 和 WebP 格式图片
// 默认情况下 Android 是不支持 GIF 和 WebP 格式的。你需要在android/app/build.gradle文件中根据需要手动添加以下模块：
dependencies {
  // If your app supports Android versions before Ice Cream Sandwich (API level 14)
  implementation 'com.facebook.fresco:animated-base-support:1.3.0'

  // For animated GIF support
  implementation 'com.facebook.fresco:animated-gif:2.5.0'

  // For WebP support, including animated WebP
  implementation 'com.facebook.fresco:animated-webp:2.5.0'
  implementation 'com.facebook.fresco:webpsupport:2.5.0'

  // For WebP support, without animations
  implementation 'com.facebook.fresco:webpsupport:2.5.0'
}
```


9. 使用tab组件`import TabNavigator from 'react-native-tab-navigator';` 案列/home/index.js
 注意: 要给`TabNavigator`的父容器加高度(  flex:1)

10. 吸顶效果 `import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view'` 看文档
项目使用路径(pages/home/components/Friend.js)
