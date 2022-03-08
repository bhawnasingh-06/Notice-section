import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { teacherCompleteAssesApi } from '../../../Api/TeacherCompleteAssesApi';
import TeacherCompleteAssesButton from './TeacherCompleteAssesButton';
const TeacherCompleteAssesment = () => {
    const [data, setData] = useState(teacherCompleteAssesApi);
    return (
      <div className="border border-black w-[85%] block my-2 mx-auto lg:w-[62%] ">
        <div className="my-4">
          <h1 className="text-center font-bold mb-3 text-lg ">
            Teacher Dashborad{" "}
          </h1>
  
          <div className=" flex items-center justify-between mb-2">
            <h1 className="mx-5 font-semibold text-lg">Completed Assesment</h1>
          </div>
  
          {/* =====table===== */}
          <div className="flex flex-col mx-5 relative">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700  dark:text-gray-400"
                        >
                          Subject
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700  dark:text-gray-400"
                        >
                          Class
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700  dark:text-gray-400"
                        >
                          Topic
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700  dark:text-gray-400"
                        >
                          Date of Assesment
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700  dark:text-gray-400"
                        >
                          Class Report
                        </th>
                      </tr>
                    </thead>
                    <tbody className=' relative'>
                      {data.map((val) => {
                        return (
                          <>
                            <tr key={val.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {val.subject}
                              </td>
                              <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                               {val.class}
                              </td>
                              <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                               {val.topic}
                              </td>
                              <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {val.due}
                              </td>
                              <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                <a
                                  style={{ textDecoration: "underline" }}
                                  className=" text-blue-500"
                                  href=""
                                >
                                  {val.assesment}
                               
                                
                                </a>
                              </td>
                              
                            </tr>
                          </>
                        );
                      })}
                      <Link to="/teacher/completeDetail" className='mx-2 bg-yellow-500 rounded-md px-4 py-1 absolute top-2 left-[86%]'> <i class="fal fa-angle-left"></i> Select</Link>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
  
          {/* ====button link====== */}
          <div className="flex items-center justify-center flex-col md:flex-row lg:flex-row xl:flex-row">
           <TeacherCompleteAssesButton/>
          </div>
        </div>
      </div>
    );
}

export default TeacherCompleteAssesment