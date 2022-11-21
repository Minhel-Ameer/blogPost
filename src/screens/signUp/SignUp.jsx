import React, { useState, useEffect } from 'react'
import { json, Link, Redirect } from 'react-router-dom'
import logo from '../../images/logo2.png'
// import Home from '../home/Home'
import './SignUp.css'
import { useHistory } from 'react-router-dom'
// import Calendar from 'react-calendar'
// import Calendar from 'moedim';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const SignUp = () => {
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [birthday, setBirthday] = useState('')
  // const [gender, setGender] = useState('')
  // const [key, setKey] = useState('')
  // const [newUser, setNewUser]= useState({firstName:'', lastName:'',email:'',password:'', birthday:'', gender:''})
  // const [users, setUsers] = useState('')
  // const [showHome, setShowHome] = useState('false')
  // const signUpSuccess = localStorage.getItem('signup')
  const history = useHistory()
  // const [counter,setCounter]= useState(0)
  // const [redirectNow, setRedirectNow] = useState(false);

  
  
  const initialValues = {firstName:'',lastName:'',email:'',password:'',birthday:'',gender:''}
  const[formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors]=useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  // const [nvgt, setNvgt] = useState(false)
  let nvgt = false

  useEffect(()=>{
    console.log(formErrors,'form errors')
    if(Object.keys(formErrors).length===0 && isSubmit){
      console.log(formValues)}
    // if(formErrors ==={}){
    //   setNvgt(true)
    // }
  },[formErrors])
  
  // {firstName:'',lastName:'',email:'',password:'',birthday:'',gender:''}

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
    // console.log(errors,'errrrr')
    else{
      nvgt = true
    }
    console.log(nvgt,'nvgttt')
    return errors
  }

  const navigate =(nvgt) =>{
    console.log('in navigate', nvgt)
    if(nvgt===true){
      alert('Account created sucessfully')
    setTimeout(() => history.push('/'), 2000);
    }
    // else{
    //   alert('false')
    // }

  }

  const register =(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true)
    console.log(formValues)
    localStorage.setItem("users",JSON.stringify(formValues))
    navigate(nvgt)
    // setCounter(counter+1)
    // console.log(counter,"counter")
    // localStorage.setItem("counter",counter)
    // setNewUser((newUser.firstName=firstName, newUser.lastName=lastName, newUser.email=email, newUser.password=password ,newUser.birthday=birthday,newUser.gender=gender))
    
    // console.log(firstName, 'first name')
    // console.log(lastName, 'last name')
    // console.log(email, 'email')
    // console.log(password,'password')
    // console.log(birthday,'birthday')
    // console.log(gender,'gender')
    // console.log(newUser, 'user object')
    // console.log(signUpSuccess,'signUpSuccess2')
    // console.log(users,'users')
    // setUsers({...users, newUser})

    // setUsers((prev) => [...prev, newUser])
    // localStorage.setItem("users",JSON.stringify(users))
    // setKey(new Date().getTime().toString())
    // setTheArray(oldArray => [...oldArray, newElement]);
    // console.log(users,'usersss')

    
    // localStorage.setItem('firstName',firstName)
    // localStorage.setItem('lastName',lastName)
    // localStorage.setItem('email', email)
    // localStorage.setItem('password', password)
    // localStorage.setItem('birthday',birthday)
    // localStorage.setItem('gender', gender)
    // localStorage.setItem('signup', 'success' )

    

    // alert('Account created sucessfully')
    // setTimeout(() => history.push('/'), 2000);
    

    // setNewUser({...newUser,firstName:firstName,lastName:lastName,email:email,password:password,birthday:birthday,gender:gender})
    // console.log(newUser,'new')
    // setUsers((users)=>[...users,newUser])
    // console.log(users)
    // localStorage.setItem('users',JSON.stringify(users))

    
    // return redirectNow ? (
      
    //   // <Redirect to="/home" />
    // ) : (
    //   <div className="SplashScreen">
    //     <h1>Hello World</h1>
    //   </div>
    // );
  //   setTimeout(() => {
  //     console.log('fsasdf') 
  //     return <Redirect to={'/home'} />;
  // }, 5000)
    // timer = setTimeout(() => <Link to='/home'/>, 1000);
    //<Link className='link' to='/signup'></Link>

  }

  const clearStorage = ()=>{
    localStorage.clear();
  }

  // const addStorage = () => {
  //   setNewUser({...newUser,firstName:firstName,lastName:lastName,email:email,password:password,birthday:birthday,gender:gender})
  //   console.log(newUser,'new')
  //   setUsers((prev)=>[...prev,newUser])
  //   console.log(users)
  //   localStorage.setItem('users',JSON.stringify(users))
  // }
  
