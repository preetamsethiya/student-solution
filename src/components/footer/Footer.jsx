import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <ul>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="privacy">Privacy policy</Link>
          </li>
          <li>
            {" "}
            <Link to="contact">Contact</Link>
          </li>
          <li>
            {" "}
            <Link to="disclaimer">Disclaimer</Link>
          </li>
        </ul>
        {/* media container css code available in about page section  */}
        <div className="media-container">
          <a href="https://www.instagram.com/" target="_blank">
            <div className="media insta">
              <div className="insta1">
                <div className="insta2">
                  <div className="insta3">
                    <div className="insta4" />
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/preetamkumar-sethiya"
            target="_blank"
          >
            <div className="media linked-in">
              {" "}
              <div className="in">in</div>
            </div>
          </a>
          <a href="https://x.com/" target="_blank">
            <div className="media x">
              {" "}
              <div className="x">X</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
