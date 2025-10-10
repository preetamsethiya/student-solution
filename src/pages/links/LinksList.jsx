import React, { useEffect } from "react";
import Page_Container from "../../components/page_container/Page_Container";

const links = [
  {
    text: "SMKV",
    link_Url: "https://smkvbastar.ac.in/",
  },
  {
    text: "CGVyapam",
    link_Url: "https://vyapamcg.cgstate.gov.in/",
  },
  {
    text: "(Login) CGVyapam",
    link_Url: "https://vyapamprofile.cgstate.gov.in/Online/UserLogin.aspx",
  },
  {
    text: "CG post metric scholarship",
    link_Url: "https://postmatric-scholarship.cg.nic.in/",
  },
  {
    text: " (Login) CG post metric scholarship",
    link_Url: "https://postmatric-scholarship.cg.nic.in/LoginPage.aspx",
  },
  {
    text: "NSP OTR",
    link_Url: "https://scholarships.gov.in/Students",
  },
  {
    text: "CG E District (aay, jati, nivash status check)",
    link_Url: "https://cgedistrict.cgstate.gov.in/workflow/trackAppStatus.html",
  },
  {
    text: "AAdhar card",
    link_Url: "https://uidai.gov.in/",
  },
];

export default function LinksList() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("ad error", e);
    }
  }, []);
  return (
    <Page_Container>
      <div className="flex flex-col">
        <div>
          <span className="bg-amber-500 px-3 py-0.5 font-bold ">
            Sites List
          </span>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-2 flex-col mt-1.5 ">
            {links.map((link, i) => {
              return (
                <li key={i} className="w-full px-8">
                  <a
                    className="bg-blue-500 px-6 w-full flex   rounded-md  py-1 text-center font-semibold text-gray-300"
                    href={link.link_Url}
                  >
                    {" "}
                    <img
                      src="/src/assets/react.svg"
                      className="w-[36px] h-[36px] self-start rounded-full "
                      alt=""
                    />
                    <span className="self-center ml-3.5"> {link.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Page_Container>
  );
}
