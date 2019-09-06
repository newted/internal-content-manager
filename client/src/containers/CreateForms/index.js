import React from "react";
// Components
import CreateSourceForm from "./CreateSourceForm";

const CreateForms = ({ model }) => {
  switch (model) {
    case "source":
      return <CreateSourceForm />;
    default:
      return <div>No form found...</div>;
  }
};

export default CreateForms;
