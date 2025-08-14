import React from "react";
import { Link } from "react-router";

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

// component 2

const Button2 = () => {
  return (
    <Link className="componentBtn2" to={"/"}>
      {" "}
      Home
    </Link>
  );
};

export { Button2 };
