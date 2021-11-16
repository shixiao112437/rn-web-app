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


````

3. 验证码组件`react-native-confirmation-code-field`
