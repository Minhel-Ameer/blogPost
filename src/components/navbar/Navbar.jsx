import React from 'react'
import logo from '../../images/logo2.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='main-nav'>
        <div className='logo-nav'><img src={logo} style={{ width:"125px", height:"75px"}} alt='Facebook Logo' /></div>
        <div className='menu-link'>
          <ul>
            <li ><Link to='/home' className='lnk'>Home</Link></li>
          </ul>
          <ul>
            <li><Link to='/alldata'>Gallery</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
