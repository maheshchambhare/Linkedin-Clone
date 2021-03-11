import React, { useState } from 'react'
import { auth } from './Addfirebase';
import "./login.css"

function Login() {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilPic, setProfilePic] = useState("");


    const loginToApp = (e) => {
        e.preventDefault();
    };

    const register = () => {};

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
