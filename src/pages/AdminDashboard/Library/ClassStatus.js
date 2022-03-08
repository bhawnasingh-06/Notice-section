import React from "react";
import { useNavigate } from "react-router-dom";
import LibraryFilter from "../../../Components/LibraryFilter";
import SelectInput from "../../../Components/SelectInput";
import { schoolClasses, sections, subjects } from "../../../dummyData";
import src from "../../../images/chart.png";
import Button from "../../../YIEUI/Button";
import ShowCompletionData from "./ShowCompletionData";

const ClassStatus = () => {
  const navigate = useNavigate();
  const cols = [
    { name: "Type" },
    { name: "Completion" },
    { name: "Class Report" },
    { name: "Students" },
  ];

  const rows = [
    {
      id: 1,
      type: "Content 1",
      completion: "50%",
      classReportLink: "/classReport",
      studentsLink: "/studentList",
    },
    {
      id: 2,
      type: "Content 1",
      completion: "50%",
      classReportLink: "/classReport",
      studentsLink: "/studentList",
    },
    {
      id: 3,
      type: "Content 1",
      completion: "50%",
      classReportLink: "/classReport",
      studentsLink: "/studentList",
    },
    {
      id: 4,
      type: "Content 1",
      completion: "50%",
      classReportLink: "/classReport",
      studentsLink: "/studentList",
    },
  ];
  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-5">
        <LibraryFilter classes="bg-gray-300 p-5 pr-10" />
        <div className="border border-black col-span-2 ">
          <p className="-mt-3 w-max bg-white px-1 mx-2 ">Class</p>
          <div className="grid grid-cols-3 p-5 gap-5">
            <div>
              <img className="h-auto w-full" src={src} alt="" />
            </div>
            <div className="col-span-2 border border-black p-5">
              <p>Completion of Material = 50%</p>
              <p>Class Average = 65%</p>
              <p>Teacher: Lorem Ipsum</p>
              <p className="inline-block mr-10">Teacher Content profile</p>
              <Button
                onClick={() => navigate("/adminDashboard/teacherProfile")}
                classes="inline-block"
                variant="filter"
              >
                Go
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* completion data */}
      <div className="grid grid-cols-3 mt-5 gap-3">
        <ShowCompletionData
          classes="col-span-2"
          type="classStatus"
          cols={cols}
          rows={rows}
        />
        {/*  student profile */}
        <div className="border border-black mt-4 rounded-md">
          <p className="-mt-3 bg-white w-max mx-3 px-2">Student Profile</p>
          <div className="p-4 pt-0 ">
            <SelectInput values={schoolClasses} />
            <SelectInput values={subjects} />
            <SelectInput values={sections} />
            <Button onClick={() => navigate('/adminDashboard/studentProfile')} classes="mt-4" variant="outlined">
              Get Student Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassStatus;
