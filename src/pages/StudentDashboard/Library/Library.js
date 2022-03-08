import React, { useState } from "react";
import { Link } from "react-router-dom";
const Library = () => {
  // data----------------------------------------------------->
  const [courses, setCourses] = useState([
    {
      id: 1,
      courseName: "Material Completed",
      completionPercent: 50,
      topics: [
        { name: "topic 1", aggregate: 50, report: "report" },
        { name: "topic 2", aggregate: 30, report: "report" },
        { name: "topic 3", aggregate: 79, report: "report" },
        { name: "topic 4", aggregate: 45, report: "report" },
      ],
    },
    {
      id: 1,
      courseName: "Assessment Aggregate",
      completionPercent: 70,
      topics: [
        { name: "topic 1", aggregate: 50, report: "report" },
        { name: "topic 2", aggregate: 20, report: "report" },
        { name: "topic 3", aggregate: 40, report: "report" },
        { name: "topic 4", aggregate: 60, report: "report" },
      ],
    },
    {
      id: 1,
      courseName: "Science",
      completionPercent: 58,
      topics: [
        { name: "topic 1", aggregate: 90, report: "report" },
        { name: "topic 2", aggregate: 45, report: "report" },
        { name: "topic 3", aggregate: 55, report: "report" },
        { name: "topic 4", aggregate: 51, report: "report" },
      ],
    },
    {
      id: 1,
      courseName: "Physics",
      completionPercent: 80,
      topics: [
        { name: "topic 1", aggregate: 48, report: "report" },
        { name: "topic 2", aggregate: 88, report: "report" },
        { name: "topic 3", aggregate: 45, report: "report" },
        { name: "topic 4", aggregate: 32, report: "report" },
      ],
    },
    {
      id: 1,
      courseName: "English",
      completionPercent: 40,
      topics: [
        { name: "topic 1", aggregate: 44, report: "report" },
        { name: "topic 2", aggregate: 67, report: "report" },
        { name: "topic 3", aggregate: 44, report: "report" },
        { name: "topic 4", aggregate: 89, report: "report" },
      ],
    },
  ]);
  // dataEnd----------------------------------------------------->

  const libraryTable = courses.map((course) => {
    return (
      <>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <Link
              to="/librarySubject"
              state={{ name: course.courseName, topics: course.topics }}
            >
              {course.courseName}
            </Link>
          </td>
          <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 flex items-center ">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${course.completionPercent}%` }}
              ></div>
            </div>
            <span className="mx-2">{course.completionPercent}%</span>
          </td>
        </tr>
      </>
    );
  });

  return (
    <div className="m-4">
      
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
                      Course
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Completion
                    </th>
                  </tr>
                </thead>
                <tbody>{libraryTable}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
