import React, { Component } from 'react'
import {View, TextInput, Button, ImageBackground} from 'react-native'

import firebase from 'firebase'


export class login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
        }
        this.onSignin = this.onSignin.bind(this)
    }
    onSignin(){
        const{email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) =>{
            console.log(result)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    render() {
        return (
            <View style = {{flex:1, justifyContent:'centre'}}>
                <TextInput
                placeholder = "email"
                onChangeText = {(email) => this.setState({email})}
                />
                <TextInput
                placeholder = "password"
                secureTextEntry = {true}
                onChangeText = {(password) => this.setState({password})}
                />
                <Button
                onPress = {() => this.onSignin()}
                title = "Log In"
                />
            </View>
        ) 
    }
}

export default login
