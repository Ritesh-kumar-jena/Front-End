import React, { useState } from "react";
import './index.css'
 import { Link,useHref } from "react-router-dom";
 import { useEffect } from "react";
 import axios from "axios";
const Navbar= ()=>{
    const [islogin,setislogin]=useState(true)
        const Logout=async()=>{
            try{
                 await axios.get('https://social-media-backend-e2ju.onrender.com/users/logout')
                 localStorage.removeItem("token")
                 setislogin(false)
             }catch(error){
                 alert(error)
             }
                   }
    
    return(
        <div style={{backgroundColor:'violet',marginTop:'1px',height:'50px',alignItems:'center',borderRadius:'10px'}}>
        <div style={{display:'flex',justifyContent:'space-around',paddingTop:"15px"}}>
            <Link to="/"><button>Home</button></Link>
            <Link to="/register"><button>Signin</button></Link>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/posts"><button>Posts</button></Link>
            <Link to="/posts"><button onClick={Logout}>Logout</button></Link>   
        </div>
        </div>
    )
}


export default Navbar