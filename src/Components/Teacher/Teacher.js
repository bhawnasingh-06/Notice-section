import React from "react";
import { Link } from "react-router-dom";
const Teacher = () => {
  return (
    <div className="border border-black w-[85%] block my-2 mx-auto lg:w-[62%] ">
      <div className="my-2">
        <h1 className="text-center font-bold mb-3 text-xl ">
          Teacher Dashboard
        </h1>

          <div className="mx-5 py-3">
             <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">My Report</button>
          </div>

           <div className="class-eveluation mx-5 py-3">
              <Link to="/teacher/classEveluation" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Class Evelautions</Link>
           </div>
      </div>
    </div>
  );
};

export default Teacher;
