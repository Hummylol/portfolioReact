import React from 'react';
import { gsap } from "gsap";

const Legend = () => {
    const handleClick = (element) => {
        const i = document.getElementById(element);
        if (i) {
            gsap.to(window, { duration: 1, scrollTo: { y: `#${element}` }, ease: 'power2.inOut' });
        }
    };

    return (
        <div
            onClick={() => handleClick('nav')}
            className="h-[3vh] w-[3vh] cursor-pointer fixed bottom-[1.5vw] right-[1.5vw] z-[100] flex items-center justify-center rounded-full bg-black transition-transform duration-300 ease-in-out transform hover:scale-[3] hover:bg-white"
            style={{ transformOrigin: 'center center' }}
        >
            <div className="flex invert hover:invert-0 items-center justify-center transition-transform duration-300 ease-in-out hover:rotate-0 rotate-[-270deg]">
                <img
                    src="https://www.reshot.com/preview-assets/icons/ZGEKU95YAJ/arrow-up-ZGEKU95YAJ.svg"
                    height="50px"
                    width="50px"
                    alt="Arrow"
                />
            </div>
        </div>
    );
};

export default Legend;