import React, { useEffect, useState } from "react";
import axios from "axios";
const Signin= ()=>{
       
const [userdetails,setuserdetails]=useState({name : "",email : "",gender : "",password : ""})
 
const handeluserdetalis=(e)=>{
    const {name,value}=e.target

    setuserdetails({
        ...userdetails,
        [name] : value
    })
}
const AddData=async()=>{
    try {
        await axios.post('https://social-media-backend-e2ju.onrender.com/users/register',userdetails)
        alert("registration successfull ==>plz go for the Login ")
    } catch (error) {
        alert(`somthing went wrong ${error}`)
    }
}



const registerUser=()=>{

        AddData()
    
}




    return(
        <div><h1>Register your details</h1>
        <div>
            
            <input type="text" value={userdetails.name} placeholder="Enter name" name="name" onChange={(e)=>handeluserdetalis(e)}/>
            <br />
            <br />
            <input type="email" value={userdetails.email} placeholder="Enter Email ID" name="email" onChange={(e)=>handeluserdetalis(e)}/>
            <br />
            <br />
            <select name="gender" value={userdetails.gender} onChange={(e)=>handeluserdetalis(e)}>
                <option value="">select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <br />
            <br />
            <input type="password" value={userdetails.password} placeholder="Enter password" name="password" onChange={(e)=>handeluserdetalis(e)}/>
            <br />
             <br />
        </div>
        <button onClick={registerUser}>Submit</button>
        </div>
    )
}


export default Signin