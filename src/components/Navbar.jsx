import React, {  useState } from 'react'
import {assets} from '../assets/assets'
import { Link,  NavLink, useNavigate } from 'react-router-dom'



function Navbar() {

  const [visible, setVisible] = useState(false)

  return (
    <div className='flex items-center justify-between sm:justify-center sm:px-5 px-6 pl-16   rounded-xl py-2 my-5  font-medium sticky top-1 backdrop-blur-md z-50 shadow-cyan-500/50  shadow-sm  '>
        
        <ul className=' flex sm:gap-10 gap-16 text-sm text-gray-700 navbar'>
            <NavLink className='flex flex-col items-center gap-1 ' to='/' >
            <p className=''>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-cyan-500/50 hidden'/>
            </NavLink>
          
            <NavLink className='flex flex-col items-center gap-1 ' to='/about' >
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-cyan-500/50 hidden'/>
            </NavLink>
            <NavLink className='flex flex-col items-center gap-1 ' to='/project' >
            <p> Project</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-cyan-500/50 hidden '/>
            </NavLink>
            <NavLink className=' hidden sm:flex   flex-col items-center gap-1 ' to='/skills' >
            <p>Experties</p>
            <hr className='w-2/4  border-none h-[1.5px] bg-cyan-500/50 hidden'/>
            </NavLink>
            <NavLink className='w-2/4 hidden sm:flex  flex-col items-center gap-1 ' to='/contact' >
            <p>Contact</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-cyan-500/50 hidden'/>
            </NavLink>           
        </ul>
         <img src={assets.menu_icon} onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden' alt="" />
        <div  className={` sidebar  absolute z-50  top-0 right-0 bottom-0 h-[100vh] bg-black round  transition-all ease-in  duration-500 overflow-hidden ${visible ? 'w-full + p-1 ' : 'w-0'}` }>
            <div className='flex flex-col text-gray-600 p-3'>
                <div className='flex items-center gap-4 p-3 cursor-pointer'onClick={()=>setVisible(false)}>
                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                    <p >BACK</p>
                </div>
                <hr className='border-slate-50/20' />
                <NavLink className="py-2 pl-6 " onClick={()=>setVisible(false)} to="/">HOME</NavLink>
                <hr className='border-slate-50/20' />
                <NavLink className="py-2 pl-6 " onClick={()=>setVisible(false)} to="/skills">Experties</NavLink>
                <hr className='border-slate-50/20' />
                <NavLink className="py-2 pl-6 " onClick={()=>setVisible(false)} to="/contact">CONTACT</NavLink>
                <hr className='border-slate-50/20' />
                

            </div>
        </div>
        
        
      
    </div>
  )
}

export default Navbar