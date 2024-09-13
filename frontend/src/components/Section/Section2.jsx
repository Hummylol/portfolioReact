import { motion, useTransform } from 'framer-motion';
import React from 'react';
import Skills from '../Skills/Skills';
import Arrow from '../Skills/Arrow';

const Section2 = ({ scrollYProgress,pageOne }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y = useTransform(scrollYProgress, [0,0.2], [0,200]);
  const y1 = useTransform(scrollYProgress, [0,0.2], [0,-300]);
  const moveLeft = useTransform(scrollYProgress, [0, 1], [0,-500]);
  const moveRight = useTransform(scrollYProgress, [0, 1], [0,500]);
  return (
    <motion.div
      id='section2'
      style={{ scale }}
      className="bg-black h-[100vh] w-[100%] sticky top-0 left-0"
    >

        <div className='h-[100vh] w-[100%] relative'>
          <Arrow />
        <motion.div className='trydragging text-white absolute text-2xl mt-[8rem] italic'
        style={{y}}
        >Try dragging...</motion.div>
        <motion.div className='absolute right-2 bottom-[10rem] text-lg'>
          <motion.div style={{y:y1}}>Click for more info</motion.div>
          <div className="arrow rotate-90 absolute right-[1rem] bottom-[11em]">
          <Arrow/>
          </div>
        </motion.div>
        <div className="h-full w-[100%] flex justify-center items-center bg-black "style={{ borderRadius: radius }}>
          <div className="bento-grids h-[75%] w-[75%]"><Skills moveLeft={moveLeft} moveRight={moveRight} /></div>
        </div>
      </div>

    </motion.div>
  );
};

export default Section2;