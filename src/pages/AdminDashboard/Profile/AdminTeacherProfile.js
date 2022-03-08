import React, { useState } from "react";
import { myApi } from '../../../Api/MyApi';
import { subjects } from "../../../Api/Subjects";
const TeacherProfile = () => {
  const [data,setData] = useState(myApi);
  const [sub,setSub] = useState(subjects);
  return (
    <>
      <div class="flex flex-col">
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
                      Teacher
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                     Subjects
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                     Delegations
                    </th>
                  
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Asit
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Sumit
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Laptop
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      $2999
                    </td>
                  
                  </tr>

                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple Imac 27"
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      White
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Desktop Pc
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      $1999
                    </td>
                   
                  </tr>

                  <tr class="bg-white dark:bg-gray-800">
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple Magic Mouse 2
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      White
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Accessories
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      $99
                    </td>
                  
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
       <div className="my-3">
        <select className="py-2 px-4 border border-gray-400 rounded-md mx-2" name="" id="">
            <option value="">Search By Class</option>
            {
                data.map(val=>{
                    return (
                        <>
                            <option key={val.id} value="">{val.name}</option>
                        </>
                    )
                })
            }
        </select>

        <select  className="py-2 px-4 border border-gray-400 rounded-md mx-2" name="" id="">
            <option value="">Search By Subject</option>
           {
               sub.map(val=>{
                   return (
                       <>
                           <option key={val.id} value="">{val.name}</option>
                       </>
                   )
               })
           }
        </select>

        <input  className="py-2 px-4 border border-gray-400 rounded-md mx-2 outline-none"  type="button" name="" id="" value="Search"/>
        </div>
    </>
  );
};

export default TeacherProfile;
