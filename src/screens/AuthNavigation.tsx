import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
/* DefaultTheme umožní upraviť stack */
import { DefaultTheme } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Account from './Account';

export default function AuthNavigation() {
  const Stack = createStackNavigator();
  //navigator
  //screenobject
  return (
    <NavigationContainer theme={{
      ...DefaultTheme,
      colors:{
        ...DefaultTheme.colors,
        background: 'transparent',
      }
    }}>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={LoginForm} />
            <Stack.Screen name="Register" component={RegisterForm} />
            <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}