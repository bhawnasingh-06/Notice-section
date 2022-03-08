import React from "react";
import { Outlet } from "react-router-dom";
import DocumentNavigation from "./DocumentNavigation";

const StudentDocuments = () => {
  return (
    <div>
      <h2 className="text-4xl text-center mt-5">Student Dashboard</h2>
      <DocumentNavigation />
      <Outlet />
    </div>
  );
};

export default StudentDocuments;
