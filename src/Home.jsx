import React from 'react'
import khushi from '../src/image/khushi.png';

export default function Home() {
  return (
    <div >
      <div className='flex'>
     <div>
      <p>Hello!! <br /> I'm khushi Arzare
      </p>
      <h1>I'm A WEB DESIGNER</h1>
     </div>
     <div>
      <img src={khushi} alt=""  className='rounded-full h-96  '/>
     </div>
      </div>
      
    </div>
  )
}
