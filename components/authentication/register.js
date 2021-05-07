import React, { Component } from 'react'
import {View, TextInput, Button, ImageBackground} from 'react-native'

import firebase from 'firebase'


export class register extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }
        this.onSignUp = this.onSignUp.bind(this)
    }
    onSignUp(){
        const{email, password, name} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) =>{
            console.log(result)
            firebase.firestore().collection("users")
                .doc(firebase.auth().currentUser.uid)
                .set({
                    name,
                    email
                })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    render() {
        return (
            <View style = {{flex:1, justifyContent:'centre'}}>
                <TextInput
                placeholder = "name"
                onChangeText = {(name) => this.setState({name})}
                />
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
                onPress = {() => this.onSignUp()}
                title = "Sign Up"
                />
            </View>
        ) 
    }
}

export default register
