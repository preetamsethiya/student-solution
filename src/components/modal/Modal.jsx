import React from "react";
import { createPortal } from "react-dom";
import Page_Container from "../page_container/Page_Container";

export default function Modal(props) {
  return createPortal(
    <>
      <div
        className={` ${props.className} w-full h-screen bg-gray-900/70 absolute top-0 z-10 `}
      >
        <Page_Container>
          {props.header}

          {props.children}

          {props.footer}
        </Page_Container>
      </div>
    </>,
    document.getElementById("portal")
  );
}
