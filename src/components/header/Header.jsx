import React from "react";
import "../component.css";
import { NavLink } from "react-router";
export default function Header() {
  return (
    <div>
      <header>
        <div className="headerContainer">
          <div>
            <nav className="navbar">
              <ul className="listContainer">
                <li className="list  ">
                  <div className="logo">
                    <div
                      style={{
                        marginBottom: -4,
                      }}
                    >
                      <span> SMKV </span>
                    </div>

                    <span style={{ fontSize: 14 }}>Solution</span>
                  </div>
                </li>
                <li className="list  ">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `link ${isActive ? "activeLink" : ""} `
                    }
                  >
                    Home
                  </NavLink>
                </li>
                {/* <li className="list  ">
                      <NavLink
                    href="/"
                    className={({ isActive }) =>
                      `link ${isActive ? "activeLink" : ""} `
                    }
                  >
                    jobs
                  </NavLink>
                </li> */}
                <li className="list  ">
                  <NavLink
                    to="contact"
                    className={({ isActive }) =>
                      `link ${isActive ? "activeLink" : ""} `
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="list  ">
                  <NavLink
                    to="about"
                    className={({ isActive }) =>
                      `link ${isActive ? "activeLink" : ""} `
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
