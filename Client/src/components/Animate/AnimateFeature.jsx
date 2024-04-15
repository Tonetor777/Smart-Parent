import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Homework from "../../assets/Homework.jpg";
import Connect from "../../assets/connect.png";
import Resource from "../../assets/resource.png";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimateFeature = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      AOS.init({
        duration: 1000,
      });
    }
  }, [inView]);

  let imageSrc;
  let featureDescription;
  if (item === "Tasks") {
    imageSrc = Homework;
    featureDescription = "Tasks: Manage and track homework assignments easily.";
  } else if (item === "connect") {
    imageSrc = Connect;
    featureDescription = "Connect: Stay connected with classmates and teachers.";
  } else if (item === "resource") {
    imageSrc = Resource;
    featureDescription = "Resource: Access educational resources and materials.";
  }

  return (
    <div className='animation' ref={ref} data-aos="zoom-in">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <img src={imageSrc} alt={item} className="rounded-lg mb-4 sm:mb-0 sm:mr-4 w-full h-56 md:w-[400px] md:h-[300px] flex-wrap" />
          <div className="flex flex-col justify-center">
            <span>{item}</span>
            <p className="text-center sm:text-left">{featureDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimateFeature;
