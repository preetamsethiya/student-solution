import React from "react";
import "../component.css";
import Button from "../button/Button";

export default function Card(props) {
  // console.log(props.data);
  return (
    <div className="card">
      {props.children ? (
        props.children
      ) : (
        <>
          <div>
            <div className="nameSection section1">
              <div>
                <div className="profileImg"></div>
              </div>
              <div className="title">
                {props.data?.user_Name || props.data?.title}
              </div>
            </div>
            <div className="section2">{props.data?.city}</div>
          </div>
        </>
      )}
    </div>
  );
}
