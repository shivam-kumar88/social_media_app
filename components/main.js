import React, { Component } from 'react'
import {View, Text, Button} from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/action/index'

export class main extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'centre' }}>
            <Text>logged in.......</Text>
            <Button 
            title = "logout"
            onPress = {() => (loggedin = false)}
            />
          </View>
        )
    }
}

const mapDispatchprops = (dispatch) => bindActionCreators({fetchUser}, dispatch);

export default connect(null, mapDispatchprops)(main);
