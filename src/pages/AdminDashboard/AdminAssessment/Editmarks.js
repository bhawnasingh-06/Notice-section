import React from "react";
import { useNavigate } from "react-router-dom";

const Editmarks = () => {
  let navigate = useNavigate();
  return (
    <div className='edit_table_container relative'>
      <h1 className='text-2xl mx-5 my-2'>Completed Assessments</h1>
      <p className='mx-5'>Assessment XYZ, Teacher X, Class 10</p>
      <div className='border border-slate-900 mx-8 flex max-w-min p-1'>
        <div className='flex flex-col m-5'>
          <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block py-2 min-w-full sm:px-6 lg:px-8'>
              <div className='overflow-hidden shadow-md sm:rounded-lg'>
                <table className='min-w-full mx-5'>
                  <thead className='bg-gray-50 dark:bg-gray-700'>
                    <tr>
                      <th
                        scope='col'
                        className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                        Student
                      </th>
                      <th
                        scope='col'
                        className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                        Marks
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        A
                      </td>
                      <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                        40
                      </td>
                    </tr>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        B
                      </td>
                      <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                        40
                      </td>
                    </tr>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        C
                      </td>
                      <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                        40
                      </td>
                    </tr>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        D
                      </td>
                      <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                        40
                      </td>
                    </tr>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        E
                      </td>
                      <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                        40
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------table end--------------------- */}
        <div className='update_form flex flex-col'>
          <select
            className='border border-zinc-700 p-1 px-5 my-5'
            name='students'>
            <option value='' disabled selected>
              Select Student
            </option>
            <option value='a'>A</option>
            <option value='b'>B</option>
            <option value='c'>C</option>
            <option value='d'>D</option>
            <option value='e'>E</option>
          </select>

          <input
            className='enter_marks border border-zinc-700 m-5 min-w-max'
            type='text'
            placeholder='Enter Marks'
          />
          <button className='bg-blue-500 hover:bg-blue-400 transition-colors rounded-[8px] px-[15px] py-[4px] text-white focus:ring-2 ring-blue-500 m-5 '>
            Update Marks
          </button>
        </div>
      </div>
      <div className='button_container'>
        <button
          onClick={() => {
            navigate("/SchoolAdmin/CompletedAssessments");
          }}
          className='bg-yellow-500 hover:bg-yellow-400 transition-colors rounded-[8px] px-[15px] py-[4px] text-white focus:ring-2 ring-yellow-500 ml-8 mt-5'>
          Go back
        </button>
      </div>
    </div>
  );
};

export default Editmarks;
