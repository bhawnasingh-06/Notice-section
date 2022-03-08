import React from "react";
import { Link } from "react-router-dom";
import StudentAssesReportApi from "../../../StudentApi/StudentAssesReportApi";
const StudentAssesReport = () => {
   
  return (
    <div className="border border-black w-[85%] block my-2 mx-auto lg:w-[62%] ">
      <div className="my-2">
        <h1 className="text-center font-bold mb-3 text-xl ">
          Student Dashborad
        </h1>

        <div className="flex flex-col mx-5">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow-md sm:rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Chapter
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Assesments
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Videos Watched
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Quiz Aggregate
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Assesment Report
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {StudentAssesReportApi.map((val) => {
                      return (
                        <>
                          <tr key={val.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white underline">
                            <Link    to={`/student/chapter/${val.chapter}`}>{val.chapter}</Link>
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                  className="bg-gray-600 h-2.5 rounded-full"
                                  style={{ width: val.assesmentWidth}}
                                ></div>
                              </div>
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 ">
                             {val.videos}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 ">
                             {val.quizAggregate}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 underline">
                              <Link className=" text-blue-400"   to={`/student/chapter/${val.chapter}`}>{val.assesmentReport}</Link>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20 mx-5">
         <Link className="py-2.5 px-5  text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 float-right " to='/student'>Back to Report Summary</Link>
         </div>
      </div>
    </div>
  );
};

export default StudentAssesReport;
