import React from 'react'
import { BsFillPersonFill, BsCart,} from 'react-icons/bs';
import {  BiAlignJustify} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [toggle, setToggle] = React.useState(false)
  const letToggle =()=>{
    setToggle(!toggle)
  }
  return (
    <>
       <header className='hidden md:flex flex-row items-center text-white bg-blue-400 w-full px-4 justify-between h-20 z-50'>
        <h1><Link to="/">MyShop</Link></h1>
        <div className='flex flex-row items-center gap-4'>
          <p>Admin</p>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/contact">Contact us</Link></p>
        </div>
      
        <div className='flex flex-row items-center gap-4'>
          <div className='flex flex-row items-center'>
            <BsFillPersonFill className='text-3xl text-yellow-500'/>
            <p>Hi <span className='text-purple-900'>akeremale</span></p>
          </div>
          <p>My Orders</p>
          <p><Link to="/login">Login</Link></p>
          <p><Link to="/register">Register</Link></p>
          <div className='flex flex-row items-center'>
          <BsCart className='text-2xl'/>
          <p>0</p>
          </div>
          
        </div>
      </header>

      <div className='flex flex-row items-center justify-between px-4 bg-slate-500 h-20 md:hidden'>
        <h1 className='text-2xl'><Link to="/">MyShop</Link></h1>
        <div className='flex flex-row items-center gap-1'>
          <BsCart className='text-2xl'/>
          <p className='text-2xl'>0</p>
        </div>
        <BiAlignJustify className='text-2xl relative' onClick={letToggle}/>
        {toggle &&(
           <motion.div
             onClick={letToggle}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-md p-4">
            <ul className="space-y-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-indigo-600">Page</a>
              </li>
              
            </ul>
         </motion.div>
        )}
       
      </div>
    </>
   
  )
}

export default Header