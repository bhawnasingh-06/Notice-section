import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const AdminCompletedAssessment = () => {
  let navigate = useNavigate();
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Amit",
      submission: "submitted",
      reports: "Reports",
      marks: "10/10",
    },
    {
      id: 2,
      name: "Ganesh",
      submission: "submitted",
      reports: "Reports",
      marks: "10/10",
    },
    {
      id: 3,
      name: "Rajesh",
      submission: "submitted",
      reports: "Reports",
      marks: "10/10",
    },
    {
      id: 4,
      name: "vasant",
      submission: "submitted",
      reports: "Reports",
      marks: "10/10",
    },
    {
      id: 5,
      name: "Mayur",
      submission: "submitted",
      reports: "Reports",
      marks: "10/10",
    },
  ]);

  const [marks, setMarks] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(marks);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMarks({ marks: e.target.value });
  };
  const bodyTable = students.map((student) => {
    return (
      <>
        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
          <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
            {student.name}
          </td>
          <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
            {student.submission}
          </td>
          <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
            {student.reports}
          </td>
          <td className='group py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
            {student.marks}
            <form
              onSubmit={handlesubmit}
              className='update_marks stuentupdate absolute opacity-0 group-hover:opacity-100  flex flex-row items-center justify-evenly text-sm bg-slate-100 z-10'
              id={student.id}>
              <input
                autoComplete='off'
                className='text-sm h-4 w-20 mt-1'
                plaeholder={student.marks}
                onChange={handleChange}
                name='marks'
              />

              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-400 transition-colors rounded-[8px] px-[15px] py-[4px] text-white focus:ring-2 ring-blue-500 m-2 '>
                update
              </button>
            </form>
          </td>
        </tr>
      </>
    );
  });

  return (
    <div className='completed_table_container min-w-[75vw]'>
      <h1 className='text-2xl mx-5 my-2'>Completed Assessments</h1>
      <p className='mx-5'>Assessment XYZ, Teacher X, Class 10</p>
      {/* table start============================================================= */}
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
                      Name
                    </th>
                    <th
                      scope='col'
                      className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                      Submission
                    </th>
                    <th
                      scope='col'
                      className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                      Details
                    </th>
                    <th
                      scope='col'
                      className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                      Marks
                    </th>
                  </tr>
                </thead>
                <tbody>{bodyTable}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================table end========================================================= */}
      <div className='button_container'>
        <Link to='/SchoolAdmin/SchoolAdminAssessment/StudentsAssessment'>
          <button className='bg-yellow-500 hover:bg-yellow-400 transition-colors rounded-[8px] px-[15px] py-[4px] text-white focus:ring-2 ring-yellow-500 ml-8'>
            Go back to Due Assessments
          </button>
        </Link>
        <button
          onClick={() => {
            navigate("/SchoolAdmin/EditMarks");
          }}
          className='bg-blue-500 hover:bg-blue-400 transition-colors rounded-[8px] px-[15px] py-[4px] text-white focus:ring-2 ring-blue-500 mx-8 my-5'>
          Edit Marks
        </button>
      </div>
    </div>
  );
};

export default AdminCompletedAssessment;
