import React from 'react'
import PostModal from '../../components/PostModal'
import { useState } from 'react'

const Modal = () => {

  const [openModal, setOpenModal] = useState(false)
// const openModal = () =>{
  //   console.log('in modal function')
  // }

  return (
    <div>
      <div className='main-thoughts'>
          <div className='SYT'>Share Your Thoughts</div>
          <div className='SYT-btn' onClick={()=>{setOpenModal(true)}}> Click Here</div>
        </div>
        {openModal&&<PostModal closeModal={setOpenModal}/>}
    </div>
  )
}

export default Modal
