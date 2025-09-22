import React, { useEffect, useState } from "react";
import Page_Container from "../../components/page_container/Page_Container";
import Card from "../../components/card/Card";
import { profiles, updates } from "../../data_store/data";
import Button from "../../components/button/Button";
import { Link, useParams, useSearchParams } from "react-router";
import AdsComponent from "../../components/google_ad/AdsComponent";
import { UseLocalstorage } from "../../hooks/UseLocalstorage";

export default function Post() {
  const param = useParams();
  const getPhone = UseLocalstorage("phone", "");
  const [searchParams, setSearchParams] = useSearchParams();
  const phone = searchParams.get("phone");
  // console.log(param);
  const [post] = updates.filter((update) => {
    return update.post_Id === param.id;
  });

  useEffect(() => {
    if (phone) {
      getPhone[1](phone);
    }
    // console.log(post);
  }, [post]);
  return (
    <>
      <main>
        <Page_Container className="px-0">
          {/* {console.log(post.title)} */}
          <div className="bg-[url(/src/assets/images/now-or-never.png)]  bg-cover bg-center font-semibold text-white text-xl text-shadow-sm text-shadow-amber-400 text-center min-h-[200px] md:min-h-[300px]">
            {post?.title}
          </div>
          <div className="mt-2 ml-2 flex justify-between">
            <div>
              {" "}
              <span>
                <a
                  className="ring-1 ring-green-500 bg-green-500 text-white  px-2 font-semibold"
                  href={`https://wa.me?text=${window.location.href}`}
                  target="_blank"
                >
                  SHARE
                </a>
              </span>
            </div>
            <div>
              <a
                className=" bg-blue-500 px-3 font-semibold text-white"
                href={`https://wa.me/${getPhone[0]}?text=#sss`}
                target="_blank"
              >
                {" "}
                Form fill up, contact..!
              </a>
            </div>
          </div>
          <div className="font-semibold text-xl px-2 mt-1"> {post?.title}:</div>
          <div className="bg-gray-300 px-2 rounded-md mx-2 ">
            {/* discription  */}

            {post?.description.split("$").map((slice, i) => {
              return (
                <div key={i}>
                  {slice} <br />
                  <br />{" "}
                </div>
              );
            })}
            {/* date */}
            {post?.date?.map((aDate, i) => {
              return (
                <div className="bg-red-300 py-1 pl-1" key={i}>
                  {aDate}
                </div>
              );
            })}
            {/* fees */}
            {post?.fees?.map((aFees, i) => {
              return (
                <div className="bg-green-300  py-1 pl-1" key={i}>
                  {aFees}
                </div>
              );
            })}
            {/* eligibilities */}
            {post?.eligibilities?.map((eligibility, i) => {
              return (
                <div className="bg-orange-300  py-1 pl-1" key={i}>
                  {eligibility}
                </div>
              );
            })}
            {/* links */}
            {post?.links?.map((link, i) => {
              return (
                <div key={i} className="flex flex-col text-center mt-2">
                  <a
                    href={link?.site}
                    target="_blank"
                    className="bg-blue-300 mb-1.5 py-2 font-semibold "
                  >
                    {link.text}{" "}
                  </a>
                </div>
              );
            })}
          </div>
        </Page_Container>
      </main>
    </>
  );
}
