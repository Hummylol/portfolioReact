import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const KeyShuffle = ({ value, onClick }) => {
  const [textArray, setTextArray] = useState(value.split(''));
  const letters = "abcdefghijklmnopqrstuvwzyx/1234567890";
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseOver = () => {
    clearInterval(intervalRef.current);

    const duration = 1; // Duration of animation in seconds
    const startTime = Date.now();
    const textLength = value.length;

    const updateText = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setTextArray((prevTextArray) =>
        prevTextArray.map((letter, index) => {
          const phaseDuration = (index + 1) * (duration / textLength);
          if (progress < phaseDuration / duration) {
            return letters[Math.floor(Math.random() * letters.length)];
          } else {
            return value[index];
          }
        })
      );

      if (progress >= 1) {
        clearInterval(intervalRef.current);
      }
    };

    intervalRef.current = setInterval(updateText, 20);
  };

  const handleMouseLeave = () => {
    clearInterval(intervalRef.current);
    setTextArray(value.split(''));
  };

  return (
    <button
      className="border-[1px] border-white h-[5rem] w-[15rem] text-[2vw] hover:scale-[1.05] transition-all ease hover:bg-white hover:text-black"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {textArray.join('')}
    </button>
  );
};

const Buttons = () => {
  const handleButtonClick = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      gsap.to(window, { duration: 1, scrollTo: { y: `#${section}` }, ease: 'power2.inOut' });
    }
  };

  return (
    <div className="flex flex-col mr-8">
      <KeyShuffle value="Skills" onClick={() => handleButtonClick('section2')} />
      <KeyShuffle value="Projects" onClick={() => handleButtonClick('section3')} />
      <KeyShuffle value="Leetcode" onClick={() => handleButtonClick('section4')} />
      <KeyShuffle value="About" onClick={() => handleButtonClick('section5')} />
    </div>
  );
};

export default Buttons;