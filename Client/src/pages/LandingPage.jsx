import React, { useState } from "react";
import Button from "@mui/material/Button";
import landingphoto from "../assets/parent-stud.jpg";
import homework from "../assets/Homework.jpg";
import { FaPlayCircle } from "react-icons/fa";
import logo from "../assets/Logo.jpg";
import p1 from "../assets/p1.png";
// import stud1 from "../assets/stud1.jpg";
// import connect from "../assets/connect.png";
// import resource from "../assets/resource.png";
import { Link } from "react-router-dom";
import NavBar from "../components/NabBar";
import Footer from "../components/Footer/Footer";
import ScrollAppearImage from "../components/ScrollImage/ScrollAppearImage";
import AnimateText from "../components/AnimateText/AnimateText";
import Testimony from "../components/Testimonies/tesimony";

import About from "../components/About";

const LandingPage = () => {
  //  <NavBar />
  return (
    <>
      {/* <NavBar /> */}
      <div></div>
      <nav className="bg-[#F0F7FF] w-full sm:w-[99%] ml-1 rounded-md">
        <ul className="flex justify-between mx-3 sm:mx-0 mb-3 items-center h-12 py-3 pt-5">
          <li>
            <h1 className="text-3xl text-blue-800 font-bold ml-[50px]">Majestic Academy</h1>
          </li>
          <li>
            <Link to={"/login"}>
              <button className="rounded-xl bg-blue-800 hover:bg-white hover:text-blue-600 w-28 h-8 text-center text-white font-bold">
                Join now
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      <header className="flex flex-col w-full bg-[#d8e6f6] justify-center items-center md:flex-row md:justify-start h-[520px]">
        <div
          className="flex flex-col justify-center text-center sm:text-left sm:ml-8
        md:w-1/2 md:text-3xl"
        >
          <h1
            className="font-bold text-center mb-1 md:text-center md:font-extrabold md:
          text-2xl shadow-md md:mb-1"
          >
            BETTER FUTURE FOR YOUR CHILDREN
          </h1>
          <p className="text-zinc-700 mb-4 md:text-start md:text-4xl ">
            Stay Connected with Your Child's Education
          </p>
          <div className="flex flex-col justify-center">
            <Link to="/login">
              <Button
                variant="contained"
                color="primary"
                sx={{ display: "block", margin: "auto" }}
              >
                Join now
              </Button>
            </Link>
            <span class="inline-flex justify-center sm:mt-4">
              <FaPlayCircle class="text-lg sm:text-xl lg:text-2xl" />
              Watch our welcome video
            </span>
          </div>
        </div>
        <div
          className="overflow-hidden w-[50%] flex justify-center transition duration-200 ease-in-out rounded hover:scale-105 shadow-transparent mt-2
        md:w-1/2"
        >
          <img
            src={landingphoto}
            alt="landing photo"
            className="w-[500px] rounded-3xl"
          />
        </div>
      </header>

      <section className="mt-7 flex flex-col sm:flex-row h-[400px]">
        <div className="flex justify-center items-center mx-5 sm:w-1/2">
          <img src={p1} alt="" className="w-full max-w-[500px] rounded-2xl" />
        </div>

        <div className="flex justify-center items-center mx-5 mt-5 sm:mt-0 sm:w-1/2">
          <div className="mx-6 font-bold text-center max-w-[480px]">
            <h2 className="text-lg sm:text-2xl">
              Your child's digital guardian
            </h2>
            <p className="text-sm font-normal md:font-medium md:text-lg md:w-full">
              Our illustration depicts the heartwarming scene of parents and
              children engaged in educational activities together, symbolizing
              the strong bond fostered through shared learning experiences.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div></div>
      </section>
      <section className="mt-7 flex flex-col sm:flex-row">
        <div className="flex justify-center items-center mx-5 mt-5 sm:mt-0 sm:w-1/2">
          <AnimateText />
        </div>
        <div className="flex justify-center items-center mx-5 sm:w-1/2">
          <ScrollAppearImage />
        </div>
      </section>

      {/*  ************ key Features************* */}

      {/* <section className="mt-7 mb-auto ">
        <div >
          <div className="text-center font-semibold mt-3">
            <h1 className="my-2">Key features</h1>
            <p>
              Our platform is designed to provide parents with the tools and
              resources needed to support their child's academic journey.
            </p>
            
          
            <div className="flex flex-col sm:flex-row w-full justify-center items-center h">
  <div className="flex flex-col md:flex-row justify-center items-center gap-4 flex-wrap">
    <AnimateFeature item="Tasks" />
    <AnimateFeature item="connect" />
    <AnimateFeature item="resource" /> */}
      {/* <AnimateFeature item="resource" /> */}
      {/* <AnimateFeature item="resource" /> */}
      {/* <AnimateFeature item="resource" /> */}
      {/* </div> */}
      {/* // </div> */}

      {/* </div> */}
      {/* </div> */}
      {/* </section> */}
      {/* <section className="mt-7 mb-auto">
  <div className="text-center font-semibold mt-3">
    <h1 className="my-2">Key features</h1>
    <p>
      Our platform is designed to provide parents with the tools and
      resources needed to support their child's academic journey.
    </p>
  </div>

  <div className="flex flex-col sm:flex-row w-full justify-center items-center">
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 flex-wrap">
      <AnimateFeature item="Tasks" />
      <AnimateFeature item="connect" />
      <AnimateFeature item="resource" />

    </div>
  </div>
</section> */}

      {/* <section className="block">
        <div className="h-[500px] my-4">
          <h1 className="text-center font-semibold">Our welcoming video</h1>
        </div>
      </section>

      <section>
          <div className=" bg-sky-600">
            <h1 className="text-lg text-center">What user says about us</h1>
            <div>
            <Testimony/>
            </div>
          </div> */}

      {/* </section> */}

      <section>
        <About />
      </section>

      <section>
        <h1 className="text-lg text-center">What user says about us</h1>
        <div>
          <Testimony />
        </div>
      </section>
      <footer>
        <div className="mt-4">
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
