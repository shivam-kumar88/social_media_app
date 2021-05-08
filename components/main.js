import React, { Component } from 'react'
import {View, Text, Button} from 'react-native'

export class main extends Component {
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

export default main
