import React from "react";
import { useNavigate } from "react-router-dom";
import { schoolClasses, subjects } from "../dummyData";
import Button from "../YIEUI/Button";
import SelectInput from "./SelectInput";
const LibraryFilter = ({ classes }) => {
  const navigate = useNavigate();
  return (
    <div className={classes}>
      <SelectInput
        onChange={(e) => console.log(e.target.value)}
        values={schoolClasses}
        label="Library"
      />

      <p className="py-3">And/Or</p>
      <SelectInput values={subjects} />

      <Button
        onClick={() => navigate("/adminDashboard/classStatus")}
        classes="mt-6 mb-2"
        variant="secondary"
      >
        Go
      </Button>
    </div>
  );
};

export default LibraryFilter;
