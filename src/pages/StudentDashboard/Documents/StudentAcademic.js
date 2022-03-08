import React from "react";
import DocumentTable from "../../AdminDashboard/Documents/DocumentTable";

const StudentAcademic = () => {
  const cols = [
    { id: 1, data: "Academic Document" },
    { id: 2, data: "Link" },
  ];

  const data = [
    { id: 1, doc: "Class Report 1", link: "#" },
    { id: 2, doc: "Class Report 2", link: "#" },
    { id: 3, doc: "Performance Report", link: "#" },
  ];
  return (
    <div className="w-3/4 mx-auto">
      <DocumentTable rows={data} cols={cols} />
    </div>
  );
};

export default StudentAcademic;
