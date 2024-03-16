import React from "react";
import { useState } from "react";
import axios from "axios";
const Login= ()=>{
    const [userdetails,setuserdetails]=useState({email : "",password : ""})
 
    const handeluserdetalis=(e)=>{
        const {name,value}=e.target
    
        setuserdetails({
            ...userdetails,
            [name] : value
        })
    }
    const Login=async()=>{
        try {
          const res=  await axios.post('https://social-media-backend-e2ju.onrender.com/users/login',userdetails)
          localStorage.setItem("token",res.data.token)
            alert(" Login successfull")
            
        } catch (error) {
            console.log(error)
            alert(`somthing went wrong ${error}`)
        }
    }
    const CheackUser=()=>{
        Login()
        
    }
    return(
        <div><h1>Login</h1>
        
        <div>
            <input type="text" value={userdetails.email} placeholder="Enter your register Email ID" name="email" onChange={(e)=>handeluserdetalis(e)} />
            <br />
            <br />
            <input type="text" value={userdetails.password} placeholder="Enter your password" name="password" onChange={(e)=>handeluserdetalis(e)}/>
            <br />
            <br />
            <button onClick={CheackUser}>Sumbit</button>
        </div>
        </div>
    )
}


export default Login