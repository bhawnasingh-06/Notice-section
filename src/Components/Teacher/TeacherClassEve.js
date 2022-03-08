import React from "react";
import selectClassApi from "../../TeacherApi/selectClassApi";
import selectSubjectApi from "../../TeacherApi/selectSubjectApi";
import TeacherAggregateApi from "../../TeacherApi/TeacherAggregateApi";
import {Link} from 'react-router-dom'
const TeacherClassEve = () => {
  return (
    <div className="border border-black w-[85%] block my-2 mx-auto lg:w-[62%] ">
      <div className="my-2">
        <h1 className="text-center font-bold mb-3 text-xl ">
          Teacher Dashboard
        </h1>

        <form className="mx-5 flex flex-col w-1/3" action="">
          <select
            className="py-2 px-5 my-2 border-2 border-gray-300 rounded-md outline-none "
            name=""
            id=""
          >
            <option>Select Class</option>
            {selectClassApi.map((val) => {
              return <option key={val.id}>{val.class}</option>;
            })}
          </select>

          <select
            className="py-2 px-5 border-2 border-gray-300 rounded-md outline-none my-2 "
            name=""
            id=""
          >
            <option>Select Subject</option>
            {selectSubjectApi.map((val) => {
              return <option key={val.id}>{val.subject}</option>;
            })}
          </select>
        </form>

        <div className="w-[85%] lg:w-[65%] mx-5 my-2 border-2 border-black py-2 ">
          <h1 className="mx-5 font-bold text-lg my-2">Class X Y Z</h1>
          {TeacherAggregateApi.map((val) => {
            return (
              <>
                <div className=" flex mx-5">
                  <h1 className=" font-bold relative top-[-4px] mx-2 my-2">
                   {val.aggregate}
                  </h1>

                  <div class="w-[40%] bg-gray-200 rounded-full h-5 dark:bg-gray-700 mx-2 my-2">
                    <div
                      class="bg-blue-600 h-5 rounded-full"
                      style={{ width: val.width}}
                    ></div>
                  </div>

                  <h1 className="mx-2 my-2 relative top-[-4px]">{val.title}</h1>
                </div>
              </>
            );
          })}

        
        </div>

        <div className="w-[85%] mx-5 my-5 py-2">
              <Link className=' w-[85%] py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' to='/teacher/mainEveluation'>Go to Evelaution</Link>
          </div>

      </div>
    </div>
  );
};

export default TeacherClassEve;
