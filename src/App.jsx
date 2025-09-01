import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Privacy from "./pages/privacy/Privacy";
import Disclaimer from "./pages/disclaimer/Disclaimer";
import Footer from "./components/footer/Footer";
import { Outlet, Route, Routes } from "react-router";
import Profile from "./pages/profile_page/Profile";
import ReactGA from "react-ga4";
import Page_Container from "./components/page_container/Page_Container";
import SeoTags from "./components/seo_tags/SeoTags";

function App() {
  const TRACKING_ID = "G-3CZ1S9KW80";
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({ hitType: "pageview", page: "/" });
  // warning: in the working copy of 'src/App.jsx', LF will be replaced by CRLF the next time Git touches it
  return (
    <>
      <SeoTags
        title={"app"}
        description={"app description"}
        url={window.location.href}
      />
      <div>
        <div>
          <div className="homeHeader">
            <Header />
          </div>
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
