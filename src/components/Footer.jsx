import React from 'react'
import { AiOutlineCopyrightCircle} from 'react-icons/ai';

const date = new Date()
const year = date.getFullYear()

const Footer = () => {
  return (
    <footer className='flex items-center justify-center bg-black h-20'>
      <div className='flex flex-cols items-center'>
       <AiOutlineCopyrightCircle className='text-white text-1xl'/>
       <p className='text-white text-1xl'>{year} All Rights Reserved</p>
      </div>
      
    </footer>
  )
}

export default Footer