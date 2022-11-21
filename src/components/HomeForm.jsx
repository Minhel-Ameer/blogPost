import React, {useState}  from 'react'

function HomeForm() {
  const initialValues = {userId:'',title:'',body:''};
  const [formValues, setFormValues] = useState(initialValues)
  const [items, setItems] = useState([])

  const handleChange =(e) =>{
    const{name, value} = e.target;
    setFormValues({...formValues, [name]:value})
    console.log(formValues, 'form values')
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
    </div>
  )
}

export default HomeForm
