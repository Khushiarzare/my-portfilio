import React from 'react'
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import { SiCanva } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';
import SkillBar from 'react-skillbars';
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";





export default function Skill({}) {
    const skills = [
        { type: 'HTML', level: 100 , icon:<FaHtml5  style={{ fontSize: '48px' }}/> },
        { type: 'CSS', level: 95 ,icon:<FaCss3Alt  style={{ fontSize: '48px' }} /> },
        { type: 'JAVASCRIPT', level: 50 ,icon:<TbBrandJavascript  style={{ fontSize: '48px' }} /> },
        { type: 'REACT', level: 50,icon:<FaReact  style={{ fontSize: '48px' }}/> },
        { type: 'CANVA', level: 100 , icon:<SiCanva  style={{ fontSize: '48px' }} />},
        { type: 'TAILWIND CSS', level: 94,icon:<RiTailwindCssFill  style={{ fontSize: '48px' }}/>},
        { type: 'PYTHON', level:25,icon:<FaPython  style={{ fontSize: '48px' }}/>  },
        { type: 'MYSQL', level:15, icon:<SiMysql  style={{ fontSize: '48px' }} />}
      ];
      const colors = {
        bar: "#3498db", // Bar color
        title: {
            text: "#fff", // Title text color
            background: "#34495e" // Title background color
        }
      }
  return (
    <div>
       <div>
      {skills.map((skill, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          {/* Render the icon */}
          {skill.icon && <div style={{ marginRight: '10px' }}>{skill.icon}</div>}
          {/* Render the skill bar */}
          <div style={{ flex: 1 }}>
            <SkillBar style={{}}
              skills={[{ type: skill.type, level: skill.level }]}
              animationDuration={7000}
              colors={colors}
            />
          </div>
        </div>
      ))}
    </div>

        
    </div>
  )
}
