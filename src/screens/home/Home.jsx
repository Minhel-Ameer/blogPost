import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
// import { useHistory } from 'react-router-dom'
import Posts from '../../components/posts/Posts';
import './Home.css'
import logo from '../../images/logo2.png'
import PostModal from '../../components/postModal/PostModal';
import Navbar from '../../components/navbar/Navbar';
const Home = () => {

  const [items, setItems] = useState([])
  const[noMore, setNoMore] = useState(true)
  const [page, setPage] = useState(2)
  const initialValues = {userId:'',title:'',body:''};
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors]=useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  
  // let history = useHistory()
  
  useEffect(()=>{
    getUser()
  },[])

  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length===0 && isSubmit){
      console.log(formValues)
    }
  },[formErrors])

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
    setFormErrors(validate(formValues))
    setIsSubmit(true)
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

  // {userId:'',title:'',body:''};

  const validate = (values) => {
    const errors = {}
    // const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!values.userId){
      errors.userId = "UserID required"
    }
    if(!values.title){
      errors.title = "Title required"
    }
    if(!values.body){
      errors.body = "Body required"
    }
    return errors
  }
  
 
  return (
    <div className='main-div'>
      {/* <Navbar/> */}
      <div className='home-head'>
        <div className='logo-home'>
        {/* <img src={logo} style={{ width:"225px", height:"200px"}} alt='Facebook Logo' /> */}
        </div>
      <div className='home-form' >

        <div className='main-thoughts'>
          <div className='SYT' onClick={()=>{setOpenModal(true)}}>Share Your Thoughts</div>
          <div className='SYT-btn' onClick={()=>{setOpenModal(true)}}> Click Here</div>
          
          {/* <div className='inner-thoughts'><input className='thoughts' type='text' placeholder='Share you thoughts' /></div> */}
        </div>
        
      {/* <form  onSubmit={handleSubmit}>
        <div>What is on your mind?</div>
            <div className='add-comment'>
              <div className='inputHome'>
                <input className='inputHomeHome' type='text' placeholder='User Id' 
              onChange={handleChange}
              name = 'userId'
                  value={formValues.userId}
                  />
                  <input className='inputHomeHome' type='text' 
              onChange={handleChange} 
                  placeholder='Title' 
                  name='title'
                  value={formValues.title}
                  /></div>
                  <p>{formErrors.userId}</p>
                  <p>{formErrors.title}</p>
              <div className='inputHomeBody'><textarea 
               type='textarea' rows="4" cols="50"
              onChange={handleChange}
              value={formValues.body}
              name = 'body'
              placeholder='Body' /></div>
              <p>{formErrors.body}</p>
              <button className='button-postComment'  type='submit' >Post</button>
            </div>
          </form>  */}
      
      </div>
      {openModal&&<PostModal closeModal={setOpenModal}/>}
      </div>
      
      
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
  
  // style={{display:'flex',flexDirection:'row'}}
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
