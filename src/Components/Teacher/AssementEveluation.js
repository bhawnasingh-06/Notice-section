import React from "react";
import TeacherMenu from "./TeacherMenu";
import TeacherAssesmentEveluationApi from "../../TeacherApi/TeacherAssesmentEveluationApi";
import { Link} from "react-router-dom";
const AssementEveluation = () => {
  return (
    <div className="border border-black w-[85%] block my-2 mx-auto lg:w-[62%] ">
      <div className="my-2">
        <h1 className="text-center font-bold mb-3 text-xl ">
          Teacher Dashboard
        </h1>
        <TeacherMenu Teacher={TeacherAssesmentEveluationApi} />

        <h1 className=" underline mx-5 my-2">Science Grade10</h1>

        <div className="flex flex-col mx-5 my-5">
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
                        Name
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Assesment
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                       Date
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Time Taken
                      </th>

                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Score
                      </th>

                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Report
                      </th>
                     
                    </tr>
                  </thead>
                  <tbody>
                  {
                    TeacherAssesmentEveluationApi.map(val=>{
                        return(
                            <>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white underline">
                        <Link to={`/teacher/mainEveluation/assesment/${val.name}`}>{val.name}</Link>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                       {val.Assesment}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                       {val.Date}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                       {val.time}
                      </td>

                      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        {val.score}
                      </td>

                      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 underline">
                      <Link className=" text-blue-400" to={`/teacher/mainEveluation/overall/${val.name}`}>{val.report}</Link>
                      </td>
                     
                    </tr>
                            </>
                        )
                    })
                  } 
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 mx-5">
          <Link className=" py-2 my-5 px-4 bg-slate-400 rounded-md capitalize hover:bg-slate-600 text-white" to='/teacher/classEveluation'>Go back</Link>
        </div>
      </div>
    </div>
  );
};

export default AssementEveluation;
