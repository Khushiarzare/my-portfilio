import React from 'react'
import Home from './Home'
import About from './About'
import Cont from './Cont'



export default function Header() {
    return (
        <div className=' flex justify-between bg-purple-200   px-5 py-3 '>
            <div className='bg-purple-200  ' >
                <h1 className='sm:text-4xl text-xl font-extrabold  text-blue-900 fixed '>PORTFOLIO</h1>     </div>

            <div className='flex justify-center '>
                <div>
                    <button><Home /></button>
                </div>
                <div>
                    <button><About /></button>
                </div>
                <div><button><Cont/></button>
                </div>
            </div>


        </div>



    )
}
