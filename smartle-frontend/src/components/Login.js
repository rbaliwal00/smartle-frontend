import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from '../features/userSlice';
import Input from '@mui/material/Input';
import FormLabel from '@mui/material/FormLabel';
import { Button, TextField } from '@mui/material';
import "./Login.css";


const Login = () => {
    const[name, setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const dispatch = useDispatch();

    let history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(
            login({
            name: name,
            email: email,
            password: password,
            loggedIn: true
        }))

        history.push("/");
    }

    return (
        <div className='login-container'>
            <form  onSubmit={e=> {
                    handleSubmit(e);
                }}>
                <h1>Login Here</h1>
                <div className='login-label'>
                    <label>YOUR FIRST AND LAST NAME:</label>
                    <TextField 
                        type='name' 
                        placeholder="Your first and last name..." 
                        size='small' 
                        fullWidth 
                        style={{marginTop: "10px"}} 
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                </div>
               <div className='login-label'>
               <label>YOUR EMAIL:</label>
                <TextField 
                    type='email' 
                    placeholder="Your email address..." 
                    size='small' 
                    fullWidth 
                    style={{marginTop: "10px"}} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
               </div>
               <div className='login-label'>
               <label>PASSWORD:</label>
                <TextField 
                    type='password' 
                    placeholder="Your password..." 
                    size='small' 
                    fullWidth 
                    style={{marginTop: "10px"}} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
               </div>
               <Button type='submit' variant='contained'>Submit</Button>
            </form>
        </div>
    );
};

export default Login;