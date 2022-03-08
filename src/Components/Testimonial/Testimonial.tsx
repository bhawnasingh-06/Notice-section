import React from "react";
import { useState } from "react";

const Testimonial = () => {
  // DATA-------------------------------------------------------------------------->
  const [testimonials, setTestimonials] = useState([
    {
      name: "Kimmie",
      profileImg:
        "https://www.ziglar.com/wp-content/uploads/2016/09/michelle-prince-profile-img.png",
      message:
        '"This Course Extremely Informative. It\'s Well Done From A Production Standpoint. The Presenters Are Easy To Undrestand, And Also Personable."',
      position: "Student At YI-E School",
    },
    {
      name: "Soumya",
      profileImg:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message:
        '"The Course Is Very Well Designed, Helped Me A Lot With The Basic Knowledge, The Extra Material is Very Helpful."',
      position: "Student At YI-E School",
    },
  ]);
  //---------------------------/

  return (
    <div className='testimonial_container h-80 flex  items-center justify-evenly w-full flex-wrap '>
      {testimonials.map((testimonial) => {
        return (
          <div className='m-5 max-w-xs min-w-[200px]'>
            <div className='border-blue-900 border min-h-[130px] rounded-[20px] p-3 shadow-[-5px_5px_12px] shadow-indigo-400 font-bold text-blue-900'>
              {testimonial.message}
            </div>
            <div className='profile flex items-center m-2'>
              <div className='image'>
                <img
                  className='ma max-h-12 rounded-full'
                  src={testimonial.profileImg}
                  alt='profile'
                />
              </div>
              <div className='name_pos m-2'>
                <div className='text-xl font-bold'>{testimonial.name}</div>
                <div className='text-blue-900'>{testimonial.position}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonial;
