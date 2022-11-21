import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';
import logo from '../../images/logo2.png'

import './Post.css'

const Post = () => {
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

const postComment = () =>{

}
  useEffect(()=>{
     getData();
     getComment();
    //   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //   .then(response => 
    //     console.log(response.json(),'111'))
    //     // setPost(response.json()))
    //   //.then(data => setPost(data))
    // // getPost();
  },[])

  // const getPost = async() =>{
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    // console.log(response)

    // setPost(await response.json())

    // const response = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      
    // ).catch(

    // )
    // const response2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    // console.log(response)

    // setPost(prev=>[...prev, response2.json()])
  //}
  return (
    <div className='post-container'>
      <Navbar/>
      <h1 className='hh1'><img className='logo' src={logo} alt='Facebook Logo' />Post</h1>
      {/* <h1>post</h1> */}
      {/* <div onClick={getData}>get data</div> */}

      <div className='post-single'>
        <div className='selected'>
            <div><span>Id</span> : {post.id}</div>
            <div ><span>User Id</span> : {post.userId}</div>
            <div ><span>Title</span> : {post.title}</div>
            <div ><span>Body</span> : {post.body}</div>
        </div>
              
      </div>

      <div >
      <h3>Comments</h3>
      {Array.from(comments).map((elem)=>{
        return(
            <div className='post-comment'>
              <div className='content'><span>Id</span> : {elem.postId}</div>
              <div className='content'><span>Comment Id</span> : {elem.id}</div>
              <div className='content'><span>User Name</span> : {elem.name}</div>
              <div className='content'><span>User Email</span> : {elem.email}</div>
              <div className='content'><span>Body</span> : {elem.body}</div>
            </div>
          
        )
        
      }
      )}
      </div>

     

       {console.log(id)} 
    </div>
  )
}

export default Post
