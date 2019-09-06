import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
// Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// API
import { createSource } from "../../actions/source";

const schema = yup.object({
  name: yup.string().required(),
  url: yup.string().required()
});

const initialValues = {
  name: "",
  url: ""
};

const CreateSourceForm = ({ createSource }) => (
  <Formik
    validationSchema={schema}
    onSubmit={values => createSource(values)}
    initialValues={initialValues}
  >
    {({
      handleSubmit,
      handleChange,
      handleBlur,
      values,
      touched,
      isValid,
      errors
    }) => (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group controlId="validationFormikName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationFormikUrl">
          <Form.Label>URL</Form.Label>
          <Form.Control
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
            isInvalid={!!errors.url}
          />
          <Form.Control.Feedback type="invalid">
            {errors.url}
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ width: "150px", marginTop: "1rem" }}
        >
          Submit
        </Button>
      </Form>
    )}
  </Formik>
);

const mapDispatchToProps = { createSource };

export default connect(
  null,
  mapDispatchToProps
)(CreateSourceForm);
