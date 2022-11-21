import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useHistory } from 'react-router-dom'
const Pagination = () => {

  const [items, setItems] = useState([])
  const[noMore, setNoMore] = useState(true)
  const [page, setPage] = useState(2)
  const initialValues = {userId:'',title:'',body:''};
  const [formValues, setFormValues] = useState(initialValues)
  let history = useHistory()
  useEffect(()=>{
    getUser()
  },[])

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
    //console.log(response)

    setItems(await response.json())
    console.log(items,'items')

  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    postData()
  }

  const postData = async() =>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        formValues
      })
      
    })
       .then((response) => response.json())
       .then((dataa) => {
          console.log(dataa,'dataa');
          setItems((users)=>[...users,dataa])
       })
       .catch((err) => {
          console.log(err.message);
       });
  }

  const handleChange =(e) =>{
    const{name, value} = e.target;
    setFormValues({...formValues, [name]:value})
    console.log(formValues, 'form values')
  }

  const navigatepost = (e) =>{
    history.push('/post',e)
    
    

  }

  return (
    <div>
      <h1>Pagination</h1>

      <form onSubmit={handleSubmit}>
            <div className='add-comment'>
              <div><input type='text' placeholder='User Id' 
              onChange={handleChange}
              name = 'userId'
                  value={formValues.userId}
                  /></div>
              <div><input type='text' 
              onChange={handleChange} 
                  placeholder='Title' 
                  name='title'
                  value={formValues.title}
                  /></div>
              <div><input type='text' 
              onChange={handleChange}
              value={formValues.body}
              name = 'body'
              placeholder='Body' /></div>
              <button className='button-postComment'  type='submit' >Post</button>
            </div>
          </form> 
      
<InfiniteScroll
  dataLength={items.length} //This is important field to render the next data
  next={fetchData}
  hasMore={noMore}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  
  
>
  {items.map((elem)=>{
    return(
    <div onClick={()=>navigatepost(elem.id)}>
      <div key={elem.id}>
        <div className='content'>Id : {elem.id}</div>
        <div className='content'>User Id : {elem.userId}</div>
        <div className='content'>Title : {elem.title}</div>
      </div>
    </div>
  )})}
</InfiniteScroll>
    </div>
  )
}

export default Pagination
