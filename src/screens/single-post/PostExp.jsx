import React from 'react'
import './PostExp.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

const PostExp=()=> {
  const[post, setPost]=useState('')
  const[comments, setComments]=useState('')
  const location = useLocation()
  const id = location.state;

  const getData = async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    setPost(await response.json())
    console.log('sss')
    }
    
    const getComment = async() =>{
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      setComments(await response.json())
    }

      useEffect(()=>{
         getData();
         getComment();
      },[])

  return (
    <div className='main-div-post'>
      <div className='main-container-post'>
        
        <div className='left-container'>
          <div className='.image-container-post'>
              <img src='https://hdwallpaperim.com/wp-content/uploads/2017/08/25/463038-simple_background-digital_art-nature-landscape-mountains-trees-forest-Sun-portrait_display-minimalism.jpg' alt='pic'/>
          </div>
        </div>

        <div className='right-container'>
        <div className='post-container-post'>
            <div><h1 className='h2-postExp'>Post</h1></div>
            <div><span>Id</span> : {post.id}</div>
            <div ><span>User Id</span> : {post.userId}</div>
            <div ><span>Title</span> : {post.title}</div>
            <div ><span>Body</span> : {post.body}</div>
        </div>
        <div className='comments-container-post'>
            <h2 className='h2-postExp'>Comments</h2>

            {Array.from(comments).map((elem,index)=>{
        return(

            <div className='single-postexp'key={index}>
              <div><span>Post Id</span> : {elem.postId}</div>
              <div ><span>User Id</span> : {elem.id}</div>
              <div ><span>User Name</span> : {elem.name}</div>
              <div ><span>User Email</span> : {elem.email}</div>
              <div ><span>Body</span> : {elem.body}</div>
            </div>
             )
        
            }
            )}
            
        </div>
        </div>
      </div>
    </div>
  )
}

export default PostExp
