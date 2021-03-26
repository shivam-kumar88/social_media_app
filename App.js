import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landingscreen from './components/authentication/landing'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Login">
        <Stack.Screen name="Login/Register page" component = {Landingscreen} option = {{headerShown: false}}/>
      </Stack.Navigator> 
      </NavigationContainer>
    
  );
}
