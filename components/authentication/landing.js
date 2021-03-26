import React from 'react'
import {Text, View, Button, ImageBackground} from 'react-native'

const img = { uri: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" };

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
