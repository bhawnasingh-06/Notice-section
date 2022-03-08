import React from "react";
import { Link } from "react-router-dom";
import { studentApi } from "../../../Api/StudentApi";
const StudentAssessment = () => {
  return (
    <div className="border border-black  block my-2 mx-auto ">
      <div className="my-2">

        <div className="flex flex-col mx-5">
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
                        Topic
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700  dark:text-gray-400"
                      >
                        Due Date
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700  dark:text-gray-400"
                      >
                        Assesment Page
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentApi.map((val) => {
                      return (
                        <>
                          <tr key={val.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {val.subject}
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

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
          <Link className=' my-3 py-2.5 px-5 w-[95%] mb-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 block mx-auto text-center' to="/studentDashboard/studentCompletedAssessment">View Completed Assesments</Link>
      </div>
    </div>
  );
};

export default StudentAssessment;
