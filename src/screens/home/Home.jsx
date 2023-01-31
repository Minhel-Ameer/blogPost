import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Posts from '../../components/posts/Posts';
import './Home.css'
import PostModal from '../../components/postModal/PostModal';
const Home = () => {

  const [items, setItems] = useState([])
  const[noMore, setNoMore] = useState(true)
  const [page, setPage] = useState(2)
  // const initialValues = {userId:'',title:'',body:''};
  // const [formValues, setFormValues] = useState(initialValues)
  // const [formErrors, setFormErrors]=useState({})
  // const [isSubmit, setIsSubmit] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  
  useEffect(()=>{
    getUser()
  },[])

  // useEffect(()=>{
  //   console.log(formErrors)
  //   if(Object.keys(formErrors).length===0 && isSubmit){
  //     console.log(formValues)
  //   }
  // },[formErrors])

  const fetchUser = async() =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&limit=20`)
    const data = await res.json()
    return data;
  }

  const fetchData = async() =>{
    const dataFromServer = await fetchUser()
    setItems([...items,...dataFromServer])
    
    if(dataFromServer.length === 0 || dataFromServer.length < 10){
      setNoMore(false)
    }

    setPage(page+1)
  }



  const getUser = async() =>{
    const response =await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&limit=20`)

    setItems(await response.json())
    console.log(items,'items')

  }

  
 
  return (
    <div className='main-div'>
      <div className='home-head'>
        <div className='logo-home'>
        </div>
      <div className='home-form' >

        <div className='main-thoughts'>
          <div className='SYT' onClick={()=>{setOpenModal(true)}}>Share Your Thoughts</div>
          <div className='SYT-btn' onClick={()=>{setOpenModal(true)}}> Click Here</div>
        </div>
        

      
      </div>
      {openModal&&<PostModal closeModal={setOpenModal}/>}
      </div>
      
      
<InfiniteScroll
  dataLength={items.length} 
  next={fetchData}
  hasMore={noMore}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
>
  <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
  {items.map((elem)=>{
    return <Posts key={elem.id} elem={elem}/>})}
    </div>
</InfiniteScroll>
    </div>
  )
}

export default Home
