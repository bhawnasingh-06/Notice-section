import React from "react";
import firstApi from "../../StudentApi/firstApi";
import SecondApi from "../../StudentApi/SecondApi";
import { Link } from "react-router-dom";
const Student = () => {
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
                        Subject
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Overall Aggreate
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Report Generation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {firstApi.map((val) => {
                      return (
                        <>
                          <tr
                            key={val.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          >
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white underline">
                              <Link to="/student/assesReport">
                                {val.subject}
                              </Link>
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              <div className=" flex">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                  <div
                                    className="bg-gray-600 h-2.5 rounded-full"
                                    style={{ width: val.aggregate.width }}
                                  >
                                    {" "}
                                  </div>
                                </div>
                                <p className=" relative top-[-4px] mx-2">
                                  {val.aggregate.text}
                                </p>
                              </div>
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 underline">
                              <Link
                                className=" text-blue-400"
                                exact
                                to="/student/assesReport"
                              >
                                {val.report}
                              </Link>
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

        {/* ========return the aggregate bar========== */}
        {SecondApi.map((val) => {
          return (
            <>
              <div key={val.id} className=" flex my-5 mx-5">
                <h1 className=" font-bold relative top-[-4px]">
                 {val.name}
                </h1>
                <div className="w-[30%] bg-gray-200 rounded-full h-5 mx-1">
                  <div
                    className="bg-gray-600 h-5 rounded-full mx-1"
                    style={{ width: val.width }}
                  ></div>
                </div>

                <small className="mx-1">{val.text}</small>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Student;
