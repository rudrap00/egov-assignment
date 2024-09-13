import React from "react";

const Input = ({ element, value, onChange, error }) => {
  const { type, label, name, options, placeholder } = element;

  return (
    <div className="formElement">
      <label>{label}</label>
      {type !== "radio" ? (
        <input
          type={type}
          name={name}
          value={value}
          checked={value}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete="false"
        />
      ) : (
        options.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            {option.label}
          </div>
        ))
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Input;
