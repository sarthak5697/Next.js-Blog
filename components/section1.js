import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{Autoplay} from 'swiper';

//Swiper Styles
import "swiper/css";

function section1() {
    SwiperCore.use([Autoplay]);
  const bg = {
    background: "url('/images/illustrations')no-repeat",
    backgroundPosition: "right",
  };

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-1xl pb-12 text-center">
          Trending
          <Swiper
            loop={true}
            slidesPerView={1}
            autoplay={{
                delay:2000
            }}
          >
            <SwiperSlide> {Slide()}</SwiperSlide>
            <SwiperSlide> {Slide()}</SwiperSlide>
            <SwiperSlide> {Slide()}</SwiperSlide>
            <SwiperSlide> {Slide()}</SwiperSlide>
            ...
          </Swiper>
        </h1>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href="/">
          <a>
            <Image src={"/images/bg1.jpg"} width={600} height={600} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              Business , Travel
            </a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-800 hover:text-gray-600">-3 July 2022</a>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              Your most unhappy customers are your greatest source of learning
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        <Author></Author>
      </div>
    </div>
  );
}

export default section1;
