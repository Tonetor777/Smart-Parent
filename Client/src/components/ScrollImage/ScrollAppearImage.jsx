import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import stud1 from '../../assets/stud1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScrollAppearImage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  useEffect(() => {
    if (inView) {
      AOS.init({
        duration: 2000,
      });
    }
  }, [inView]);

  return (
    <div className='animation' ref={ref} data-aos="zoom-in">
      <img src={stud1} alt="p1" style={{borderRadius:'30px'}}/>
    </div>
  );
};

export default ScrollAppearImage;
