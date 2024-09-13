import React, { useEffect } from 'react';
import { createSwapy } from 'swapy';
import { motion } from 'framer-motion';
import { skillsData } from './SkillsData.js';
import MyDrawer from '../Drawer/MyDrawer.jsx';


const Skills = ({ moveLeft: x, moveRight: x1 }) => {
  const handleClick = (e)=>{
    return(
      console.log(e)
    )
  }
  useEffect(() => {
    const container = document.querySelector('.SkillsContainer');
    if (container) {
      const swapy = createSwapy(container, {
        animation: 'spring',
      });
      swapy.enable(true);

      return () => {
        swapy.enable(false);
      };
    }
  }, []);

  return (
    <div data-vaul-drawer-wrapper className="SkillsContainer text-white h-[100%] p-4 grid grid-cols-4 grid-rows-4 ">
      {skillsData.map((skill, index) => (
        <div
          data-swapy-slot={skill.swapySlot}
          key={index}
        >
          <motion.div
            style={{ x: index % 2 !== 0 ? x : x1 }}
            className={`content h-[100%] bg-black text-center mt-auto absolute border border-dotted  border-gray-300 rounded }`}
            data-swapy-item={skill.swapyItem}
            onClick={() => handleClick(skill.additionalData)}
          >
            <h2 className=' text-2xl h-[100%] w-[100%] flex justify-center items-center'>{skill.h2Content}<MyDrawer addData={skill.additionalData} projects={skill.sampleProjects} dataPercentage={skill.percentage} /></h2>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Skills;