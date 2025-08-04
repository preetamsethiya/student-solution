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
import { Route, Routes } from "react-router";
import Profile from "./pages/profile_page/Profile";
import Post from "./pages/post_page/Post";
import Page_Container from "./components/page_container/Page_Container";

function App() {
  return (
    <>
      <div>
        <div>
          <div className="homeHeader">
            <Header />
          </div>
          <Routes>
            <Route index element={<Home />} />
            <Route path=":profile" element={<Profile />} />
            <Route path="posts" element={<Post />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="disclaimer" element={<Disclaimer />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
