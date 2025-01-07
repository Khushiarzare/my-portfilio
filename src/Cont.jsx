import React from 'react'

export default function Cont() {
  return (
    <div >
    <div>
    <p>Name : <br />
       <input type="text"  className='p-1 border-stone-500 w-96'/></p>  
    <p>Email :  <br />
       <input type="text" className='p-1 border-stone-500  w-96' />
    </p>
    <p> What can I help you with ? <br />
      <input type="text"   />
    </p>
    <p>
      What would make you happy in this project ? <br />
      <input type="text" className='p-1 border-stone-500  w-96' />
    </p>
    </div>
    </div>
  )
}
