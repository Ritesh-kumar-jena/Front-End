import React, { useEffect, useState } from "react";
import axios from "axios";
export default function AddPosts(){
   
    const [addpost,setpost]=useState({title : "",body : "",device : ""})
 
    const handeluserdetalis=(e)=>{
     const {name,value}=e.target
 
     setpost({
         ...addpost,
         [name] : value
     })
 }
 const AddPost=async()=>{
     try {
        await axios.post('https://social-media-backend-e2ju.onrender.com/posts/add',addpost,{
            headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}
        })
         alert(" Content post successfull")
     } catch (error) {
         alert(`somthing went wrong ${error}`)
     }
 }
 const Add=()=>{
     AddPost()
     console.log(addpost)
     
 } 

    return(
        <div>
             <div>
            <input type="text" value={addpost.title} placeholder="Title" name="title" onChange={(e)=>handeluserdetalis(e)} />
            <br />
            <br />
            <input type="text" value={addpost.body} placeholder="Body" name="body" onChange={(e)=>handeluserdetalis(e)}/>
            <br />
            <br />
            <input type="text" value={addpost.device} placeholder="Device" name="device" onChange={(e)=>handeluserdetalis(e)}/>
            <br />
            <br />
            <button onClick={Add}>Sumbit</button>
            </div>
        </div>
    )
}