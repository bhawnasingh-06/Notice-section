import React from "react";
import { Link } from "react-router-dom";
import TeacherMenu from "./TeacherMenu";

const TeacherMainEveluation = () => {
  return (
    <div className="border border-black w-[85%] block my-2 mx-auto lg:w-[62%] ">
      <div className="my-2">
        <h1 className="text-center font-bold mb-3 text-xl ">
          Teacher Dashboard
        </h1>

          
            <TeacherMenu/>
         <div>
             {/* <AttendenceEveluation/> */}
           
         </div>
      </div>
    </div>
  );
};

export default TeacherMainEveluation;
