import React, { Component } from 'react'
import { State } from 'react-native-gesture-handler'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/action/index'

import FeedScreen from './Main/Feed'

const Tab = createBottomTabNavigator();

export class main extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        
        return (
            <Tab.Navigator>
                <Tab.Screen name="Feed" component={FeedScreen} />
               // <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        )
    }
}

const mapStateToprops = (Store) => ({
    currentUser: Store.userState.currentUser
})

const mapDispatchprops = (dispatch) => bindActionCreators({fetchUser}, dispatch);

export default connect(mapStateToprops, mapDispatchprops)(main);
