import React from "react";

const TextArea = ({ element, value, onChange, error }) => {
  const { label, name, placeholder } = element;

  return (
    <div className="formElement">
      <label>{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default TextArea;
