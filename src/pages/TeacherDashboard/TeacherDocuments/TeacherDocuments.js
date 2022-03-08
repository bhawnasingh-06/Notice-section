import React from "react";
import { Outlet } from "react-router-dom";
import DocumentNavigation from "./DocumentNavigation";

const TeacherDocuments = () => {
  return (
    <div>
      <DocumentNavigation />
      <Outlet />
    </div>
  );
};

export default TeacherDocuments;
