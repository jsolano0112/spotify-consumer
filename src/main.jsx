import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { EventApp } from "./EventApp";
import { BrowserRouter } from "react-router-dom";
import { AppRedux } from "./palette/redux/AppRedux";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppRedux>
        <EventApp />
      </AppRedux>
    </BrowserRouter>
  </StrictMode>
);
