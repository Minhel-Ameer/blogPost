import React, { useState} from 'react'
import logo from '../../images/logo2.png'
import './SignUp.css'
import { useHistory } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";




const SignUp = () => {
  const history = useHistory()
  const initialValues = {firstName:'',lastName:'',email:'',password:'',birthday:'',gender:''}
  const[formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors]=useState({})
  //const [isSubmit, setIsSubmit] = useState(false)
  let nvgt = false

  // useEffect(()=>{
  //   console.log(formErrors,'form errors')
  //   if(Object.keys(formErrors).length===0 && isSubmit){
  //     console.log(formValues)}
  // },[formErrors])
  
  const validate = (values) =>{
    const errors = {}
    if(!values.firstName){
      errors.firstName = "First Name is required"
    }
    if(!values.lastName){
      errors.lastName = "Last Name is required"
    }
    if(!values.email){
      errors.email = "Email is required"
    }
    if(!values.password){
      errors.password = "Password is required"
    }
    if(!values.birthday){
      errors.birthday = "Birthday is required"
    }
    if(!values.gender){
      errors.gender = "Gender is required"
    }
    else{
      nvgt = true
    }
    console.log(nvgt,'nvgttt')
    return errors
  }

  const navigate =(nvgt) =>{
    console.log('in navigate', nvgt)
    if(nvgt===true&&Object.keys(formErrors).length===0){
      alert('Account created sucessfully')
      history.push('/')
    // setTimeout(() => history.push('/'), 2000);
    }
  }

  const register =(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues))
    //setIsSubmit(true)
    console.log(formValues)
    localStorage.setItem("users",JSON.stringify(formValues))
    navigate(nvgt)
  }

  const clearStorage = ()=>{
    localStorage.clear();
  }
    
  const handleChange = (e) =>{
    const{name,value} = e.target;
    setFormValues({...formValues, [name]:value})
    console.log(formValues, 'form values')
  }
  return (
    <div className='signup'>
      <img className='logo' src={logo} alt='Facebook Logo' />
      <div className='container'>
      <h1 className='h1SU'>Sign Up</h1>
        <div className='container2'>
          
            <form >
              <div className='row'>
                <div>
                   <input autoComplete="off" type='text'  placeholder='Enter your first Name' onChange={handleChange}
                   name = 'firstName'
                   
                   value={formValues.firstName} />
                  <p>{formErrors.firstName}</p>
                </div>
                <div>
                  <input  type='text' placeholder='Enter your last name' onChange={handleChange} 
                   name='lastName' value={formValues.lastName}/>
                   <p>{formErrors.lastName}</p>
                </div>
              </div>
              <center>
              <div >
              <input type='email' placeholder='Enter Email' onChange={handleChange} name='email' value={formValues.email} />
              </div>
              <p>{formErrors.email}</p>
              </center>
              <center>
              <div>
              <input  type='password' placeholder='Enter Password' onChange={handleChange} name='password' value={formValues.password}/>
              </div>
              <p>{formErrors.password}</p>
              </center>

              <div className='DOB'>
                <h4>DOB : </h4>
              <input className='DOBdate' type='date' onChange={handleChange} value={formValues.birthday} name='birthday'/> 
              </div>
              <p>{formErrors.birthday}</p>

               <div className='gender'>
                  <h5 >Gender</h5>
                  <div className='radio_gender' value={formValues.gender}
                      onChange={handleChange} >
                    <div className='wrapper' >
                      <input 
                      type='radio'  name='gender' value={'male'}
                      onChange={handleChange} /> Male
                    </div>
                    <div className='wrapper'>
                      <input  type='radio'  name='gender' value={'female'} /> Female
                    </div>
                    {/* <div className='wrapper'>
                      <input  type='radio'  name='gender' value={'other'} /> Other
                    </div> */}
                  </div>
                </div> 
              
              <p>{formErrors.gender}</p>
             
              <center>
                <button className='button' onClick={register} type='submit'>Sign Up</button>
                <button onClick={clearStorage}>clear storage</button>
              </center>
            </form>
        </div>
        </div>
        
    </div>
  )
}

export default SignUp
