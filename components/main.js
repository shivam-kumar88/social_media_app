import React, { Component } from 'react'
import { State } from 'react-native-gesture-handler'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/action/index'

import FeedScreen from './Main/Feed'
import ProfileScreen from './Main/Profile'
import ChatScreen from './Main/Chat'



const Tab = createBottomTabNavigator();

const EmptyScreen = () =>{
    return(null)
}

export class main extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        
        return (
            <Tab.Navigator initialRouteName = "Feed">
                <Tab.Screen name="Feed" component={FeedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={28} />
                      )
                }} />
                
                
                <Tab.Screen name="Add file" component={EmptyScreen}
                listeners = {({ navigation }) => ({
                    tabPress: event =>{
                        event.preventDefault();
                        navigation.navigate("Add")
                    }
                })}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="plus" color={color} size={28} />
                      )
                }} />
                <Tab.Screen name="Chat" component={ChatScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chat" color={color} size={28} />
                      )
                }} />
                <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={28} />
                      )
                }} />
                
            </Tab.Navigator>
        )
    }
}

const mapStateToprops = (Store) => ({
    currentUser: Store.userState.currentUser
})

const mapDispatchprops = (dispatch) => bindActionCreators({fetchUser}, dispatch);

export default connect(mapStateToprops, mapDispatchprops)(main);
