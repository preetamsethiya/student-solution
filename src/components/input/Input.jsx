import React from "react";

export default function Input(props) {
  return (
    <input
      className="componentInput"
      id={props.input.id || ""}
      name={props.input.name}
      value={props.input.value || ""}
      type={props.input.type || "text"}
      placeholder={props.input.placeholder || ""}
      onChange={props.input.onChange}
      onClick={props.input.onClick}
    />
  );
}
