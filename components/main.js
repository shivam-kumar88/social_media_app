import React, { Component } from 'react'
import {View, Text, Button} from 'react-native'
import { State } from 'react-native-gesture-handler'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/action/index'

export class main extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        const {currentUser} = this.props;
        if(currentUser == undefined){
            return(
                <View></View>
            )
        }
        else{
            console.log('undefined')
        }
            console.log(currentUser)
        return (
            
            <View style={{ flex: 1, justifyContent: 'centre' }}>
            <Text>{currentUser.name} is logged in.......</Text>
            <Button 
            title = "logout"
            onPress = {() => (loggedin = false)}
            />
          </View>
        )
    }
}

const mapStateToprops = (Store) => ({
    currentUser: Store.userState.currentUser
})

const mapDispatchprops = (dispatch) => bindActionCreators({fetchUser}, dispatch);

export default connect(mapStateToprops, mapDispatchprops)(main);
