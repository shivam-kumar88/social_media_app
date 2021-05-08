import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import * as firebase from 'firebase'
import {View, Text, Button} from 'react-native'

import {provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))


const firebaseConfig = {
  apiKey: "AIzaSyDcg1l13IytAHcZZhSNwsjlv1n64BZ81gk",
  authDomain: "social-media-app-d1121.firebaseapp.com",
  projectId: "social-media-app-d1121",
  storageBucket: "social-media-app-d1121.appspot.com",
  messagingSenderId: "65956013471",
  appId: "1:65956013471:web:2c041566170a02b24249aa",
  measurementId: "G-W1DXYHXWN0"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landingscreen from './components/authentication/landing'
import registerScreen from './components/authentication/register'
import loginScreen from './components/authentication/login'

import Mainscreen from './components/main'

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loaded : false,
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) =>{
      if(!user){
        this.setState({
          loggedin: false,
          loaded: true
        })
      }
      else{
        this.setState({
          loggedin: true,
          loaded: true
        })
      }
    })
  }
  render() {
    const {loaded, loggedin} = this.state;
    if(!loaded){
      return(
        <View style={{ flex: 1, justifyContent: 'centre' }}>
          <Text>
          loading.....
          </Text>
        </View>
      )
    }
    if(!loggedin){
      return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName = "Login">
            <Stack.Screen name="Login/Register page" component = {Landingscreen} option = {{headerShown: false}}/>
            <Stack.Screen name="register" component = {registerScreen}/>
            <Stack.Screen name="login" component = {loginScreen}/>
          </Stack.Navigator> 
        </NavigationContainer>
      )
    }
    return(
      <provider store = {store}>
        <Mainscreen/>
      </provider>
      
    )
  }
}

export default App
