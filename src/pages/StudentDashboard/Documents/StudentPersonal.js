import React from "react";
import DocumentTable from "../../AdminDashboard/Documents/DocumentTable";

const StudentPersonal = () => {
  const cols = [
    { id: 1, data: "Academic Document" },
    { id: 2, data: "Link" },
  ];

  const data = [
    { id: 1, doc: "Parent Information", link: "#" },
    { id: 2, doc: "Aadhar Card", link: "#" },
    { id: 3, doc: "Birth Certificate", link: "#" },
  ];
  return (
    <div className="w-3/4 mx-auto">
      <DocumentTable rows={data} cols={cols} />
    </div>
  );
};

export default StudentPersonal;
