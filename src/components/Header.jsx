import React from 'react'
import { BsFillPersonFill, BsCart,} from 'react-icons/bs';
import {  BiAlignJustify} from 'react-icons/bi';

const Header = () => {
  const [toggle, setToggle] = React.useState(false)
  const letToggle =()=>{
    setToggle(!toggle)
  }
  return (
    <>
       <header className='hidden md:flex flex-row items-center text-white bg-blue-400 w-full px-4 justify-between h-20 z-50'>
        <h1>MYshop</h1>
        <div className='flex flex-row items-center gap-4'>
          <p>Admin</p>
          <p>Home</p>
          <p>Contact Us</p>
        </div>
      
        <div className='flex flex-row items-center gap-4'>
          <div className='flex flex-row items-center'>
            <BsFillPersonFill className='text-3xl text-yellow-500'/>
            <p>Hi <span className='text-purple-900'>akeremale</span></p>
          </div>
          <p>My Orders</p>
          <p>Logout</p>
          <div className='flex flex-row items-center'>
          <BsCart className='text-2xl'/>
          <p>0</p>
          </div>
          
        </div>
      </header>

      <div className='flex flex-row items-center justify-between px-4 bg-slate-500 h-20 md:hidden'>
        <h1 className='text-2xl'>Myshop</h1>
        <div className='flex flex-row items-center gap-1'>
          <BsCart className='text-2xl'/>
          <p className='text-2xl'>0</p>
        </div>
        <BiAlignJustify className='text-2xl relative' onClick={letToggle}/>
        {toggle &&(
           <ul className="flex flex-col absolute top-20 right-[-4px] bg-slate-400 ">
           <li
             className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
             
           >
             Home
           </li>
           <li
             className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
             // onClick={() => setIsMenu(false)}
           >
             Menu
           </li>
           <li
             className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
             // onClick={() => setIsMenu(false)}
           >
             About Us
           </li>
           <li
             className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
             // onClick={() => setIsMenu(false)}
           >
             Service
           </li>
         </ul>
        )}
       
      </div>
    </>
   
  )
}

export default Header