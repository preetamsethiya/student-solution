import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import { VarProvider } from "./context/VarContext.jsx";
import { Search_FilterProvider } from "./context/Search_FilterContext.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile_page/Profile.jsx";
import Post from "./pages/post_page/post.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Privacy from "./pages/privacy/Privacy.jsx";
import Disclaimer from "./pages/disclaimer/Disclaimer.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <StrictMode> */}
    <Search_FilterProvider>
      <VarProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="/:profile" element={<Profile />} />
            <Route path="/:profile/:id" element={<Post />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route
              path="/*"
              element={
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  {" "}
                  <h4>Page not found</h4> <br /> <Link to={"/"}>Home </Link>{" "}
                </div>
              }
            />
          </Route>
        </Routes>
      </VarProvider>
    </Search_FilterProvider>
    {/* </StrictMode> */}
  </BrowserRouter>
);
