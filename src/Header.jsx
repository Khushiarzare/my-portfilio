import React from 'react'
import Home from './Home'
import About from './About'
import Cont from './Cont'
import { Link } from 'react-router-dom'



export default function Header() {
    return (
        <div className=' flex justify-between bg-purple-200   px-5 py-3 '>
            <div className='bg-purple-200  ' >
                <h1 className='sm:text-4xl text-xl font-extrabold  text-blue-900  '>PORTFOLIO</h1>  
             </div>

            <div className='flex justify-center '>
               <div><Link to="/" className='hover:uppercase hover:bg-blue-900 rounded-lg p-1 hover:text-white hover:font-bold mx-2'>Home</Link></div> 
               <div><Link to="About" className='hover:uppercase hover:bg-blue-900 rounded-lg p-1 hover:text-white hover:font-bold mx-2'>About</Link></div> 
               <div><Link to="project" className='hover:uppercase hover:bg-blue-900 rounded-lg p-1 hover:text-white hover:font-bold mx-2'>Project</Link></div> 
               <div><Link to="cont" className='hover:uppercase hover:bg-blue-900 rounded-lg p-1 hover:text-white hover:font-bold mx-2'>Contact</Link></div> 
            </div>


        </div>



    )
}
