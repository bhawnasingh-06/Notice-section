import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { dueAssessments } from "../../../Components/dummyData";
const AdminStudentAssessment = () => {
  const navigate = useNavigate();
 
  
  const dueAssessmentBody = dueAssessments.map((assessment) => {
    return (
      <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 '>
        <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
          {assessment.subject}
        </td>
        <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
          {assessment.class}
          {assessment.section}
        </td>
        <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
          {assessment.teacher}
        </td>
        <td className='group py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
          {assessment.dueDate}
        </td>
        <td className='group py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
          {assessment.details}
        </td>
      </tr>
    );
  });

  return (
    <div className='flex flex-col justify-between h-[80vh]'>
      <p>Due Assessments</p>
      <div className='selection_filter flex flex-col '>
        <select
          name='class_select'
          id='class_select'
          className='max-w-[130px] m-3'>
          <option value='0' disabled selected hidden>
            Select Class
          </option>
          <option value='10'>10</option>

          <option value='9'>9</option>
        </select>
        <select
          name='class_select'
          id='section_select'
          className='max-w-[130px] m-3'>
          <option value='0' disabled selected hidden>
            Select Section
          </option>
          <option value='A'>A</option>
          <option value='B'>B</option>
        </select>
      </div>
      <button className='max-w-[250px] bg-yellow-500 hover:bg-yellow-400 transition-colors rounded-[8px] px-[15px] py-[4px] text-white focus:ring-2 ring-yellow-500 ml-8 dark:bg-gray-700 '>
        Generate Assessment Report
      </button>

      <p className='underline'>Assessments Due Report</p>

      {/* table start =============================== */}
      <div className='flex flex-col '>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block py-2 min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-y-scroll max-h-48 shadow-md sm:rounded-lg'>
              <table className='min-w-full '>
                <thead className='bg-gray-50 dark:bg-gray-700'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                      Subject
                    </th>
                    <th
                      scope='col'
                      className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                      Class/Section
                    </th>
                    <th
                      scope='col'
                      className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                      Teacher
                    </th>
                    <th
                      scope='col'
                      className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                      Due Date
                    </th>
                    <th
                      scope='col'
                      className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                      Assessment
                    </th>
                  </tr>
                </thead>
                <tbody className='tbody'>{dueAssessmentBody}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* table end===================================== */}
      <div className='flex space-x-4 mt-6'>
        <Link to='/adminDashboard/adminAssessment/completedAssessment'>
          <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800'>
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
              View Completed Assessments
            </span>
          </button>
        </Link>
        <Link
          to='/adminDashboard/adminAssessment/createAssessment'
          className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800'>
          <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
            Create Assessment
          </span>
        </Link>

        <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800'>
          <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
            Notify Assessment
          </span>
        </button>
      </div>
    </div>
  );
};

export default AdminStudentAssessment;
