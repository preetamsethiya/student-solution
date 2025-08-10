import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { VarProvider } from "./context/VarContext.jsx";
import { Search_FilterProvider } from "./context/Search_FilterContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <StrictMode> */}
    <Search_FilterProvider>
      <VarProvider>
        <App />
      </VarProvider>
    </Search_FilterProvider>
    {/* </StrictMode> */}
  </BrowserRouter>
);
