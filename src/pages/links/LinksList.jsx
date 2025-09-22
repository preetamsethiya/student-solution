import React from "react";
import Page_Container from "../../components/page_container/Page_Container";

const links = [
  {
    text: "link1",
    link_Url: "smkv.in",
  },
  {
    text: "link2",
    link_Url: "smkv.in",
  },
  {
    text: "link3",
    link_Url: "smkv.in",
  },
];

export default function LinksList() {
  return (
    <Page_Container>
      <div className="flex flex-col">
        <div>
          <span className="bg-amber-500 px-3 py-0.5 font-bold ">
            Links List
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
                      src="/src/assets/images/door1.jpg"
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
