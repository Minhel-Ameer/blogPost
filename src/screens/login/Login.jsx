import React, { Fragment, useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import logo from '../../images/logo2.png'
import { useHistory } from 'react-router-dom'

import './Login.css'


const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const history = useHistory()
const localEmail = JSON.parse(localStorage.getItem('users'))
const [formErrors, setFormErrors]=useState({})
const localPassword = localStorage.getItem('users')
const [isSubmit, setIsSubmit] = useState(false)

const login = (event) =>{
  event.preventDefault();

  setFormErrors(validate(email, password))
  setIsSubmit(true)

  // console.log(localEmail.password, 'email')
  // console.log(localPassword, 'Password')

  console.log('local Email :', localEmail.email )
  console.log('local Password :', localEmail.password)
  

  if(localEmail.email===email&&localEmail.password===password){
    alert('welcome', localEmail.firstName)
    setTimeout(() => history.push('home'), 2000);
  }
  else{
    alert("wrong email or password")
  }
}

useEffect(()=>{
  console.log(formErrors)
  if(Object.keys(formErrors).length===0 && isSubmit){
    console.log(email,password)
  }
},[formErrors])

const validate = (email, password) =>{
  const errors = {}
  if(!email){
    errors.email = 'Email is required'
  }
  if(!password){
    errors.password = 'Password is required'
  }
  return errors
}

  return (
    <div className='login'>
      {/* <img src='src\images\logo1.jpg' alt='logo'/> */}
      <img className='logo' src={logo} alt='Facebook Logo' />
        <div className='container-login'>
          <h1>Login</h1>
            <form>
              <div>
              <input className='inputfield-login' type='email' placeholder='Enter Email' onChange={(e)=> setEmail(e.target.value)}/>
              </div>
              <p>{formErrors.email}</p>
              <div>
              <input className='inputfield-login' type='text' placeholder='Enter Password'  onChange={(e)=> setPassword(e.target.value)}/>
              </div>
              <p>{formErrors.password}</p>
              <button onClick={login} type='submit' className='btn-login'>Log In</button>
                <div className='sideinfo-login'>
                  {/* <Link className='link' to='/resetpassword'>Forgotten Password</Link>
                  <>.</> */}
                  <Link className='link-login' to='/signup'>Sign Up</Link>
                </div>
            </form>
        </div>
        
      </div>
  )
}

export default Login
