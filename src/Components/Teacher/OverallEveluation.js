import React from "react";
import TeacherMenu from "./TeacherMenu";
import { useParams,Link } from "react-router-dom";
import TeacherAssesmentEveluationApi from "../../TeacherApi/TeacherAssesmentEveluationApi";
const OverallEveluation = () => {
  const { name } = useParams();
  return (
    <div className="border border-black w-[85%] block my-2 mx-auto lg:w-[62%] ">
      <div className="my-2">
        <h1 className="text-center font-bold mb-3 text-xl ">
          Teacher Dashboard
        </h1>
        <TeacherMenu />

        <div className="my-5">
          {TeacherAssesmentEveluationApi.filter(
            (card) => card.name === name
          ).map((card) => {
            return (
              <>
                <div key={card.id} className="flex mx-5 my-5 ">
                  <h1 className=" font-semibold">{card.name}</h1>
                  <h1 className="mx-2 font-semibold">{card.subject}</h1>
                  <h1 className="mx-2 font-semibold">{card.grade}</h1>
                  <h1 className="mx-2 font-semibold">{card.Teacher}</h1>
                </div>

                <div className="flex mx-5 my-5">
                  {card.agg.map((val) => {
                    return (
                      <>
                        <h1 key={val.id}>{val.monthly}</h1>

                        <div className="w-[25%] bg-gray-200 rounded-full h-5 dark:bg-gray-700 my-1 mx-2">
                          <div
                            className="bg-blue-600 h-5 rounded-full"
                            style={{ width: val.width }}
                          ></div>
                        </div>
                        <h1 className="mx-2">{val.title}</h1>
                      </>
                    );
                  })}
                </div>

                <div className="flex mx-5 my-5">
                  {card.assesmentComplition.map((val) => {
                    return (
                      <>
                        <h1 key={val.id}>{val.asses}</h1>

                        <div className="w-[25%] bg-gray-200 rounded-full h-5 dark:bg-gray-700 my-1 mx-2">
                          <div
                            className="bg-blue-600 h-5 rounded-full"
                            style={{ width: val.width }}
                          ></div>
                        </div>
                        <h1 className="mx-2">{val.title}</h1>
                      </>
                    );
                  })}
                </div>

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
                               Chapter
                              </th>
                              <th
                                scope="col"
                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                              >
                                Strength
                              </th>
                              <th
                                scope="col"
                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                              >
                               Error Frequency
                              </th>
                              <th
                                scope="col"
                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                              >
                                Hurdle Topics
                              </th>
                            
                            </tr>
                          </thead>
                          <tbody>
                          {
                            card.select.map(val=>{
                              return(
                                <>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {val.chapter}
                              </td>
                              <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              <div className="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700 my-1 mx-2">
                          <div
                            className="bg-blue-600 h-5 rounded-full"
                            style={{ width: val.strenth }}
                          ></div>
                        </div>
                              </td>
                              <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {val.Error}
                              </td>
                              <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                               {val.topics}
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
              </>
            );
          })}
          <div className=" mx-5 my-5">
          <Link to="/teacher/mainEveluation/assesment"  className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Student Subject Report</Link>
          </div>
        </div>
 
        <div className="py-20 mx-5">
         <Link to="/teacher/mainEveluation/assesment" className="py-2.5 px-5  text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 float-right " >Back</Link>
         </div>
       
      </div>
    </div>
  );
};

export default OverallEveluation;
