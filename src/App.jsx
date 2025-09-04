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
import { Link, Outlet, Route, Routes } from "react-router";
import Profile from "./pages/profile_page/Profile";
import ReactGA from "react-ga4";
import Page_Container from "./components/page_container/Page_Container";
import Post from "./pages/post_page/Post";
import Redirect from "./pages/redirect/Redirect";

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

          <Routes>
            {/* </Route> */}
            <Route path="/" element={<Home />} />
            <Route path="/:profile" element={<Profile />} />
            <Route path="/:profile/:id" element={<Post />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/result/:url_Id" element={<Redirect />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route
              path="*"
              element={
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "60px",
                  }}
                >
                  {" "}
                  <h4>Page not found</h4> <br /> <Link to={"/"}>Home </Link>{" "}
                </div>
              }
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
