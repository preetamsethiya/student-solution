import React, { useEffect } from "react";
import Page_Container from "../../components/page_container/Page_Container";
import img from "../../assets/react.svg";

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
    text: "CG Post Metric Scholarship",
    link_Url: "https://postmatric-scholarship.cg.nic.in/",
  },
  {
    text: "NSP OTR",
    link_Url: "https://scholarships.gov.in/Students",
  },
  {
    text: "CG E District",
    link_Url: "https://cgedistrict.cgstate.gov.in/workflow/trackAppStatus.html",
  },
  {
    text: "Aadhar card",
    link_Url: "https://uidai.gov.in/",
  },
];

export default function LinksList() {
  useEffect(() => {}, []);
  return (
    <Page_Container>
      <div>
        <div className="mb-1">
          <span className="bg-amber-500   px-3 py-0.5 font-bold ">
            Sites List
          </span>
        </div>

        <div>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-[6px] bg-pink-300 p-[6px] text-center ">
            {links.map((link, i) => {
              return (
                <li key={i}>
                  <a href={link.link_Url} target="_blank">
                    <div className=" flex items-center justify-center flex-col">
                      <div
                        className={`h-[70px] w-[70px] rounded-[85px] flex items-center justify-center bg-green-700`}
                      >
                        <div className="font-bold rounded-[40px] text-gray-200">
                          {i + 1}
                        </div>
                      </div>
                      <div className="text-[14px] font-bold px-1">
                        {link.text}
                      </div>
                    </div>
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
