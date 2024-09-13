import { useCallback, useState } from "react";
import useValidation from "./useValidation";

export const useForm = (formConfig, onSubmit) => {
  const [formData, setFormData] = useState(() => {
    const initialState = {};

    formConfig.forEach((field) => {
      initialState[field.name] = field.type === "checkbox" ? false : "";
    });

    return initialState;
  });

  const [errors, setErrors] = useState({});
  const { validateForm } = useValidation();

  const changeHandler = useCallback(
    (e) => {
      const { name, type, value, checked } = e.target;

      const fieldValue = type === "checkbox" ? checked : value;

      setFormData({
        ...formData,
        [name]: fieldValue,
      });
    },
    [formData]
  );

  const resetHandler = useCallback(() => {
    setFormData(() => {
      const initialState = {};

      formConfig.forEach(
        (field) =>
          (initialState[field.name] = field.type === "checkbox" ? false : "")
      );

      return initialState;
    });

    setErrors({});
  }, [formConfig]);

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();

      const { errors, isValid } = validateForm(formData, formConfig);

      if (isValid) {
        onSubmit(formData);
        resetHandler();
      } else {
        setErrors(errors);
      }
    },
    [formConfig, formData, validateForm, resetHandler, onSubmit]
  );

  return { formData, errors, resetHandler, changeHandler, submitHandler };
};
