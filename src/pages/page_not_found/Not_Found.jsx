import React from "react";
import Button from "../../components/button/Button";
import Page_Container from "../../components/page_container/Page_Container";
import { Link, useParams } from "react-router";

export default function Not_Found() {
  return (
    <div>
      <Page_Container>
        <div>
          <div>page not found !</div>
          {window.location.href}
        </div>
        <div>
          <Link to={"/"}>
            <Button
              btn={{
                text: "Go to home ",
                className: "bg-blue-500 px-6 py-1 rounded-md font-semibold ",
              }}
            />
          </Link>
        </div>
      </Page_Container>
    </div>
  );
}
