import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../YIEUI/Button";

const DocumentNavigation = () => {
  const navigate = useNavigate();
  return (
    <div class="flex pt-5  mx-auto w-3/4 justify-center mb-5" role="group">
      <Button
        variant="navigation"
        onClick={() => navigate("/teacherDashboard/teacherDocuments/academic")}
      >
        Academic
      </Button>
      <Button
        variant="navigation"
        onClick={() => navigate("/teacherDashboard/teacherDocuments/personal")}
      >
        Personal
      </Button>
      <Button
        variant="navigation"
        onClick={() => navigate("/teacherDashboard/teacherDocuments/adminstration")}
      >
        Adminstration
      </Button>
    </div>
  );
};

export default DocumentNavigation;
