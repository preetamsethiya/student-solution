import React from "react";
import { Link } from "react-router";
import { images } from "../../data_store/data";

export default function Footer() {
  return (
    <div className="footer bg-amber-800 mt-2 pb-18 p-3">
      <div>
        <ul className="flex flex-wrap justify-center gap-4 text-gray-100">
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
        <div className="media-container flex flex-wrap justify-center gap-4 mt-4 text-white font-semibold">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="flex justify-center items-center"
          >
            <div className="w-[40px]">
              <img src={images.instaIcon} alt="insta" className="w-full" />
            </div>
          </a>
          <a
            className="flex justify-center items-center"
            href="https://linkedin.com/in/preetamkumar-sethiya"
            target="_blank"
          >
            <div className="w-[40px] bg-white rounded-md overflow-hidden">
              <img src={images.inIcon} alt="insta" className="w-full" />
            </div>
          </a>
          <a
            className="flex  justify-center items-center"
            href="https://x.com/"
            target="_blank"
          >
            <div className="w-[40px] rounded-md bg-white ">
              <img src={images.xIcon} alt="insta" className="w-full" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
