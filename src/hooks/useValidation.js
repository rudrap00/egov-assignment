const useValidation = () => {
  const validateField = (name, value, validation, formData) => {
    const errors = [];
    const { required, minLength, maxLength, min, max, pattern, conditional } =
      validation;

    if (required && !value) {
      if (name === "terms") errors.push("Agree to the terms");
      else errors.push(`${name} is required`);
    }

    if (minLength && value.trim().length < minLength) {
      errors.push(`${name} must be at least ${minLength} characters long`);
    }

    if (maxLength && value.trim().length > maxLength) {
      errors.push(`${name} must be less than ${maxLength} characters long`);
    }

    if (pattern && value && !pattern.test(value)) {
      errors.push(`${name} is not in the correct format`);
    }

    if (min && Number(value) < min) {
      errors.push(`${name} must be at least ${min}`);
    }

    if (max && Number(value) > max) {
      errors.push(`${name} must be less than ${max}`);
    }

    if (conditional && !conditional(formData)) {
      errors.splice(0, errors.length);
      if (value && !pattern.test(value))
        errors.push(`${name} is not in the correct format`);
    }

    return errors.length > 0 ? errors.join(", ") : null;
  };

  const validateForm = (formData, formConfig) => {
    const newErrors = {};
    let isValid = true;

    formConfig.forEach((field) => {
      const value = formData[field.name];
      const error = validateField(
        field.name,
        value,
        field.validation,
        formData
      );

      if (error) {
        isValid = false;
        newErrors[field.name] = error;
      }
    });

    return { errors: newErrors, isValid };
  };

  return { validateForm };
};

export default useValidation;
