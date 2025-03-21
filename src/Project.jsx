import React from 'react'
export default function Project() {
  const cards = [
    { id: 1, title: "Linkedin",link: "https://khushiarzare.github.io/linked/" },
    { id: 2, title: "Task", link: "https://khushiarzare.github.io/task-31/" },
    { id: 3, title: "Exam task", link: "https://khushiarzare.github.io/exam-task/" },
    { id: 4, title: "ATM", link: "https://khushiarzare.github.io/atm/" },
  ];
  return (
    <div className='  max-w-screen-2xl  container mx-auto px-4 md:px-20  ' >
      
       <div className=' flex my-40 md:justify-between   '>
        {cards.map((card) => (
        <div
          key={card.id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "8px",
            width:"300px",
            backgroundColor:"rgb(216,191,216)",
            
          }}
        >
          <h2 className='font-bold py-5 text-2xl'>{card.title}</h2>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "rgb(0,0,139)",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => window.location.href = card.link}
          >
            view the work
          </button>
        </div>
      ))}</div> 
      
    </div>
  )
}
