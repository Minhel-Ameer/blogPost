import React from 'react'
import { useHistory } from 'react-router-dom'
import './Posts.css'
import { getRandomImage } from '../../utils/randomimage'

function Posts({elem : {id, userId, title}}) {

  let history = useHistory()

  const navigatepost = (e) =>{
    history.push('/post',e)
  }

  return (
    

    <div className='main-posts'>
      <div className='card-posts' onClick={()=>navigatepost(id,getRandomImage())}>
      <div key={id}>
        <div className='img-posts'><img style={{ width:"100%"}} src={getRandomImage()} alt='logo' className='logo'/></div>
        <div className='id-posts'><spanposts>Id</spanposts> : {id}</div>
        <div className='userid-posts'><spanposts>User Id</spanposts> : {userId}</div>
        <div className='title-posts'><spanposts>Title</spanposts> : {title}</div>
      </div>
    </div>
    </div>
  )
}

export default Posts
