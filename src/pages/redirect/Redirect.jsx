import React, { useEffect, useState } from "react";
import Page_Container from "../../components/page_container/Page_Container";
import { useParams } from "react-router";
import { Button2 } from "../../components/button/Button";
import { resultArr } from "../../data_store/data";
export default function Redirect() {
  const param = useParams();
  console.log(param);
  const [filterUrl] = resultArr.filter((eachUrl) => {
    return eachUrl.url_Id === param.url_Id;
  });
  const open = (url) => {
    window.location.href = url;
  };

  useEffect(() => {
    open(filterUrl.url);
  }, [filterUrl]);
  return (
    <Page_Container>
      <Button2> Home</Button2>
    </Page_Container>
  );
}
