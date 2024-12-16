import { motion, useTransform } from 'framer-motion';
import React from 'react';
import Component from '../Contact';

const Section4 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
    <motion.div
      id='section4'
      style={{ scale, borderRadius: radius }}
      className="bg-[#ffcfcf] h-screen  w-[100%] text-black sticky top-0"
    >
      <Component/>
    </motion.div>
  );
};

export default Section4;