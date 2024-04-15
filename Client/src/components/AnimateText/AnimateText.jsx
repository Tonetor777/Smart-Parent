import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
// import stud1 from '../assets/stud1.jpg';
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
    <div className='animation' ref={ref} data-aos="fade-up">
        <div className="mx-6 text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Your child's digital guardian
            </h2>
            <p className="text-sm font-normal md:font-medium md:text-lg md:w-full">
              Parents are empowered to take an active role in their child's
              education, moving beyond traditional roles to become influential
              contributors to their academic development.
            </p>
          </div>
    </div>
  );
};

export default ScrollAppearImage;
