import React from "react";
import { useNavigate } from "react-router-dom";
import LibraryFilter from "../../../Components/LibraryFilter";
import SelectInput from "../../../Components/SelectInput";
import Button from "../../../YIEUI/Button";
import ShowCompletionData from "./ShowCompletionData";

const Completion = ({ menuOpen }) => {
  const navigate = useNavigate();
  const classes = [
    { value: "Select Class" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
  ];

  const subjects = [
    { value: "Select Subject" },
    { value: "Math" },
    { value: "Science" },
    { value: "English" },
    { value: "Hindi" },
  ];

  const sections = [
    { value: "Select Section" },
    { value: "Section A" },
    { value: "Section B" },
    { value: "Section C" },
  ];

  const aggData = [
    {
      id: 1,
      filter: "Class 12",
      subject: "Physics",
      completion: "50%",
      aggCompletion: "50%",
    },
    {
      id: 2,
      filter: "Class 12",
      subject: "Physics",
      completion: "50%",
      aggCompletion: "50%",
    },
    {
      id: 3,
      filter: "Class 12",
      subject: "Physics",
      completion: "50%",
      aggCompletion: "50%",
    },
    {
      id: 4,
      filter: "Class 12",
      subject: "Physics",
      completion: "50%",
      aggCompletion: "50%",
    },
    {
      id: 5,
      filter: "Class 12",
      subject: "Physics",
      completion: "50%",
      aggCompletion: "50%",
    },
  ];

  const aggCols = [
    { name: "Filter" },
    { name: "Subject" },
    { name: "Completion" },
    { name: "Aggregate Completion" },
  ];

  const overallCompletionCols = [
    { name: "Class" },
    { name: "Overall Completion" },
  ];

  const overallCompletionRows = [
    { id: 1, class: "6", completion: "70%" },
    { id: 2, class: "7", completion: "75%" },
    { id: 3, class: "8", completion: "75%" },
    { id: 4, class: "9", completion: "75%" },
    { id: 5, class: "10", completion: "75%" },
    { id: 6, class: "11", completion: "75%" },
    { id: 7, class: "12", completion: "75%" },
  ];

  return (
    <div className="flex p-5">
    

      <div className="w-2/3 mr-4">
        <div className=" grid grid-cols-2 gap-4 ">
          {/* select class / subject */}
          <LibraryFilter
            schoolClasses={classes}
            subjects={subjects}
            classes=" bg-gray-300 p-2 rounded-md pr-10"
          />
          {/* content completion */}
          <div className="border border-black rounded-md pl-4 pb-4">
            <p className="-mt-3 bg-white px-3 w-max">Content Completion</p>
            <div className="w-3/4">
              <SelectInput values={classes} />
              <SelectInput values={sections} />
              <SelectInput values={subjects} />
            </div>
            <Button classes="mt-4" variant="filter">
              Apply Filter
            </Button>
          </div>

          {/*  aggregate completion  */}
          <ShowCompletionData
            cols={aggCols}
            rows={aggData}
            type="aggregate"
            classes="col-span-2 "
          />
        </div>
      </div>
      {/*  overall completion */}
      <div className="w-1/3">
        <ShowCompletionData
          type="overall"
          cols={overallCompletionCols}
          rows={overallCompletionRows}
        />
      </div>
    </div>
  );
};

export default Completion;
