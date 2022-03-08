import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { classesList, fileTypes, subjects } from "../../../Components/dummyData";
import Filter from "../../../Components/Filter";

export default function AdminCreateAssessments() {
  const navigate = useNavigate()
  const [subjectSelect, setSubjectSelect] = useState("");
  const [fileTypeSelect, setFileTypeSelect] = useState("");
  const [classSelect, setClassSelect] = useState("");
  return (
    <div className='flex flex-row h-screen'>
      <div className='flex flex-col flex-grow p-4 space-y-4'>
        <div className='flex-grow w-full bg-white rounded p-4 space-y-4'>
          <div className='flex space-x-4'>
            <Filter
              title='Subject'
              options={subjects}
              selected={subjectSelect}
              handleSelected={setSubjectSelect}
              label='Select your subject'
            />
            <Filter
              title='Class'
              options={classesList}
              selected={classSelect}
              handleSelected={setClassSelect}
              label='Select your class'
            />
          </div>
          <div className='flex space-x-4'>
            <div>
              <label
                htmlFor='date'
                className='mb-2 text-sm font-medium text-gray-900 '>
                Date of publishing
              </label>
              <input
                type='date'
                id='date'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
            </div>
            <Filter
              title='Filetype'
              options={fileTypes}
              selected={fileTypeSelect}
              handleSelected={setFileTypeSelect}
              label='Select file type'
            />
          </div>
          <div>
            <label
              className='block  mb-2 text-sm font-medium text-gray-900 '
              htmlFor='attachFile'>
              Attach File
            </label>
            <input
              className=' w-64 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
              aria-describedby='Attach File'
              id='attachFile'
              type='file'
            />
            <div
              className='mt-1 text-sm text-gray-600 dark:text-gray-600'
              id='attachFile'>
              File type must match with the above given filetype.
            </div>
          </div>
          <div>
            <input
              type='checkbox'
              id='notify-class'
              name='notify-class'
              value='notify'
            />

            <label for='notify-class'>
              <span className='ml-3 text-sm font-medium text-gray-900 '>
                Notify Class
              </span>
            </label>
          </div>
          <button
            type='button'
            className='text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700'>
            Submit Assessment
          </button>
         
            <button onClick={() => navigate('/adminDashboard/adminAssessment')} className='bg-yellow-500 hover:bg-yellow-400 transition-colors rounded-[8px] px-[15px] py-[4px] text-white focus:ring-2 ring-yellow-500 ml-8'>
              Go back to Due Assessments
            </button>
         
        </div>
      </div>
    </div>
  );
}
