import React, { useState } from 'react'
import Home from './Home'
import About from './About'
import Cont from './Cont'
import { Link } from 'react-router-dom'
import profile from '../src/image/profile.jpg';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";



export default function Header() {
    const [menu, setMenu] = useState(false)
    return (
        <div className=' flex justify-between bg-purple-200   max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 h-16'>
            <div className='bg-purple-200  flex space-x-2 items-center h-16' >
                <img src={profile} alt="" className='h-16 rounded-full' />
                <p className='text-sm'>  <p className='font-semibold text-xl cursor-pointer'>
                    KHUSHI ARZARE
                </p>
                    Web Developer</p>

            </div>
            {/*desktop */}

            <div className=' hidden md:flex justify-center items-center space-x-8  text-xl '>
                <div><Link to="/" className='hover:uppercase hover:bg-blue-900 rounded-lg p-1 hover:text-white hover:font-bold   '>Home</Link></div>
                <div><Link to="About" className='hover:uppercase hover:bg-blue-900 rounded-lg p-1 hover:text-white hover:font-bold '>About</Link></div>
                <div><Link to="project" className='hover:uppercase hover:bg-blue-900 rounded-lg p-1 hover:text-white hover:font-bold '>Project</Link></div>
                <div><Link to="cont" className='hover:uppercase hover:bg-blue-900 rounded-lg p-1 hover:text-white hover:font-bold '>Contact</Link></div>

            </div>
            <div onClick={() => setMenu(!menu)} className='md:hidden  py-5 end-3 fixed'>

                {menu ? <RxCross2 fontSize={24} /> : <IoMenu fontSize={24} />}
            </div>

            {/* mobile navbar*/}
            {menu &&
                  <div className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl  font-semibold '>
                    <div> <Link to="/" className='hover:uppercase hover:bg-blue-900 rounded-lg p-1 hover:text-white hover:font-bold '>Home</Link></div>
                    <div><Link to="About" className='hover:uppercase hover:bg-blue-900 rounded-lg p-1 hover:text-white hover:font-bold '>About</Link></div>
                    <div><Link to="project" className='hover:uppercase hover:bg-blue-900 rounded-lg p-1 hover:text-white hover:font-bold '>Project</Link></div>
                    <div><Link to="cont" className='hover:uppercase hover:bg-blue-900 rounded-lg p-1 hover:text-white hover:font-bold '>Contact</Link></div>

                </div>
            }



        </div>
    )
}
