import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../YIEUI/Button";

const DocumentNavigation = () => {
  const navigate = useNavigate();
  return (
    <div class="flex pt-5  mx-auto w-3/4 justify-center mb-5" role="group">
      <Button variant="navigation" onClick={() => navigate("/adminDashboard/adminDocuments/adminAcademic")}>
        Academic
      </Button>
      <Button
        variant="navigation"
        onClick={() => navigate("/adminDashboard/adminDocuments/adminPersonal")}
      >
        Personal
      </Button>
      <Button
        variant="navigation"
        onClick={() => navigate("/adminDashboard/adminDocuments/adminAdminstration")}
      >
        Adminstration
      </Button>
      <Button
        variant="navigation"
        onClick={() => navigate("/adminDashboard/adminDocuments/adminAddDocument")}
      >
        Add Document
      </Button>
    </div>
  );
};

export default DocumentNavigation;
