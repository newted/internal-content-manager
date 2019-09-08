import React from "react";
import UpdateSourceForm from "./UpdateSourceForm";

const UpdateForms = ({ model }) => {
  switch (model) {
    case "source":
      return <UpdateSourceForm />;
    default:
      return <div>No forms found...</div>;
  }
};

export default UpdateForms;
