import { motion, useTransform, useAnimation, cubicBezier } from 'framer-motion';
import React, { useEffect } from 'react';
import Buttons from '../Buttons/Buttons';

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateX = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0,5]);
  const dotAnimation = useAnimation();

  useEffect(() => {
    dotAnimation.start({
      y: [0, -20, 0], 
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: cubicBezier(0.25, 0.1, 0.25, 1),
        repeatType: "loop",
      }
    });
  }, [dotAnimation]);

  return (
    <div className='h-screen w-[100%] sticky top-0 '>
      <motion.div
        style={{ scale, borderRadius: radius,rotate }}
        className="relative bg-black"
      >
        <div className="flex justify-between gap-[100px] w-[100%] ">
          <section className='lol flex flex-col justify-center h-[100vh] '>
            <h1 className='text-[6vw] font-semibold -mb-6 relative'>H <span className='absolute top-[3.4vw] left-[4.7vw] text-[2.03vw] w-[0.8vw] bg-white '>i</span>
              <motion.span 
                className='dot absolute left-[4.3vw] text-[#fff678] -top-[3.4vw]' 
                animate={dotAnimation}
              >
                .
              </motion.span> ,I'm<motion.span
                className='text-[#b9ffbe] absolute ml-2'
                style={{ translateX }}
              >
                 Humaid
              </motion.span>
            </h1>
            <motion.p style={{ translateY }} className='text-[3vw] max-w-[65%] text-[#808080] leading-[3.2vw]'>Designing digital experiences that not only function <span className='underline text-[#e4a9ff]'>flawlessly</span> but also <span className='underline text-[#e4a9ff]'>mesmerize</span> and <span className='underline text-[#e4a9ff]'>inspire.</span></motion.p>
          </section>
          <section className="buttons flex items-center ">
            <Buttons />
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Section1;
