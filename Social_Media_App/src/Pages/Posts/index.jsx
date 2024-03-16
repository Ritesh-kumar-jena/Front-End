import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './index.css'
const Posts= ()=>{
   const [post,setpost]=useState([])
const [islogin,setislogin]=useState(false)
useEffect(()=>{ 
const token=localStorage.getItem("token")
if(token){
    const Post=async()=>{
        try{
             const  data= await axios.get('https://social-media-backend-e2ju.onrender.com/posts/',{
               headers:{Authorization:`Bearer ${token}`}
               
             })
             setpost(data.data)
             setislogin(true)
         }catch(error){
             alert("Login first")
             // setislogin(false)
         }
               }
              
                Post()       
                
}
     else{
            setislogin(false)
        }
    })
   async function handelDelete(id){
        try {
            await axios.delete(`https://social-media-backend-e2ju.onrender.com/posts/delete/${id}`,{
          headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}
        })
         alert("post deleted successfull")
         
        } catch (error) {
            alert(error)
        }
    
    }
   
    return(
        <div>
            <div style={{height:'50px',width:'50px',border:'3px solid black'}}>post count:{islogin ? post.length:0}</div>
            <div> <Link to="/add"><button style={{marginTop:"2px"}}>Add Post</button></Link></div>
            <div>
             {islogin ?( <div style={{display:'flex', justifyContent:'space-around'}}>
            {post.map((ele)=>(
                <div key={ele._id} className="post">
                    <p style={{fontWeight:"bold"}}>Title : {ele.title}</p>
                    <p style={{fontWeight:"bold"}}>Body : {ele.body}</p>
                    <p style={{fontWeight:"bold"}}>Device : {ele.device}</p>
                    <p style={{fontWeight:"bold"}}>User Name :{ele.userName}</p>
                    <p style={{fontWeight:"bold"}}>Date : {ele.postDate}</p>
                    <Link to={`/update/${ele._id}`}><button style={{backgroundColor:'yellowgreen'}}>Update</button></Link>
                    <Link to="/posts"><button onClick={()=>handelDelete(ele._id)} style={{backgroundColor:'red', marginLeft:'10px'}}>Delete</button></Link>  
                    
                </div>
            ))}
            </div>):(<h3>Login first</h3>)}
            </div>
            
        </div>
    )
}


export default Posts