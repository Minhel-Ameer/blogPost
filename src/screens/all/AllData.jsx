import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { getRandomImage } from '../../utils/randomimage'
import './AllData.css'

const AllData = () => {
  const arr = [1,2,3,4,5,6,7,8,9]
  return (
    <div >
      {/* <Navbar/> */}
      <h3>Gallery</h3>
      <div className='all-data'>
        <div>{arr.map((elem)=><div className='img-posts'><img style={{ width:"100%"}} src={getRandomImage()} alt='logo' className='logo'/></div>)}</div></div>
      
    </div>
  )
}

export default AllData
