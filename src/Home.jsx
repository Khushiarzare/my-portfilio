import React from 'react'
import khushi from '../src/image/khushi.png';
import{ReactTyped,}from "react-typed";

export default function Home() {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20  '>
      {/* for desktop */}
      <div className='flex flex-col md:flex-row justify-around m-10 '>
      <div className=' text-xl md:my-40 m-10 md:w-1/2 order-2 md:order-1 '>
      <span className=' md:text-4xl'>Hello!!!....</span>
      <p className='md:text-4xl'>Welcome to My Feed</p>
       <div  className='md:flex md:text-4xl  text-2xl  flex  ' >
       <p>I'm a </p>

      {/* <span className='text-2xl font-bold md:px-2  md:text-5xl px-0.5 '>DESIGNER</span> */}
      <ReactTyped
      className='text-2xl font-bold md:px-2  md:text-4xl px-0.5 text-purple-900'
      strings={[" WEB DESIGNER","PROGRAMMER","CODER","DEVELOPER",]}
      typeSpeed={40}
      backSpeed={50}
      loop={true}
      />
       </div>
      
     </div>
     <div className='md:w-1/2  order-1'>
      <img src={khushi} alt=""  className='rounded-full  '/>
     </div>
    
      </div>
      
      
      
    </div>
  )
}
