/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import Nav from './src/nav';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen(props) {
  const navJump = () => {
    props.navigation.navigate('Details');
  };
  const navJump1 = () => {
    props.navigation.navigate('Details', {
      id: 123123,
      name: '王阿姨',
    });
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Button title="跳转路由" onPress={navJump} />
      <Button title="参数路由" onPress={navJump1} />
    </View>
  );
}
function DetailsScreen(props) {
  useEffect(() => {
    // props.route.params.idalert(props.route.params.id)
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Screen111</Text>
      <Text>Screen111</Text>
      <Text>Screen111</Text>
      <Button
        title="Go to Details... again"
        onPress={() => props.navigation.push('Details')}
      />
      <Button title="back" onPress={() => props.navigation.goBack()} />
      <Button title="第一个屏幕" onPress={() => props.navigation.popToTop()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App1() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#876512"
              />
            ),
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function App() {
  return <View style={{flex:1}}>
    <Nav></Nav>
  </View>
  
}

export default App;
