import React from "react";

const Input = (props) => {
  const { label, input } = props;

  function onKeyPressHandle(e) {
    const regex = /[0-9]/g;
    const value = String.fromCharCode(e.charCode);
    if (!value.match(regex)) {
      e.preventDefault();
    }
  }

  return (
    <>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} onKeyPress={onKeyPressHandle} />
    </>
  );
};

export default Input;
