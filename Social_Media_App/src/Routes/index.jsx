import React from "react";
import { Route,Routes } from "react-router-dom";
import Signin from "../Pages/Signin";
import Login from "../Pages/Login";
import HomePage from "../Pages/HomePage";
import Posts from "../Pages/Posts";
import UpdatePosts from "../Pages/Posts/UpdatePost";
import AddPosts from "../Pages/Posts/Addpost";
const Routing= ()=>{

    return(
        <div>
            <Routes>
              <Route  path="/register" element={<Signin/>} ></Route>
              <Route  path="/login" element={<Login/>} ></Route>
              <Route  path="/" element={<HomePage/>} ></Route>
              <Route  path="/posts" element={<Posts/>} ></Route>
              <Route  path="/add" element={<AddPosts/>} ></Route>
              <Route  path="/update/:postId" element={<UpdatePosts/>} ></Route>
              
            </Routes>
        </div>
    )
}


export default Routing