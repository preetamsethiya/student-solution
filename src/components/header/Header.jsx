import React from "react";
import "../component.css";
import { NavLink } from "react-router";
export default function Header() {
  const routes = [
    {
      text: "Home",
      icon: "🏠",
      route: "/",
    },
    {
      text: "FAQs",
      icon: "❓",
      route: "/faq",
    },
    {
      text: "Compressor",
      icon: "📚",
      route: "/canvas",
    },
    {
      text: "Sites",
      icon: "🔗",
      route: "/linkslist",
    },
  ];
  return (
    <header>
      <div
        style={
          {
            // zIndex: "100",
          }
        }
      >
        <nav className="navbar py-2 shadow-sm  max-sm:shadow-gray-800 fixed backdrop-filter backdrop-blur-sm max-sm:bottom-0.5  sm:top-0.5  w-full z-400  ">
          <ul className="flex justify-center gap-2 max-sm:justify-between mx-1.5">
            <li className="list max-sm:hidden ">
              <NavLink
                to="https://smkvbj.uonex.in/"
                target="_blank"
                className={({ isActive }) =>
                  `link ${isActive ? "activeLink" : ""} `
                }
              >
                <div>
                  <div className="font-semibold text-md ">SMKV</div>
                  <div className="text-[14px] mt-[-10px] font-semibold">
                    solution{" "}
                  </div>
                </div>
              </NavLink>
            </li>
            {routes.map((route, i) => {
              return (
                <li key={i} className="flex items-center flex-col  ">
                  <div className="w-full text-center ">
                    {" "}
                    <NavLink
                      to={route.route}
                      className={({ isActive }) =>
                        `px-3  w-full inline-block rounded-full transition-colors duration-300 py-1  ${
                          isActive
                            ? "bg-black text-gray-200"
                            : " bg-gray-200 text-black  "
                        } `
                      }
                    >
                      {" "}
                      <div className="md:hidden"> {route.icon} </div>
                      <div className="max-sm:text-sm/6 max-sm:mt-[-6px]">
                        {" "}
                        {route.text}
                      </div>
                    </NavLink>{" "}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
