import React from "react";
import bannerImg from "../images/banner.png";
import Button from "../YIEUI/Button";
import ImgCard from "../YIEUI/ImgCard";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-100 py-20 xl:px-20 md:px-16 ">
      <div className="xl:ml-28 md:my-auto">
        <h2 className="leading-10 text-center md:text-left font-normal text-blue-900 xl:text-5xl md:text-4xl text-4xl md:w-3/4 mt-5 ">
          Redefine Learning making it Fun and Affordable
        </h2>
        <Button variant="primary">Get Started</Button>
      </div>
      <div className="row-start-1 md:col-end-3">
        <ImgCard src={bannerImg} />
      </div>
    </div>
  );
};

export default Hero;
