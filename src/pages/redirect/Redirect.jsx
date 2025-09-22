import React, { useEffect, useState } from "react";
import Page_Container from "../../components/page_container/Page_Container";
import { useLocation, useParams, useSearchParams } from "react-router";
import { updates } from "../../data_store/data";
import { UseLocalstorage } from "../../hooks/UseLocalstorage";
export default function Redirect() {
  const location = useLocation();
  const getPhone = UseLocalstorage("phone", "");
  const [searchParams, setSearchParams] = useSearchParams();
  const phone = searchParams.get("phone");

  const param = useParams();
  const [filterUrl] = updates.filter((eachUrl) => {
    return eachUrl.siteUrl_Id === param.siteUrl_Id;
  });
  const open = (url) => {
    window.open(url);
  };

  useEffect(() => {
    if (location.state.post_Id) {
      open(filterUrl.siteUrl);
    } else {
      if(phone) {
        getPhone[1](phone);
      }
    }
  }, [filterUrl]);
  return (
    <Page_Container>
      {!location.state.post_Id && (
        <div className="flex flex-col">
          <div>You will rediret {filterUrl.siteUrl} </div>
          <div>
            {" "}
            <button
              onClick={() => {
                window.open(filterUrl.siteUrl);
              }}
            >
              ok
            </button>
          </div>
        </div>
      )}
    </Page_Container>
  );
}
