import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'



const useFetchUser = (email,password,formErrors) => {
  const history = useHistory()
  const [localEmail, setLocalEmail] = useState()
  const localData = JSON.parse(localStorage.getItem('users'))
  setLocalEmail(localData)

    console.log('local Email :', localEmail.email )
  console.log('local Password :', localEmail.password)
  console.log(Object.keys(formErrors),'Object.keys(formErrors)')
  

  if(localEmail.email===email&&localEmail.password===password){
    history.push('home')
  }
  else{
    alert("wrong email or password")
  }
    
  return[localEmail, setLocalEmail]
}

export default useFetchUser
