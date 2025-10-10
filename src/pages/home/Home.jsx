import React, { useContext, useEffect, useRef, useState } from "react";
import Card from "../../components/card/Card";
import Page_Container from "../../components/page_container/Page_Container";
import Button from "../../components/button/Button";
import { cafes, profiles, updates, images } from "../../data_store/data";
import { Link, useSearchParams } from "react-router";
import { VarContext } from "../../context/VarContext";
import Input from "../../components/input/Input";
import UseSearch_Filter from "../../hooks/UseSearch_Filter";
import { Search_FilterContext } from "../../context/Search_FilterContext";
import SelectMenu from "../../components/select_menu/SelectMenu";
import AdsComponent from "../../components/google_ad/AdsComponent";
import "../../App.css";
import { UseLocalstorage } from "../../hooks/UseLocalstorage";
import PopUp from "../../components/pop_up/PopUp";
import Modal from "../../components/modal/Modal";
const buttons = [
  // {
  //   text: "updates",
  //   value: " ",
  // },
  {
    text: "SMKV",
    value: "smkv",
  },
  // {
  //   text: "colleges",
  //   value: "college",
  // },
  // {
  //   text: "Jobs",
  //   value: "other",
  // },
  {
    text: "Scholarship",
    value: "scholarship",
  },
  {
    text: "Vyapam",
    value: "vyapam",
  },
  {
    text: "Results",
    value: "results",
  },
  {
    text: "Admit cards",
    value: "admitcards",
  },
];

