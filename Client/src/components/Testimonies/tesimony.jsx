import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

import profil1 from "../../assets/ava1jpg.jpg";
import profil2 from "../../assets/ava2.jpg";
import profil3 from "../../assets/ava3.jpg";
import profil4 from "../../assets/ava4.jpg";
import profil5 from "../../assets/ava5.jpg";
import profil6 from "../../assets/ava6.jpg";

export default function Testimony() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="main">
            <img
              src={profil1}
              alt=""
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3>
              Aiyne Abebe
              <br />
              <small className="gray">aiyneabebe23@gmail.com</small>
            </h3>
          </div>
          <br />
          <h2>Performance</h2>
          <p>
            Being actively involved in my child's education has been a
            game-changer. The school system's emphasis on parent engagement has
            allowed me to participate in my child's learning journey, attend
            parent-teacher conferences, and collaborate with teachers.
          </p>
          <div>Two weeks ago</div>
        </SwiperSlide>
        <SwiperSlide className="p-2">
          <div className="main">
            <img src={profil2} alt="" />
            <h3>
              Matiyas Adane
              <br />
              <small className="gray">matiyasadane23@gmail.com</small>
            </h3>
          </div>
          <br />
          <h2>Quality</h2>
          <p>
            The school system's commitment to parent engagement has empowered me
            as a parent. Through workshops, volunteering opportunities, and open
            communication channels, I feel heard and valued.Its amazing and
            thanks.
          </p>
          <div>Four Days ago</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main">
            <img src={profil6} alt="" />
            <h3>
              Helen Abebe
              <br />
              <small className="gray">helenabebe23@gmail.com</small>
            </h3>
          </div>
          <br />
          <h2>Parenting</h2>
          <p>
            As a working parent, I initially had concerns about my limited
            availability to engage with the school system. However, the school's
            flexible approach to parent involvement has been incredible.The
            school encourages parents to join.{" "}
          </p>{" "}
          <div>One Month ago</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main">
            <img src={profil3} alt="" />
            <h3>
              Biruk Tamiru
              <br />
              <small className="gray">biruktamiru23@gmail.com</small>
            </h3>
          </div>
          <br />
          <h2>Education</h2>
          <p>
            I cannot stress enough how important the school system's focus on
            parent engagement has been for my family. The school encourages
            parents to join committees, attend workshops, and contribute ideas
            for improvement.{" "}
          </p>
          <div>Four weeks ago</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main">
            <img src={profil4} alt="" />
            <h3>
              {" "}
              Wendmagegnew Kebede <br />
              <small className="gray"> wendmaggegnewkebede23@gmail.com</small>
            </h3>
          </div>
          <br />
          <h2>School</h2>
          <p>
            Through the school system's parent engagement initiatives, I have
            had the opportunity to connect with other parents who share similar
            concerns and interests. We organize parent support groups, share
            resources, and exchange advice.
          </p>
          <div>Three weeks ago</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main">
            <img src={profil5} alt="" />
            <h3>
              {" "}
              Sarah Tomas
              <br />
              <small className="gray">sarahtomas23@gmail.com</small>
            </h3>
          </div>
          <br />
          <h2>Environment</h2>
          <p>
            The school system's commitment to parent engagement has made me feel
            like a true partner in my child's education. Whether it's attending
            school events, participating in curriculum discussions, or joining
            parent-led initiatives.{" "}
          </p>{" "}
          <div>Two Days ago</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}