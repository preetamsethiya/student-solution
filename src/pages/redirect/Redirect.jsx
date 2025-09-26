import React, { useContext, useEffect, useState } from "react";
import Page_Container from "../../components/page_container/Page_Container";
import { Link, useLocation, useParams, useSearchParams } from "react-router";
import { updates } from "../../data_store/data";
import { UseLocalstorage } from "../../hooks/UseLocalstorage";
import Modal from "../../components/modal/Modal";
import AdsComponent from "../../components/google_ad/AdsComponent";
import { VarContext } from "../../context/VarContext";

export default function Redirect() {
  const location = useLocation();
  const getPhone = UseLocalstorage("phone", "");
  const getVarContext = useContext(VarContext);
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
    getVarContext.setIsOpenAd(true);
    if (phone) {
      getPhone[1](phone);
    }
  }, [filterUrl, phone]);
  return (
    <Page_Container>
      {getVarContext.isOpenAd && (
        <Modal
          footer={
            <div className="flex justify-center gap-3">
              <a href={`${filterUrl.siteUrl}`} target="_blank">
                <button
                  className="rounded-md px-6 py-1 font-semibold text-center text-xl bg-gray-500 text-white"
                  onClick={() => {
                    // open(filterUrl.siteUrl);
                    getVarContext.setIsOpenAd(false);
                  }}
                >
                  close
                </button>
              </a>
            </div>
          }
        >
          <AdsComponent dataAdSlot="7424430887" dataAdFormat="auto" />
        </Modal>
      )}

      <div>
        {" "}
        <ul>
          {updates.map((update, i) => {
            if (i < 5) {
              return (
                <li key={i} className="mb-2 flex justify-center ">
                  <Link
                    to={`${
                      update.user_Id == "results" ||
                      update.user_Id == "admitcards"
                        ? `/resultcard/${update.siteUrl_Id}?phone=${getPhone[0]}`
                        : `/post/${update.post_Id}?phone=${getPhone[0]}`
                    }`}
                    state={update}
                    className=" bg-orange-400 mb-2 w-full pl-3 py-1.5"
                  >
                    {update.title}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </Page_Container>
  );
}
