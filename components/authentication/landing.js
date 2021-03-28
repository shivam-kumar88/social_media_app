import React from 'react'
import {Text, View, Button, ImageBackground} from 'react-native'


const img = { uri: "https://images.unsplash.com/photo-1591525167583-855b70ee0c4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80" };

export default function Landimg({navigation}) {
    return (
        <View style = {{flex:1, justifyContent:'center'}}>
            <ImageBackground source = {img} style = {{flex:1, flexDirection: "column"}}>
            <Button
            title = "Register"
            onPress = {() => navigation.navigate("register")}
           // color = 'dodgerblue'
            />

            <Button
            title = "Login"
            onPress = {() => navigation.navigate("Login")}
            color = 'orange'/>
            </ImageBackground>
        </View>
    );

    
}
