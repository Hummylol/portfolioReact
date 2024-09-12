import React, { useEffect, useRef } from 'react';

const Arrow = ({tryDrag}) => {
  const pathRef1 = useRef(null);
  const pathRef2 = useRef(null);
  const pathRef3 = useRef(null);

  useEffect(() => {
    const path1 = pathRef1.current;
    const path2 = pathRef2.current;
    const path3 = pathRef3.current;

    const pathLength1 = path1.getTotalLength();
    const pathLength2 = path2.getTotalLength();
    const pathLength3 = path3.getTotalLength();

    path1.style.strokeDasharray = pathLength1 + ' ' + pathLength1;
    path1.style.strokeDashoffset = pathLength1;

    path2.style.strokeDasharray = pathLength2 + ' ' + pathLength2;
    path2.style.strokeDashoffset = pathLength2;

    path3.style.strokeDasharray = pathLength3 + ' ' + pathLength3;
    path3.style.strokeDashoffset = pathLength3;

    window.addEventListener('scroll', () => {
      var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      var drawLength2 = pathLength2 * scrollPercentage*5;
      var drawLength1 = pathLength1 * scrollPercentage*6;
      var drawLength3 = pathLength3 * scrollPercentage*5;

      path1.style.strokeDashoffset = pathLength1 - drawLength1;
      path2.style.strokeDashoffset = pathLength2 - drawLength2;
      path3.style.strokeDashoffset = pathLength3 - drawLength3;
    });
  }, []);

  return (
    <>
    <div className='text-white absolute -top-12 left-0 h-[300px] w-[300px]'>
      <svg
        id="eWXecq5ulbj1"
        viewBox="0 0 300 300"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        project-id="cf0cc84d963f4d04925883d14d86ba22"
        export-id="52f1fce27697447ab3ebe2f54a3c985b"
        cached="false"
      >
        <path
          ref={pathRef1}
          className='lol'
          d="M48.699142,65.596457q58.953778-11.624689,59.784113,49.820094c.830335,61.444783-58.123445,48.159416-59.784115,24.079708s5.524075-44.68655,44.00775-38.195405s58.123444,28.480488,64.766123,48.699143"
          transform="translate(.000002 0.000004)"
          fill="none"
          stroke="#B9FFBE"
          strokeWidth="6"
        />
        <line
          ref={pathRef2}
          x1="-8.736508"
          y1="-5"
          x2="8.736507"
          y2="5"
          transform="translate(148.736508 145.045358)"
          fill="none"
          stroke="#B9FFBE"
          strokeWidth="4"
        />
        <line
          ref={pathRef3}
          x1="1.263492"
          y1="-10"
          x2="-1.263493"
          y2="10"
          transform="matrix(.998925-.046347 0.046347 0.998925 158.225606 140.045358)"
          fill="none"
          stroke="#B9FFBE"
          strokeWidth="4"
        />
        <ellipse
          rx="1.685558"
          ry="1.550713"
          transform="matrix(1.32 0 0 1.434784 157.350667 149.751715)"
          fill="#B9FFBE"
          strokeWidth="0"
        />
      </svg>
    </div>
    
    </>
  );
};

export default Arrow;