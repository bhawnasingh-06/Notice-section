import React from "react";
import SelectInput from "../../../Components/SelectInput";
import { schoolClasses } from "../../../dummyData";
import Button from "../../../YIEUI/Button";
import DocumentTable from "./DocumentTable";

const AdminAcademicDocument = () => {
  const cols = [
    { id: 1, data: "Academic Document" },
    { id: 2, data: "Link" },
  ];

  const data = [
    { id: 1, doc: "Class Report 1", link: "#" },
    { id: 2, doc: "Assessment 2", link: "#" },
    { id: 3, doc: "Performance Report", link: "#" },
  ];
  return (
    <div className="w-3/4 mx-auto">
      <div className="w-1/4">
        <SelectInput values={schoolClasses} />
        <Button variant="filter" classes="my-4">
          Generate List
        </Button>
      </div>
      <DocumentTable cols={cols} rows={data} />
    </div>
  );
};

export default AdminAcademicDocument;
