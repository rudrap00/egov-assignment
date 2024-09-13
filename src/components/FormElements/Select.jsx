import React from "react";

const Select = ({ element, value, onChange, error }) => {
  const { label, name, options } = element;

  return (
    <div className="formElement">
      <label>{label}</label>
      <select name={name} value={value} onChange={onChange}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Select;
