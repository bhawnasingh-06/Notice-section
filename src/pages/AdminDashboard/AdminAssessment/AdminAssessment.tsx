import React from "react";
import { Link, Outlet } from "react-router-dom";
const AdminAssessment = () => {
  return (
    <div className="w-[80vw] flex flex-col">
      <div className="student_teacher_nav self-center">
        <Link
          to="/adminDashboard/adminAssessment/studentAssessment"
          className="px-20 py-0.5 border rounded-lg focus:bg-blue-600 focus:text-white hover:bg-blue-400"
        >
          Students
        </Link>
        <Link
          to="/adminDashboard/adminAssessment/teacherAssessment"
          className="px-20 py-0.5 border rounded-lg focus:bg-blue-600 focus:text-white hover:bg-blue-400"
        >
          Teacher
        </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminAssessment;
