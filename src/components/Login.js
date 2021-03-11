import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from './Addfirebase';
import "./login.css"

function Login() {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilPic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
       e.preventDefault();
       auth.signInWithEmailAndPassword(email,password)
       .then(userAuth => {
           dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
           }))
       }).catch((error) => alert(error))
    };

    const register = (e) => {
        e.preventDefault();
        if (!name) {
            return alert("Please Enter full name !")
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilPic,
            })
            .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilPic,
                }))
            })
        }).catch((error) => alert(error));

    };

    return (
        <div className="login">
            <img src="https://ospreyintegrity.com/wp-content/uploads/2020/01/580b57fcd9996e24bc43c528.png" alt="Linkedin"/>

            <form >
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name (required if registering)" type="text"/>
                <input value={profilPic} onChange={(e) => setProfilePic(e.target.value)} placeholder="Profile pic url" type="text"/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member? <span className="login-register"  onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login
