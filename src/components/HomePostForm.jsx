import React from 'react'
import { useState, useEffect } from 'react';

const HomePostForm = () => {
  const initialValues = {userId:'',title:'',body:''};
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors]=useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [items, setItems] = useState([])
  

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

  const handleSubmit =(e) =>{
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
    postData()
  }

  const handleChange =(e) =>{
    const{name, value} = e.target;
    setFormValues({...formValues, [name]:value})
    console.log(formValues, 'form values')
  }

  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length===0 && isSubmit){
      console.log(formValues)
    }
  },[formErrors])

  return (
    <div>
    <form  onSubmit={handleSubmit}>
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
      </form> 
    </div>
  )
}

export default HomePostForm
