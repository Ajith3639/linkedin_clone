import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {login} from "../features/userSlice.js";
import {auth} from "../firebase";
import "../css/Login.css"
function Login() {
    const [email,setEmail]= useState("");
    const [password,setPassword] =useState("");
    const [name,setName] =useState("");
    const dispatch = useDispatch();
    const register=()=>{
        if(!name){
            return alert("Please enter a full name!");
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: name,

            })
            .then(()=>{
              dispatch(
                  login({
               email:userAuth.user.email,
               uid:userAuth.user.uid,
               displayName: name
              })
              ); 

            });

        }).catch((error)=> alert(error));
    };
    const loginToApp=(e)=>{
         e.preventDefault();
         auth.signInWithEmailAndPassword(email,password)
         .then(userAuth=>{
                dispatch(login ({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                })
                );

         }).catch((error)=> alert(error));
    };
    return (
        <div className="login">
            <img
            src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" 
            alt=""
            />
            <form>
                <input placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} type="text"/>
                <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/>
                <input placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
                <button type="submit"  onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?{" "}
            <span onClick={register} className="login_register">Register Now.</span></p>
        </div>
    )
}

export default Login
