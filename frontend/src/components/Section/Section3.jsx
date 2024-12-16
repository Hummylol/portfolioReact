import { motion, useTransform } from 'framer-motion';
import React,{ useEffect,useState,useRef } from 'react';
import Slider from '../Projects/Slider';

const Section3 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <motion.div
    id='section3'
      style={{ scale, borderRadius: radius }}
      className="bg-black h-[100vh] w-[100%] text-black sticky top-0"
    >
      <Slider/>
    </motion.div>
  );
};

export default Section3;