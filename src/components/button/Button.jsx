import React from "react";

export default function Button(props) {
  // console.log(props);
  return (
    <button
      className={`componentBtn ${props.btn?.className}`}
      onClick={props.btn.onClick}
    >
      {props.btn.text}
    </button>
  );
}
