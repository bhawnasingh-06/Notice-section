import React from "react";
import { useNavigate } from "react-router-dom";
import { studentSubjects } from "../../../dummyData";
import Button from "../../../YIEUI/Button";
import ShowCompletionData from "./ShowCompletionData";

const TeacherProfile = ({ teacherName }) => {
  const navigate = useNavigate();
  const cols = [
    { name: "Content" },
    {
      name: "Upload Date",
    },
    {
      name: "Completion",
    },
    {
      name: "Completion Report",
    },
  ];

  const rows = [
    {
      id: 1,
      content: "A",
      uploadDate: "10/9/21",
      completion: "60%",
      completionReport: "/",
    },
    {
      id: 2,
      content: "A",
      uploadDate: "10/9/21",
      completion: "60%",
      completionReport: "/",
    },
    {
      id: 3,
      content: "A",
      uploadDate: "10/9/21",
      completion: "60%",
      completionReport: "/",
    },
    {
      id: 4,
      content: "A",
      uploadDate: "10/9/21",
      completion: "60%",
      completionReport: "/",
    },
  ];
  return (
    <div className="p-5">
      {/* teacher profile */}
      <div className="border border-black p-3 rounded-md ">
        {/* teacher name */}
        <div className="grid grid-cols-6">
          <p>Teacher Name:</p>
          <p className="col-span-5 text-left"> {teacherName || "null"}</p>
        </div>
        {/* subjects that he/she teaches */}
        <div className="grid grid-cols-6">
          <p>Subjects Taken:</p>
          <p className="col-span-5">
            {studentSubjects.map((subject) => (
              <span className="mr-2">{subject},</span>
            ))}
          </p>
        </div>
        {/* on which classes he/she takes class */}
        <div className="grid grid-cols-6">
          <p>Class:</p>
          <p className="col-span-5">7</p>
        </div>
        <div className="grid grid-cols-6">
          <p>ID:</p>
          <p className="col-span-5">
            <span className="mr-2">987543</span>
          </p>
        </div>
      </div>

      {/* teacher status */}
      <ShowCompletionData cols={cols} rows={rows} type="teacherContentStatus" />

      <div className="flex mt-5">
        <Button
          onClick={() => navigate("/createContent")}
          classes="mr-1 "
          variant="secondary"
        >
          Create Content
        </Button>
        <Button variant="filter">Delete Content</Button>
      </div>
    </div>
  );
};

export default TeacherProfile;
