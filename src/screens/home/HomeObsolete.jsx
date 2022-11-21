import React, {useState, useEffect} from 'react'
//import Post from '../single-post/Post'
import './Home.css'
import { useHistory } from 'react-router-dom'


const Home = () => {
  const[users, setUsers] = useState([])
  // const[userId, setUserId] = useState('')
  // const[title, setTitle] = useState('')
  //const[body, setBody] = useState('')
  //const[input, setInput] = useState({userId:'',title:'',body:''})
  const initialValues = {userId:'',title:'',body:''};
  const [formValues, setFormValues] = useState(initialValues)
  let history = useHistory()
  const navigatepost = (e) =>{
    //  console.log('in navigate post')
    history.push('/post',e)
    
    

  }

  const getUsers = async() =>{
    const response =await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(response)

    setUsers(await response.json())
    console.log(users,'data')
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
          setUsers((users)=>[...users,dataa])
          // Handle data
       })
       .catch((err) => {
          console.log(err.message);
       });

       
  }

  // const settingInput=()=>{
  //   setInput((input)=>[{...input,userId:userId,title:title,body:body}])
  // }

  const handleSubmit =(e) =>{
    e.preventDefault()
    //console.log(formValues, 'form values')
    // console.log(userId,'user id')
    // console.log(title, 'title')
    // console.log(body, 'body')
    //setInput((input)=>[{...input,userId:userId,title:title,body:body}])
    // settingInput()
    // console.log(input,'input')
    postData()
  }
  const handleChange =(e) =>{
    //console.log(e.target)
    const{name, value} = e.target;
    setFormValues({...formValues, [name]:value})
    console.log(formValues, 'form values')
  }
  useEffect (()=>{
      getUsers();
  },[])

  return (
    <div>

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

         <div className='posts-container'>
         {/* <h1>Home</h1> */}
          {
           users.map((elem)=>{
          return(
          
            <div className='post' onClick={()=>navigatepost(elem.id)}>
              <div className='content'>Id : {elem.id}</div>
              <div className='content'>User Id : {elem.userId}</div>
              <div className='content'>Title : {elem.title}</div>
              {/* <div className='content'>Body : {elem.body}</div> */}
            </div>
          
        )}
      )}
    </div>
    </div>
    
   
  )
}

export default Home
