import React from "react";
import SelectInput from "../../../Components/SelectInput";
import { studentSubjects } from "../../../dummyData";
import src from "../../../images/chart.png";
import Button from "../../../YIEUI/Button";
import ShowCompletionData from "./ShowCompletionData";

const StudentProfile = ({ teacherName }) => {
  const cols = ["Teacher Name", "Teacher Name"];

  const statusCols = [
    { name: "Subjects" },
    { name: "Teacher" },
    { name: "Overall" },
  ];

  const statusRows = [
    { id: 1, subjects: "A", teacher: "Teacher 1", overall: "60%" },
    { id: 2, subjects: "B", teacher: "Teacher 1", overall: "60%" },
    { id: 3, subjects: "C", teacher: "Teacher 1", overall: "60%" },
  ];

  const subjects = [
    { value: "Select Subject" },
    { value: "Math" },
    { value: "English" },
    { value: "Science" },
  ];
  return (
    <div className="p-5">
      {/* student profile and overall stats container */}
      <div className="grid grid-cols-2 gap-5">
        {/* student profile */}

        <div className="border border-black p-3 rounded-md ">
          {/* student name */}
          <div className="grid grid-cols-3">
            <p>Student Name:</p>
            <p className="col-span-2 text-left"> {teacherName || "null"}</p>
          </div>
          {/* overall average */}
          <div className="grid grid-cols-3">
            <p>Overall Average:</p>
            <p className="col-span-2">79</p>
          </div>
          {/* subjects that the student studies */}
          <div className="grid grid-cols-3">
            <p>Subjects Taken:</p>
            <p className="col-span-2">
              {studentSubjects.map((subject) => (
                <span className="mr-2">{subject},</span>
              ))}
            </p>
          </div>
          {/* on which classes he/she reads */}
          <div className="grid grid-cols-3">
            <p>Class:</p>
            <p className="col-span-2">7</p>
          </div>
          <div className="grid grid-cols-3">
            <p>ID:</p>
            <p className="col-span-2">
              <span className="mr-2">987543</span>
            </p>
          </div>
        </div>

        {/* student overall status */}
        <ShowCompletionData
          cols={statusCols}
          rows={statusRows}
          type="studentOverallStatus"
        />

        <Button variant="filter">Edit Profile</Button>
      </div>
      {/* performance and subject reports container*/}
      <div className="grid grid-cols-3 gap-5 mt-5">
        <di>
          <img className="w-full h-auto" src={src} alt="" />
        </di>
        <div className="col-span-2 border border-gray-400 rounded-md ">
          <p className="w-max -mt-3 mx-3 px-2 bg-white">Subject Reports</p>
          <div className="p-5 pr-20">
            <SelectInput values={subjects} />
            <Button classes="mt-5" variant="outlined">
              Generate Completion Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
