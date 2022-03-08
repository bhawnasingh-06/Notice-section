import React from "react";
import { Link } from "react-router-dom";
const TeacherButton = () => {
  return (
    <>
      <Link
        className=" my-3  py-2.5  px-7 mb-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 block mx-auto text-center"
        to="/teacherDashboard/teacherAssessment/teacherCompleteAssessment"
      >
        View Completed Assesments
      </Link>

      <Link
        className=" my-3 py-2.5 px-5  mb-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 block mx-auto text-center"
        to="/teacherDashboard/teacherAssessment/teacherCreateAssessment"
      >
        Create Assesments
      </Link>

      <Link
        className=" my-3 py-2.5 px-5  mb-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 block mx-auto text-center"
        to="/teacher"
      >
        Notify Assesments
      </Link>
    </>
  );
};

export default TeacherButton;
