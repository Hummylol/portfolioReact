import React, { useEffect, useState, useRef } from 'react';
import { videos } from './videos.js';
import ReactPlayer from 'react-player';
import { gsap } from 'gsap';

const Slider = () => {
  const sliderRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const initializeCards = () => {
    const cards = Array.from(sliderRef.current.querySelectorAll(".card"));
    gsap.to(cards, {
      y: (i) => 0 + 20 * i + "%",
      z: (i) => 15 * i,
      duration: 1,
      ease: "power3.out",
      stagger: -0.1,
    });
  };

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const slider = sliderRef.current;
    const cards = Array.from(slider.querySelectorAll(".card"));
    const lastCard = cards.pop();

    gsap.to(lastCard, {
      y: "+=150%",
      duration: 0.75,
      ease: "power3.inOut",
      onStart: () => {
        setTimeout(() => {
          slider.prepend(lastCard);
          initializeCards();
          setTimeout(() => {
            setIsAnimating(false);
          }, 0);
        }, 300);
      },
    });
  };
  const handleClick1 = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const slider = sliderRef.current;
    const cards = Array.from(slider.querySelectorAll(".card"));
    const firstCard = cards.shift(); 

    gsap.to(firstCard, {
        y: "-=150%", 
        duration: 0.75,
        ease: "power3.inOut",
        onStart: () => {
            setTimeout(() => {
                slider.append(firstCard);
                setTimeout(() => {
                    setIsAnimating(false);
                initializeCards(); 

                },0);
            }, 300);
        },
    });
};

  useEffect(() => {
    initializeCards();
  }, []);

  return (
    <div
      className="container1 text-white h-[100vh] w-[100%] relative overflow-hidden"
    >
      <button onClick={handleClick1} className='hover:bg-[#2b2b2b] rounded-full absolute z-40 flex justify-center items-center transition-all ease p-4 '><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-forward-512.png" alt="" className='invert rotate-180' height={"30px"} width={"30px"} /></button>
      <button  onClick={handleClick} className='hover:bg-[#2b2b2b] rounded-full absolute z-40 right-0 flex justify-center items-center transition-all ease p-4 ' ><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-forward-512.png" alt="" className='invert' height={"30px"} width={"30px"} /></button>
      <div className="slider absolute h-[100vh] w-[100vw]" ref={sliderRef}>
        {videos.map((video) => (
          <div
            className="card absolute top-[25%] left-[50%] w-[55%] h-[50vh] flex flex-col"
            key={video.id}
          >
            <div className="card-info w-[100%] flex items-center bg-black z-10">
              <div className="card-item text-[#606060]">
                <p>{video.date}</p>
              </div>
              <div className="card-item font-bold text-white text-center">
                <p>{video.title}</p>
              </div>
              <div className="card-item">
                <p className="text-[12px] text-[#606060] text-right">{video.category}</p>
              </div>
            </div>
            <div className="video-player w-[100%] h-[100%] overflow-hidden">
              <ReactPlayer
                url={video.url}
                controls={false}
                autoPlay={true}
                loop={true}
                playing
                muted
                width="100%"
                height="100%"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;