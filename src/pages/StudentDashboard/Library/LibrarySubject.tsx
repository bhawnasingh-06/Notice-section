import React from "react";
import { Link, useLocation } from "react-router-dom";
const LibrarySubject = () => {
  const location = useLocation();

  const { name, topics }: any = location.state;

  const topicTable = topics.map((topic: any) => {
    return (
      <>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {topic.name}
          </td>
          <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 flex items-center ">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${topic.aggregate}%` }}
              ></div>
            </div>
          </td>
          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <span className="mx-2 underline text-blue-400">{topic.report}</span>
          </td>
          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <span className="mx-2">{topic.aggregate}%</span>
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
      <div className="m-4">
        <h1 className="text-center font-bold text-3xl">Student Dashboard</h1>
        <div className="flex flex-col max-w-[95vw]">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow-md sm:rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        {name} Chapter
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Completion
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Report
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Aggregate
                      </th>
                    </tr>
                  </thead>
                  <tbody>{topicTable}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* generate quiz performance report section */}

        <div className="mt-10">
          <label>Select Data</label>
          <input
            className="border-2 p-1 ml-2 border-black"
            type="date"
            name="date"
            id="dateField"
          />

          <label className="mx-3" htmlFor="cars">
            Select QUIZ
          </label>
          <select
            className="bg-white border-2 border-black py-2 px-3"
            name="cars"
            id="cars"
          >
            <option value="volvo">Quiz-1</option>
            <option value="saab">Quiz-2</option>
            <option value="opel">Quiz-3</option>
            <option value="audi">Quiz-4</option>
          </select>

          <button className=" mb-2 mt-4 block bg-blue-500 text-white py-1 px-7 rounded-lg hover:shadow-lg">
            Generate Quiz Performance Report
          </button>
        </div>
      </div>
      <Link
        to="/studentLibrary"
        className="bg-blue-500 hover:bg-red-400 transition-colors rounded-[8px] px-[15px] py-[4px] text-white focus:ring-2 ring-blue-500 m-5 "
      >
        Back To Content Page
      </Link>
    </>
  );
};

export default LibrarySubject;
