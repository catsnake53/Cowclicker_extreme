import React, { useState, useEffect } from 'react';
import './styles/Login.css'
import { Leaderboard } from './Leaderboard.js';
// import background from "./assets/cloudsbackground.jpg";

export function LoginPage(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    //sign up state here
    const [ signup , toggleSignUp] = useState(false);

    //deconstruct the props
    const { loginHandler } = props;

    //saves the username
    // (`/api/${event.target.value}`,
    function handleClick(event) {
        let action;
        if (signup) action = 'signup'
        else action = 'login'
        let url = '/api/' + action
        fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': "application/json, text/plain",
                'Content-Type': 'application/json',
                'x-Trigger': 'CORS'
              },
              body: JSON.stringify({username: username, password: password})
        })
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    console.log(res)
                    loginHandler(username);
                    return res;
                }
            });
    };



    //seperate the login and sign up modules

        return (
            <div className="main">
                <h1>Cow Clicker EXTREME</h1>
                <h3>A Cowplete Video Game Experience</h3>
                <div className="LoginDiv">
                <h2 id="loginHeader">{signup ? 'Sign Up!' : 'MOOGIN'}</h2>
                <div className="LoginForm">
                    {/* <label>Username: </label> */}
                    <input type="text" placeholder="Username" className="username" value={username} onChange={(e) => {setUsername(e.target.value)}} required/>
                    {/* <label>Password: </label> */}
                    <input type="password" placeholder="Password" className="password" value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
                </div>
                <div className="loginSubmitContainer">
                    <input type="submit" onClick={() => {handleClick()}} className="loginButton"/>
                </div>
               { signup ? <div><p>Already have an account?</p><button className='signupButton' onClick={() => {toggleSignUp(false)}}>Return to Login</button></div> : <div className="signupToggle"> <p>Don't have an account?</p><button class = 'signupButton' onClick={() => {toggleSignUp(true)}}>Sign Up</button></div>}
               <div>
                    <Leaderboard/>
                </div>
            </div>
        </div>
    )
}