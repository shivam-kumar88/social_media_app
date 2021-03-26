import React from 'react'
import {Text, View, Button, ImageBackground} from 'react-native'

const img = { uri: "https://images.unsplash.com/photo-1591525167583-855b70ee0c4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80" };

export default function landimg({Navigation}) {
    return (
        <View style = {{flex:1, justifyContent:'center'}}>
            <ImageBackground source = {img} style = {{flex:1, flexDirection: "column"}}>
            <Text>Hii.. this is shivam </Text>
            <Text>---------------Welcome to my app------------------</Text>
            <Text>the work is still going on</Text>
            <Button
            title = "Register"
            onPress = {() => Navigation.navigate("Register")}
            color = 'dodgerblue'
            />

            <Button
            title = "Login"
            onPress = {() => Navigation.navigate("Login")}
            color = 'orange'/>
            </ImageBackground>
        </View>
    );

    
}
