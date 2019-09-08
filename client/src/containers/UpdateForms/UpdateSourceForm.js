import React, { useState, useEffect } from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
// Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import { updateSource } from "../../actions/source";

const schema = yup.object({
  name: yup.string().required(),
  url: yup.string().required()
});

const UpdateSourceForm = () => {
  const [options, setOptions] = useState([]);
  const [currentSourceId, setCurrentSourceId] = useState(null);
  const [initalFormData, setInitialFormData] = useState({});

  const sources = useSelector(state => state.source);
  const dispatch = useDispatch();

  useEffect(() => {
    const sourceList = _.map(sources, source => {
      return {
        value: source._id,
        label: source.name
      };
    });
    setOptions(sourceList);
  }, [sources]);

  const handleChange = ({ value }) => {
    setCurrentSourceId(value);

    const [filteredSource] = _.filter(sources, ({ _id }) => _id === value);
    const { name, url } = filteredSource;

    setInitialFormData(Object.assign({}, { name, url }));
  };

  const handleFormSubmit = async values => {
    const data = await updateSource(currentSourceId, values);
    dispatch({ type: "UPDATE_SOURCE", payload: data });
  };

  return (
    <>
      <Select
        options={options}
        onChange={handleChange}
        placeholder="Select source..."
      />
      {!_.isEmpty(initalFormData) && (
        <Formik
          validationSchema={schema}
          onSubmit={values => handleFormSubmit(values)}
          initialValues={initalFormData}
          enableReinitialize={true}
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
            <Form
              noValidate
              onSubmit={handleSubmit}
              style={{ marginTop: "2rem" }}
            >
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
                Update
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default UpdateSourceForm;
