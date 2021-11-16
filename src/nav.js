import React, {Component} from 'react';
import { View,Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/auth/login'
import Home from './pages/home/index'
const Stack = createNativeStackNavigator()
function Nav() {
  return <NavigationContainer>
    <Stack.Navigator 
    
      initialRouteName="Login;">
           {/* <Stack.Screen options={{
             headerShown:false
           }} headerShown={false} name='Home' component={Home}>
    </Stack.Screen> */}

      {/* <Stack.Screen name='Home' component={Home}></Stack.Screen> */}
      <Stack.Screen  headerShown={false}   options={{headerTitleAlign:'center',headerBackVisible:true, headerStyle: {
          backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible:true,
          headerShown:false}} headerBackVisible={true} name='Login' component={Login} />

    </Stack.Navigator>
 
  </NavigationContainer>
  
}

export default Nav