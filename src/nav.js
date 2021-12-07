import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/auth/login';
import Home from './pages/home/index';
import UserInfo from './pages/auth/user'
import Tanhua from './pages/tanhua'
const Stack = createNativeStackNavigator();
function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          headerBackVisible={true}
          headerShown={false}
          options={{
            title: '用户信息',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#dfc026',
            },
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
            },
          }}
          name="UserInfo"
          component={UserInfo}
        />
        <Stack.Screen
          headerShown={false}
          options={{
            headerTitleAlign: 'center',
            headerBackVisible: true,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackVisible: true,
            headerShown: false,
          }}
          headerBackVisible={true}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          headerBackVisible={true}
          headerShown={false}
          name='Home'
          options={{
            headerShown: false,
            title: '用户信息',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#dfc026',
            },
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
            },
          }}
          component={Home}
        />
        <Stack.Screen 
          name='Tanhua'
          component={Tanhua}
          options={{
            title:"探花交友"
          }}
        
        />



      </Stack.Navigator>

      {/* <Stack.Screen name='Home' component={Home}></Stack.Screen> */}
    </NavigationContainer>
  );
}

export default Nav;
