import React, { useState } from "react";
import { Link } from "react-router-dom";
import FirstApi from "../Api/FirstApi";
import SecondApi from "../Api/SecondApi";
import ThirdApi from "../Api/ThirdApi";
import FourthApi from "../Api/FourthApi";
const Footer2 = () => {
  const [data, setData] = useState(FirstApi);
  const [images, setImages] = useState(SecondApi);
  const [part,setPart] = useState(ThirdApi)
  const [secondPart,setSecondPart] = useState(FourthApi);
  return (
    <>
      <footer className=" bg-blue-900 h-[100%] mb-auto ">
        <div className=" flex justify-around items-center flex-col py-10 px-4 lg:flex-row md:flex-row ">
          <div className=" w-fit">
            {data.map((val) => {
              return (
                <>
                  <div className=" flex  py-4 " key={val.id}>
                    <div className="py-0">
                      <img
                        className=" w-[18px]  mx-2  relative top-2  "
                        src={val.image}
                        alt="not"
                      />
                    </div>
                    <div className="py-0">
                      <p className=" text-white relative top-2 ">
                        {" "}
                        {val.name}{" "}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="w-fit py-4 text-center lg:text-justify md:text-justify sm:text-justify">
            <p className="font-bold text-white text-lg my-2 ">Comunity</p>
            <div className=" text-white flex flex-col">
            {
              part.map(val=>{
                return(
                  <Link key={val.id} to={val.link}>{val.name}</Link>
                )
              })
            }
            
            </div>
          </div>

          <div className="w-fit py-4 text-center lg:text-justify md:text-justify sm:text-justify">
            <p className="font-bold text-white text-lg my-2">Information</p>
            <div className=" text-white flex flex-col">
            {
              secondPart.map(val=>{
                return(
                  <Link key={val.id} to={val.link}>{val.name}</Link>
                )
              })
            }
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center py-3 ">
          {images.map((val) => {
            return (
              <>
                <a href={val.link} key={val.id}>
                  {" "}
                  <img className="mx-2" src={val.image} alt="" />
                </a>
              </>
            );
          })}
        </div>
        <p className=" text-center text-white text-sm py-1">
          Copyright ©️ 2021 YIF Education
        </p>
      </footer>
    </>
  );
};

export default Footer2;
