import React from "react";
import Button from "../../../YIEUI/Button";
import DocumentTable from "./DocumentTable";

const AdminPersonalDocument = () => {
  const cols = [
    { id: 1, data: "Document" },
    { id: 2, data: "Link" },
  ];

  const data = [
    { id: 1, doc: "Biometric Updation", link: "#" },
    { id: 2, doc: "Aadhar Card", link: "#" },
    { id: 3, doc: "Pan Card", link: "#" },
  ];
  return (
    <div className="w-3/4 mx-auto mt-5">
      <div className="w-1/2">
        <input
          type="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Security Password"
          required
        />
        <Button classes="mt-5 mb-1" variant="filter">
          Submit And Generate
        </Button>
      </div>

      <DocumentTable cols={cols} rows={data} />
    </div>
  );
};

export default AdminPersonalDocument;