export default function Home() {
  let profilesPosts = [];

  profiles.map((profile) => {
    profilesPosts = [...profilesPosts, ...profile.posts];
  });

  const updateList = [...profilesPosts, ...updates];
  const [searchParams, setSearchParams] = useSearchParams();
  const phone = searchParams.get("phone");

  const getVarContext = useContext(VarContext);
  const { search_Filter, setSearch_Filter } = useContext(Search_FilterContext);
  const getPhone = UseLocalstorage("phone", "");
  const getPopUpState = UseLocalstorage("popUpState", "true" || "");
  const filter = UseSearch_Filter();
  // console.log(updateList);
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("ad error", e);
    }

    if (phone) {
      getPhone[1](phone);
    }
  }, [profilesPosts]);

  return (
    <>
      <div className="homeContainer max-sm:mt-3 mt-[60px] ">
        <main>
          {/* home pop up  */}
          {getPopUpState[0] === "true" &&
            getVarContext.isOpenPopUp === "true" && (
              <PopUp
                data={{
                  inputFunc: (e) => {
                    getVarContext.setIsPhone(e.target.value);
                  },
                  addFunc: () => {
                    getPhone[1](getVarContext.isPhone);
                    getPopUpState[1]("false");
                  },
                  skipFunc: () => {
                    getVarContext.setIsOpenPopUp("false");
                    if (getPopUpState[0] && getPhone[0].length) {
                      getPopUpState[1]("false");
                    }
                  },
                  closeFunc: () => {
                    getVarContext.setIsOpenPopUp("false");
                    if (getPopUpState[0] && getPhone[0].length) {
                      getPopUpState[1]("false");
                    }
                  },
                }}
              />
            )}
          {/* search section  */}

          <div className=" mb-[-50px]pt-7 max-sm:pt-1 flex justify-center px-6  py-2">
            <div>
              <Input
                input={{
                  id: "search",
                  name: "search",
                  type: "text",
                  value: search_Filter || "",
                  placeholder: "search...",
                  onChange: filter,
                  onClick: (e) => {
                    e.target.select(e.target.value);
                  },
                }}
              />
            </div>
          </div>
          <Page_Container className="px-3">
            <div>
              <div className="mb-2 flex justify-between">
                <span
                  onClick={() => {
                    getVarContext.setIsOpenPopUp("true");
                    getPopUpState[1]("true");
                    getVarContext.setIsPhone(getPhone[0]);
                  }}
                  className="cursor-pointer ring-1 ring-red-500 mr-2  "
                >
                  Update phone{" 16"}
                </span>
                <div>
                  {getPhone[0] && (
                    <a
                      className=" bg-blue-500 px-3 py-1.5 rounded-sm font-semibold text-white"
                      href={`https://wa.me/${getPhone[0]}?text=#sss`}
                      target="_blank"
                    >
                      {" "}
                      Form fill up, contact..!
                    </a>
                  )}
                </div>
              </div>

              {/* cafe section  */}

              {/* {getPhone[0] && (
                <div>
                  <div>
                    {cafes.map((cafe) => {
                      return (
                        <Card key={cafe.user_Id}>
                          <a
                            href={`https://wa.me/${getPhone[0]}?text=#sss`}
                            target="_blank"
                            className="bg-blue-500"
                          >
                            <div
                              className={`bg-green-500 pt-0 pb-1 px-1 flex flex-col   m-2 rounded-xl text-center font-bold text-3xl text-gray-100`}
                            >
                              {" "}
                              <div className="w-[120px] overflow-hidden self-center flex justify-center items-center">
                                <img
                                  src={images.whatsappIcon}
                                  className="w-full h-full"
                                  alt=""
                                />
                              </div>
                              <div className="text-center mt-0 rounded-full bg-blue-500 py-1.5 font-bold text-xl text-gray-100">
                                <Button
                                  btn={{
                                    text: "Contact for form fill-up",
                                  }}
                                />
                              </div>
                            </div>
                          </a>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )} */}
            </div>

            {/* google ad component */}

            <AdsComponent dataAdSlot="7424430887" dataAdFormat="auto" />

            <div className=" mt-3 ">
              {/* buttons section  */}
              <div className=" p-1 flex justify-center flex-wrap gap-1.5  text-xl mb-2.5 ">
                {buttons.map((button, i) => {
                  return (
                    <label
                      key={i}
                      htmlFor={button.value}
                      className={` select-none px-3 py-3 rounded-full leading-3 font-sm text-[16px] flex justify-center items-center ${
                        search_Filter === button.value
                          ? "bg-black text-gray-100 "
                          : " ring-1 ring-gray-400"
                      }`}
                      onClick={(e) => {
                        getVarContext.setIsClgActive(button.value);
                        setSearch_Filter(e.target.value);
                      }}
                    >
                      {" "}
                      <span>{button.text}</span>
                      <input
                        id={button.value}
                        type="button"
                        value={button.value}
                        className="hidden"
                      />
                    </label>
                  );
                })}
              </div>

              {/* card section  */}

              <div className="flex flex-wrap justify-between gap-[8px]">
                {updateList
                  .filter((update) => {
                    return (
                      update.user_Id
                        ?.toLocaleLowerCase()
                        .includes(search_Filter) ||
                      update?.title?.toLocaleLowerCase().includes(search_Filter)
                    );
                  })
                  .reverse()
                  .map((update, i) => {
                    return (
                      <article
                        onClick={() => {
                          getVarContext.setIsOpenAd(true);
                        }}
                        key={update.post_Id}
                        className={` w-[300px] grow ${
                          i % 2 === 0 ? " mb-3 sm:mt-3 sm:mb-0" : " mb-3 "
                        }`}
                      >
                        <div>
                          <span className="mb-1">
                            <a
                              onClick={(e) => e.stopPropagation()}
                              className="ring-1 py-1.5 ring-green-500 bg-green-500 text-white  px-3 rounded-sm font-semibold"
                              href={`https://wa.me?text=${
                                window.location.href
                              }${
                                update.user_Id == "results" ||
                                update.user_Id == "admitcards"
                                  ? `/resultcard/${update.siteUrl_Id}?phone=${getPhone[0]}`
                                  : `/post/${update.post_Id}?phone=${getPhone[0]}`
                              }`}
                              target="_blank"
                            >
                              SHARE
                            </a>
                            {update.new && (
                              <span className="ring-1 py-1.5 ring-red-500 bg-red-100 text-red-700 ml-1 mb-2   px-3 rounded-sm font-semibold">
                                new
                              </span>
                            )}
                          </span>

                          <Link
                            to={`${
                              update.user_Id == "results" ||
                              update.user_Id == "admitcards"
                                ? `/resultcard/${update.siteUrl_Id}?phone=${getPhone[0]}`
                                : `/post/${update.post_Id}?phone=${getPhone[0]}`
                            }`}
                            state={update}
                          >
                            {" "}
                            <Card>
                              <div className="p-2">
                                <div className="text-center  p-16 bg-[url(/src/assets/images/door2.jpeg)] bg-cover  bg-center rounded-xl">
                                  <span className="bg-gray-900 rounded-full px-5  py-1.5 text-gray-100 font-semibold ">
                                    {search_Filter}
                                  </span>
                                </div>
                                <div className="text-center text-gray-500 font-semibold">
                                  {" "}
                                  {update.title}
                                </div>
                              </div>
                            </Card>
                          </Link>
                        </div>
                        {i === 1 && (
                          <AdsComponent
                            dataAdSlot="9588333210"
                            dataAdFormat="fluid"
                          />
                        )}
                      </article>
                    );
                  })}
              </div>
              <AdsComponent
                dataAdSlot="1446835924"
                dataAdFormat="autorelaxed"
              />
            </div>
          </Page_Container>
        </main>
      </div>
    </>
  );
}
