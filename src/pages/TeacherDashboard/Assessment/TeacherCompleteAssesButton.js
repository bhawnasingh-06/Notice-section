import React from 'react'
import { Link } from 'react-router-dom'
const TeacherCompleteAssesButton = () => {
  return (
   <>
        <Link
        className=" my-3  py-2.5  px-5 lg:px-20 mb-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 block mx-auto text-center"
        to="/teacherDashboard/teacherAssessment"
      >
      Go Back to Due Assessment
      </Link>

      <Link
        className=" my-3 py-2.5 px-5 lg:px-20  mb-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 block mx-auto text-center"
        to="/teacher/complete"
      >
       Request Editing Mark From Admin
      </Link>
   </>

  )
}

export default TeacherCompleteAssesButton