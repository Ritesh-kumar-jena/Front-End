import React, { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
export default function UpdatePosts(){
   const [addpost,setpost]=useState({"title":"","body":"","device":""})
   const { postId } = useParams()
   const handeluserdetalis=(e)=>{
    const {name,value}=e.target
     
        setpost({
            ...addpost,
            [name] : value
        })
     
   


}
const AddPost=async(_id)=>{
    try {
        const obj={}
        if(addpost.title!==""){
          obj.title=addpost.title
        }
        if(addpost.body!==""){
            obj.body=addpost.body
        }
        if(addpost.device!==""){
          obj.device=addpost.device
        }
        await axios.patch(`https://social-media-backend-e2ju.onrender.com/posts/update/${postId}`,obj,{
            headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}
        })
        alert(" Content update successfull")
    } catch (error) {
        alert(`somthing went wrong ${error}`)
    }
}
const Add=()=>{
    AddPost()
    
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