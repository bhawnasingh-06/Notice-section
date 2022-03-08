import React from "react";
import DocumentTable from "../../AdminDashboard/Documents/DocumentTable";

const TeacherAdminstration = () => {
  const cols = [
    { id: 1, data: "Academic Document" },
    { id: 2, data: "Link" },
  ];

  const data = [
    { id: 1, doc: "Employment Letter", link: "#" },
    { id: 2, doc: "Tax Forms", link: "#" },
    { id: 3, doc: "Joining Letter", link: "#" },
  ];
  return (
    <div className="w-3/4 mx-auto">
      <DocumentTable rows={data} cols={cols} />
    </div>
  );
};

export default TeacherAdminstration;
