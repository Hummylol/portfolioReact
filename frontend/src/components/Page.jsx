import { useScroll } from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import Lenis from 'lenis';
import Section1 from './Section/Section1';
import Section2 from './Section/Section2';
import Section3 from './Section/Section3';
import Section4 from './Section/Section4';
import Legend from './Legend/Legend';
import Section5 from './Section/Section5';

const Page = () => {
  const container = useRef(null);
  const { scrollYProgress: section1Progress } = useScroll({
    target: container,
    offset: ["2% 0%", "15% 0%"],
  });
  const { scrollYProgress: section2Progress } = useScroll({
    target: container,
    offset: ["20% 0%", "75% 0%"],
  });
  const { scrollYProgress: section3Progress } = useScroll({
    target: container,
    offset: ["35% 0%", "end start"],
  });
  const { scrollYProgress: section4Progress } = useScroll({
    target: container,
    offset: ["50% 0%", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative h-[600vh] w-[100vw] bg-neutral-1000">
      <Section1 id="section1" scrollYProgress={section1Progress} />
      <Section2 id="section2" scrollYProgress={section2Progress} pageOne={section1Progress} />
      <Section3 id="section3" scrollYProgress={section3Progress} />
      <Section4 id="section4" scrollYProgress={section4Progress}/>
      <Section5 id="section5" />
      <Legend/>
    </main>
  );
};

export default Page;
