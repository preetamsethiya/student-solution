import React, { useEffect } from "react";
import Page_Container from "../../components/page_container/Page_Container";
import img from "../../assets/react.svg";

const links = [
  {
    text: "SMKV",
    color: "bg-purple-600",
    link_Url: "https://smkvbastar.ac.in/",
  },
  {
    text: " SMKV Log in ",
    color: "bg-red-600",
    link_Url: "https://smkv.ucanapply.com/student",
  },
  {
    text: "CG Vyapam",
    color: "bg-orange-500",
    link_Url: "https://vyapamcg.cgstate.gov.in/",
  },
  {
    text: "CG Post Metric Scholarship",
    color: "bg-green-600",
    link_Url: "https://postmatric-scholarship.cg.nic.in/",
  },
  {
    text: "NSP OTR",
    color: "bg-violet-600",
    link_Url: "https://scholarships.gov.in/Students",
  },
  {
    text: "CG EDistrict",
    color: "bg-blue-500",
    link_Url: "https://cgedistrict.cgstate.gov.in/workflow/trackAppStatus.html",
  },
  {
    text: "Aadhar card",
    color: "bg-amber-500",
    link_Url: "https://uidai.gov.in/",
  },
];

export default function LinksList() {
  useEffect(() => {}, []);
  return (
    <Page_Container>
      <div>
        <div className="mb-1">
          <span className="bg-black text-gray-50 rounded-sm   px-3 py-0.5 font-bold ">
            Sites List
          </span>
        </div>

        <div>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-[6px] bg-pink-200 p-[6px] text-center ">
            {links.map((link, i) => {
              return (
                <li key={i}>
                  <a href={link.link_Url} target="_blank">
                    <div className=" flex items-center justify-center flex-col">
                      <div
                        className={`h-[70px] w-[70px]  rounded-[85px] flex items-center justify-center ${link.color}`}
                      >
                        <div className="font-bold rounded-[40px] text-gray-200">
                          {link.text.slice(0, 12)}
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
