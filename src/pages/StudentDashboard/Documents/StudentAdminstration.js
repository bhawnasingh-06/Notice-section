import React from "react";
import DocumentTable from "../../AdminDashboard/Documents/DocumentTable";

const StudentAdminstration = () => {
  const cols = [
    { id: 1, data: "Academic Document" },
    { id: 2, data: "Link" },
  ];

  const data = [
    { id: 1, doc: "Fee Receipt", link: "#" },
    { id: 2, doc: "Admit card", link: "#" },
    { id: 3, doc: "School Admission Certificate", link: "#" },
  ];
  return (
    <div className="w-3/4 mx-auto">
      <DocumentTable rows={data} cols={cols} />
    </div>
  );
};

export default StudentAdminstration;
