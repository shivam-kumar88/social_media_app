import {USER_STATE_CHANGE} from '../constants/index'
import firebase from 'firebase'

export function fetchuser(){
    return((dispatch)=>{
        firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot)=> {
                if(snapshot.exists){
                    dispatch({type:USER_STATE_CHANGE, currentUser: snapshot.data()})
                }
                else{
                    console.log("data not found")
                }
            })
    })
}