//   const showDate = () =>{
//     for(let i=0; i<31; i++)(
//       <div>
//         return(
//           <option value={i}>{i}</option>
//         )
        
//       </div>
//     )
// }
    
  const handleChange = (e) =>{
    const{name,value} = e.target;
    setFormValues({...formValues, [name]:value})
    console.log(formValues, 'form values')
  }
  return (
    //(showHome)?<Home/>:
    <div className='signup'>
      <img className='logo' src={logo} alt='Facebook Logo' />
      <div className='container'>
      <h1>Sign Up
        {/* {<p>{counter}</p>} */}

      </h1>
        <div className='container2'>
          
            <form>
              <div className='row'>
                <div>
                   <input type='text' placeholder='Enter your first Name' onChange={handleChange}
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

              {/* <h5 className='date'>Date of Birth</h5>
              <div className='row'>
                
                <select className='date2' type='date' onChange={handleChange} name='birthday' value={formValues.birthday}>
                <option value='Day'>Day</option>
                
                    {
                    for(let i=0; i<31; i++)(
                      <option value={i}>{i}</option>
                    )
                  }
                
                {showDate()}
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
                <option value='16'>16</option>
                <option value='17'>17</option>
                <option value='18'>18</option>
                <option value='19'>19</option>
                <option value='20'>20</option>
                <option value='21'>21</option>
                <option value='22'>22</option>
                <option value='23'>23</option>
                <option value='24'>24</option>
                <option value='26'>25</option>
                <option value='27'>27</option>
                <option value='28'>28</option>
                <option value='29'>29</option>
                <option value='30'>30</option>
                <option value='31'>31</option>
              </select>

              <select className='date3' type='date' onChange={handleChange} name='birthday' value={formValues.birthday}>
                <option value='Month'>Month</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
              </select>

              <select className='date3' type='date' onChange={handleChange} name='birthday' value={formValues.birthday}>
                <option value='Year'>Year</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
                <option value='2018'>2018</option>
                <option value='2017'>2017</option>
                <option value='2016'>2016</option>
                <option value='2015'>2015</option>
                <option value='2014'>2014</option>
                <option value='2013'>2013</option>
                <option value='2012'>2012</option>
                <option value='2011'>2011</option>
                <option value='2010'>2010</option>
              </select>
              </div> */}

              {/* <div>
              <Calendar value={formValues.birthday} onChange={handleChange} />
              </div> */}

              <div className='DOB'>
                <>DOB : </>
              <input type='date' onChange={handleChange} value={formValues.birthday} name='birthday'/> 
              </div>
              <p>{formErrors.birthday}</p>
                
              <h5 className='gender'>Gender</h5>
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
                <div className='wrapper'>
                  <input  type='radio'  name='gender' value={'other'} /> Other
                </div>
              </div>
              <p>{formErrors.gender}</p>
             
              <center>
                <button className='button' onClick={register} type='submit'>Sign Up</button>
                {/* <Link className='button' to='/home'>Sign Up</Link> */}
                <button onClick={clearStorage}>clear storage</button>
                {/* <div onClick={
                  // localStorage.setItem('user',JSON.stringify(users))
                  addStorage
                  }>add in storage</div> */}

              </center>
                {/* <div className='sideinfo'>
                  <Link className='link' to='/resetpassword'>Forgotten Password</Link> */}
                  {/* <>.</> */}
                  {/* <Link className='link' to='/signup'>Sign Up</Link>
                </div> */}
            </form>
        </div>
        </div>
        
    </div>
  )
}

export default SignUp
