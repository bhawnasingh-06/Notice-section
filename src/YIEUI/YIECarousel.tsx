import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

interface PropTypes {
  slides: { title: string; url: string; image: string }[];
  slidesPerView?: number;
  spaceBetween?: number;
  containerClass?: string;
  loop?: boolean;
}

const YIECarousel: React.FC<PropTypes> = ({
  slides,
  slidesPerView = 2,
  spaceBetween = 0,
  containerClass = "",
  loop = true,
}: PropTypes) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Swiper
        className={["w-full md:w-1/2 m-5", containerClass].join(" ")}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        modules={[Pagination]}
        loop={loop}
        pagination={{
          el: "#swiper-pagination",
          clickable: true,
          bulletClass:
            "w-3.5 h-3.5 rounded-full mx-1 cursor-pointer bg-gray-300 ",
          bulletActiveClass: "bg-indigo-800",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link to={slide.url}>
              <div className="relative scale-95 hover:scale-100 transition-transform">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover object-center bg-black rounded-2xl cursor-pointer"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-30 hover:bg-opacity-50 transition-colors flex items-center justify-center rounded-2xl">
                  <h3 className="text-2xl text-white">{slide.title}</h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div id="swiper-pagination" className="mt-0 flex justify-center"></div>
    </div>
  );
};

export default YIECarousel;
