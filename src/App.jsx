import { lazy, Suspense, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Privacy from "./pages/privacy/Privacy";
import Disclaimer from "./pages/disclaimer/Disclaimer";
import { Link, Outlet, Route, Routes } from "react-router";
import Profile from "./pages/profile_page/Profile";
import ReactGA from "react-ga4";
import Page_Container from "./components/page_container/Page_Container";
import Post from "./pages/post_page/Post";
import Redirect from "./pages/redirect/Redirect";
import Not_Found from "./pages/page_not_found/Not_Found";
import Faq from "./pages/faq/Faq";
import LinksList from "./pages/links/LinksList";
import Canvas from "./pages/canvas/Canvas";
// const Canvas = lazy(() => import("./pages/canvas/Canvas"));

function App() {
  const TRACKING_ID = "G-3CZ1S9KW80";
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({ hitType: "pageview", page: "/" });
  // warning: in the working copy of 'src/App.jsx', LF will be replaced by CRLF the next time Git touches it
  return (
    <>
      <div>
        <div>
          <div className="homeHeader">
            <Header />
          </div>

          {/* <Suspense> */}
          <Routes>
            {/* </Route> */}
            <Route path="/" element={<Home />} />
            <Route path="/:profile" element={<Profile />} />
            <Route path="/:profile/:id" element={<Post />} />
            <Route path="/resultcard/:siteUrl_Id" element={<Redirect />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/canvas" element={<Canvas />} />
            <Route path="/linkslist" element={<LinksList />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/*" element={<Not_Found />} />
          </Routes>
          {/* </Suspense> */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
