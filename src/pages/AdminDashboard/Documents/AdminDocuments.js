import React from "react";
import { Outlet } from "react-router-dom";
import DocumentNavigation from "./DocumentNavigation";

const AdminDocuments = () => {
  return (
    <div>
      <h2 className="text-4xl text-center mt-5">School Admin Dashboard</h2>
      <DocumentNavigation />
      <Outlet />
    </div>
  );
};

export default AdminDocuments;
