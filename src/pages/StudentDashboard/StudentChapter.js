import React from "react";
import StudentAssesReportApi from "../../StudentApi/StudentAssesReportApi";
import { useParams, Link } from "react-router-dom";
const StudentChapter = () => {
  const { chapter } = useParams();

  return (
    <div className="border border-black w-[85%] block my-2 mx-auto lg:w-[62%] ">
      <div className="my-2">
        <h1 className="text-center font-bold mb-3 text-xl ">
          Student Dashborad
        </h1>

        {StudentAssesReportApi.filter((card) => card.chapter === chapter).map(
          (card) => {
            return <h1 className=" mx-5 font-bold text-xl">{card.chapter}</h1>;
          }
        )}
        <div className="flex flex-col items-center justify-cente md:flex-row md:items-start lg:flex-row xl:flex-row lg:items-start xl:items-start my-2">
          <div class="flex flex-col mx-5">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-md sm:rounded-lg">
                  <table class="min-w-full">
                    <thead class="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Attribute
                        </th>
                        <th
                          scope="col"
                          class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Time taken
                        </th>
                        <th
                          scope="col"
                          class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Score
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {StudentAssesReportApi.filter(
                        (card) => card.chapter === chapter
                      ).map((card) => {
                        return (
                          <>
                            <tr
                              key={card.id}
                              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                              <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {card.chap.map((val) => {
                                  return (
                                    <h1
                                      key={val.id}
                                      className="flex flex-col my-2"
                                    >
                                      {val.attribute}
                                    </h1>
                                  );
                                })}
                              </td>
                              <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {card.chap.map((val) => {
                                  return (
                                    <h1
                                      key={val.id}
                                      className="flex flex-col my-2"
                                    >
                                      {val.time}
                                    </h1>
                                  );
                                })}
                              </td>
                              <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {card.chap.map((val) => {
                                  return (
                                    <h1
                                      key={val.id}
                                      className="flex flex-col my-2"
                                    >
                                      {val.score}
                                    </h1>
                                  );
                                })}
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

          {/* report section  */}

          <div className="report border-2 border-black w-[90%] md:w-[80%] mx-5 py-2">
            <h1 className="mx-5">Report</h1>
            <div className="my-2 mx-5">
              <select
                className="border-2 border-gray-400 rounded-md py-1 px-4 outline-none flex flex-col "
                name=""
                id=""
              >
                <option>Chose Quiz/Assesment</option>
                {StudentAssesReportApi.filter(
                  (card) => card.chapter === chapter
                ).map((card) => {
                  return card.chap.map((val) => {
                    return <option>{val.attribute}</option>;
                  });
                })}
              </select>
            </div>

            <div className="report button mx-5 mt-3 py-5">
              <Link
                className="py-2.5 px-5  text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                to="/student/assesReport"
              >
                Go to Report
              </Link>
            </div>

            <div className="mx-5 py-5">
              <button className="py-2.5 px-5  text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Get Aggregate Report
              </button>
            </div>

            <div className="py-20 mx-5">
              <Link
                className="py-2.5 px-5  text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 float-right "
                to="/student"
              >
                Back to Report Summary
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentChapter;
