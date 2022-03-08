import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { completedAssessmentsdata } from "../../../Components/dummyData";
const AdminCompletedAssessmentsHome = () => {
  const navigate = useNavigate();
  const bodyTable = completedAssessmentsdata.map((data) => {
    return (
      <>
        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
          <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
            {data.subject}
          </td>
          <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
            {data.topic}
          </td>
          <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
            {data.date}
          </td>
          <td className='group py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
            <Link
              to='/SchoolAdmin/CompletedAssessments'
              className='underline text-blue-500'>
              page
            </Link>
          </td>
        </tr>
      </>
    );
  });

  return (
    <div className='min-w-[75vw]'>
      <h1 className='text-2xl'> Completed Assessments </h1>
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
      <div className='flex flex-col '>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block py-2 min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-hidden shadow-md sm:rounded-lg'>
              <table className='min-w-full'>
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
                      Topic
                    </th>
                    <th
                      scope='col'
                      className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                      Date of Assessment
                    </th>
                    <th
                      scope='col'
                      className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                      Class Report
                    </th>
                  </tr>
                </thead>
                <tbody>{bodyTable}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
     
        <button onClick={() => navigate('/adminDashboard/adminAssessment')} className='bg-yellow-500 hover:bg-yellow-400 transition-colors rounded-[8px] px-[15px] py-[4px] text-white focus:ring-2 ring-yellow-500 ml-8'>
          Go back to Due Assessments
        </button>
    </div>
  );
  s;
};

export default AdminCompletedAssessmentsHome;
