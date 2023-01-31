import React, {useState, useEffect} from 'react'
import './PostModal.css'




function PostModal({closeModal}) {

  const initialValues = {userId:'',title:'',body:''};
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors]=useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [items, setItems] = useState([])

  const handleSubmit =(e) =>{
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
    postData()
  }

  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length===0 && isSubmit){
      console.log(formValues)
      closeModal(false)
    }
  },[formErrors])

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


  const validate = (values) => {
    const errors = {}
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

  const handleChange =(e) =>{
    const{name, value} = e.target;
    setFormValues({...formValues, [name]:value})
    console.log(formValues, 'form values')
  }
  
  // const tryJSX = <h1>HELLOOOOO</h1>

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        
          <div className='modalTitle'><h2>Share your thoughts here</h2><button className='Xbutton' onClick={()=>closeModal(false)}>X</button></div>
          {/* <div className='modalBody'></div>
          <div className='modalFooter'></div>
          <div>
          </div>
          {tryJSX} */}
      <form  onSubmit={handleSubmit}>
        <div>What is on your mind?</div>
            <div className='add-comment'>
              <div className='inputPostModalContainer'>
                <input className='inputPostModal' type='text' placeholder='User Id' 
              onChange={handleChange}
              name = 'userId'
                  value={formValues.userId}
                  />
                  <input className='inputPostModal' type='text' 
              onChange={handleChange} 
                  placeholder='Title' 
                  name='title'
                  value={formValues.title}
                  /></div>
                  <p>{formErrors.userId}</p>
                  <p>{formErrors.title}</p>
              <div ><textarea className='inputPostModalBody'
               type='textarea' rows="4" cols="50"
              onChange={handleChange}
              value={formValues.body}
              name = 'body'
              placeholder='Body' /></div>
              <p>{formErrors.body}</p>
              <button className='button-postCommentPostModal'  type='submit' >Post</button>
            </div>
          </form> 
          </div>
      </div>
  )
}

export default PostModal
