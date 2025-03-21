import React from 'react'
import Skill from './Skill';


export default function About() {
  

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div className='py-10'>
        {/* about me */}
        <div className=' rounded-lg  md:w-[600px] md:mx-28 md:py-30 bg-purple-100 my-10 px-9 py-5 hover:shadow-2xl'>
          <h1 className='md:pt-20 flex justify-start  md:px-12 font-bold md:text-2xl' >Hello!.......</h1>
          <p className=' md:pb-20 md:px-12 flex justify-start md:text-xl rounded-lg  '>
            I'm Khushi Arzare, a fourth-semester undergraduate student with a growing passion for data science and its transformative potential.
            As I continue to build my foundation in  statistics, machine learning, and programming languages .
            I am excited to explore how data can solve real-world challenges.
          </p>
        </div>





        {/* ed. */}

        <div className='rounded-lg  md:w-[900px] md:mx-96  md:my-28 md:py-30 bg-purple-100 my-16 px-9 py-5 hover:shadow-2xl '>
          <h1 className='font-bold md:text-2xl md:px-14 md:py-6 '>Education & Training</h1>
          <p className='md:pb-9 pb-5 md:px-16  md:text-xl '>
            Currently pursuing a  Bachelor’s in  Data Science at Shri Dadaji Institute of Technology & Science ,Khandwa. <br />
            <p> Relevant coursework includes: </p>
            <ul className='list-disc px-9'>

              <li>Introduction to Data Science</li>
              <li> Programming Fundamentals (Python, Html....)</li>
              <li>Probability and Statistics</li>
              <li>Database Management Systems (SQL)</li>
              <li>Linear Algebra and Calculus for Data Science</li>
            </ul>
          </p>
        </div>




        {/* skills */}
        <div className='rounded-lg  md:w-[900px] md:mx-28  md:my-28 md:py-30 bg-purple-100 my-16 px-9 py-5  hover:shadow-2xl '>
          <h1 className='font-bold md:text-2xl md:px-14 md:py-6 px-2 '>Skills</h1>
          <p className=' md:pb-8 pb-3 md:px-16 md:text-xl px-3 '>
           

            Proficient in HTML, CSS, JavaScript, with a strong foundation in responsive web design.
              Experienced with frameworks like React  for seamless front-end development. 
             Familiar with back-end technologies like Node.js,  and database management (e.g. MySQL).
              Skilled in version control systems like Git and platforms like GitHub.
          Basic knowledge of Python for scripting and automation.
          
          </p>
          <div className='py-6 md:px-16'>
        <Skill />
        </div>
         
        </div>

       
      </div>

    </div>
  )
}
