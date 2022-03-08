import React from "react";
import { Link } from "react-router-dom";

const AggregateCompletion = ({ classes, rows, type, cols }) => {
  return (
    <div className={classes}>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow-md sm:rounded-lg">
              <table class="min-w-full">
                <thead class="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    {cols.map((col) => (
                      <th
                        key={col.name}
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        {col.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {type === "classStatus" &&
                    rows.map((row) => (
                      <tr
                        key={row.id}
                        class="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600"
                      >
                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {row.type}
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          {row.completion}
                        </td>

                        <td class="py-4 px-6 text-sm font-medium text-left whitespace-nowrap">
                          <Link
                            to={row.classReportLink}
                            class="text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Class Report
                          </Link>
                        </td>
                        <td class="py-4 px-6 text-sm font-medium text-left whitespace-nowrap">
                          <Link
                            to={row.studentsLink}
                            class="text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Student List
                          </Link>
                        </td>
                      </tr>
                    ))}
                  {type === "overall" &&
                    rows.map((row) => (
                      <tr
                        key={row.id}
                        class="border-b odd:bg-white even:bg-blue-400 
                          even:text-white
                          odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600"
                      >
                        <td class="py-4 px-6 text-sm font-medium  whitespace-nowrap dark:text-white">
                          {row.class}
                        </td>
                        <td class="py-4 px-6 text-sm whitespace-nowrap dark:text-gray-400">
                          {row.completion}
                        </td>
                      </tr>
                    ))}
                  {type === "aggregate" &&
                    rows.map((row) => (
                      <tr
                        key={row.id}
                        class="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600"
                      >
                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {row.filter}
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          {row.subject}
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          {row.completion}
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          {row.aggCompletion}
                        </td>
                      </tr>
                    ))}
                  {type === "studentOverallStatus" &&
                    rows.map((row) => (
                      <tr
                        key={row.id}
                        class="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600"
                      >
                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {row.subjects}
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          {row.teacher}
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          {row.overall}
                        </td>
                      </tr>
                    ))}
                  {type === "teacherContentStatus" &&
                    rows.map((row) => (
                      <tr
                        key={row.id}
                        class="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600"
                      >
                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {row.content}
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          {row.uploadDate}
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          {row.completion}
                        </td>
                        <td class="py-4 px-6 text-sm font-medium text-left whitespace-nowrap">
                          <Link
                            to={row.completionReport}
                            class="text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Link
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AggregateCompletion;
