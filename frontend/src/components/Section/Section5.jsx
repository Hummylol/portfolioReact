import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Section5 = () => {
  return (
    <div
      id="section5"
      className="bg-neutral-800 absolute z-[100] w-full h-screen"
    >
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="">
          <div className="h-[60vh] w-[300vw] bg-white text-black text-9xl flex items-center">
            About me content with animated svgs and gifs using Svgator and Adobe Illustrator
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section5;