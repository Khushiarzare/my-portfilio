import React from 'react'

export default function Cont() {
  return (
    <div >
    <div className='w-96 bg-purple-100 my-40 m-auto  border-2 border-purple-100 py-5 px-9 rounded-2xl '>
    <p className='my-4'>Name : <br />
       <input type="text"  className='p-2  w-64 my-1'/></p>  
    <p className='my-4'>Email :  <br />
       <input type="text" className='p-2 w-64 my-1' />
    </p>
    <p className='my-4'> What can I help you with ? <br />
      <input type="text"  className='p-2 w-64 my-1'  />
    </p>
    <p className='my-4'>
      What would make you happy in this project? <br />
      <input type="text" className='p-2 w-64 my-1 mb-4' />
    </p>
    </div>
    </div>
  )
}
