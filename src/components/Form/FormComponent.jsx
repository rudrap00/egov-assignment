import React from "react";
import { useForm } from "../../hooks/useForm";
import Input from "../FormElements/Input";
import Select from "../FormElements/Select";
import TextArea from "../FormElements/TextArea";

const FormComponent = ({ formConfig, onSubmit }) => {
  const { formData, errors, resetHandler, changeHandler, submitHandler } =
    useForm(formConfig, onSubmit);

  return (
    <>
      <form onSubmit={submitHandler}>
        {formConfig.map((config) => {
          switch (config.type) {
            case "text":
            case "email":
            case "password":
            case "number":
            case "tel":
            case "date":
            case "checkbox":
            case "radio":
              return (
                <Input
                  key={config.name}
                  element={config}
                  value={formData[config.name]}
                  onChange={(e) => changeHandler(e)}
                  error={errors[config.name]}
                />
              );
            case "select":
              return (
                <Select
                  key={config.name}
                  element={config}
                  value={formData[config.name]}
                  onChange={(e) => changeHandler(e)}
                  error={errors[config.name]}
                />
              );
            default:
              return (
                <TextArea
                  key={config.name}
                  element={config}
                  value={formData[config.name]}
                  onChange={(e) => changeHandler(e)}
                  error={errors[config.name]}
                />
              );
          }
        })}
        <div className="div-button">
          <button type="submit">Submit</button>
          <button type="reset" onClick={resetHandler}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default FormComponent;
