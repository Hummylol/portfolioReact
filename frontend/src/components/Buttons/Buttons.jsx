import React, { useState, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const KeyShuffle = ({ value, onClick }) => {
  const [textArray, setTextArray] = useState(value.split(''));
  const letters = "abcdefghijklmnopqrstuvwxyz1234567890";
  const isAnimating = useRef(false); // Prevent multiple animations during hover
  const animationTimeout = useRef(null); // Ref to handle the timeout of the animation

  const handleMouseOver = () => {
    if (isAnimating.current) return; // Prevent re-triggering during an ongoing animation
    isAnimating.current = true;

    const originalText = value.split('');
    const animationDuration = 0.3; // Total animation duration in seconds

    // GSAP animation for 1-second random letter shuffle
    gsap.to({}, {
      duration: animationDuration,
      onUpdate: () => {
        setTextArray((prevTextArray) =>
          prevTextArray.map(() =>
            letters[Math.floor(Math.random() * letters.length)] // Replace letters with random characters
          )
        );
      },
      onComplete: () => {
        setTextArray(originalText); // Restore original text after 1 second
        isAnimating.current = false; // Allow animation to trigger again on future hovers
      },
    });

    // Set a timeout to stop the animation exactly after 1 second
    if (animationTimeout.current) clearTimeout(animationTimeout.current); // Clear any existing timeout
    animationTimeout.current = setTimeout(() => {
      isAnimating.current = false; // Stop animation if still active after 1 second
      setTextArray(originalText); // Restore original text
    }, animationDuration * 10000); // 1 second timeout in milliseconds
  };

  return (
    <button
      className="border-[1px] border-white h-[5rem] z-[1000] w-[15rem] text-[2vw] hover:scale-[1.05] transition-all ease hover:bg-white hover:text-black flex justify-center items-center"
      onMouseOver={handleMouseOver}
      onClick={onClick}
    >
      {textArray.map((char, index) => (
        <span key={index} className="inline-block">
          {char}
        </span>
      ))}
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
