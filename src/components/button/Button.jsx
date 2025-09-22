import React from "react";
import { Link } from "react-router";

export default function Button(props) {
  // console.log(props);
  return (
    <button className={` ${props.btn?.className}`} onClick={props.btn.onClick}>
      {props.btn.text}
    </button>
  );
}
