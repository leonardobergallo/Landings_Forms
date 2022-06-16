import React from "react";

const Input = ({
  tipo = "text",
  id,
  value,
  callback,
  placeholder = "",
  max = 30,
  autocomplete = "on",
  maxDate = null,
  minDate = null,
}) => {
  return (
    <>
      <input
        type={tipo}
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
        maxLength={max}
        onChange={(e) => callback(e)}
        onPaste={(e) => {
          e.preventDefault();
          return false;
        }}
        autoComplete={autocomplete}
        max={maxDate}
        min={minDate}
      />
    </>
  );
};

export default Input;
