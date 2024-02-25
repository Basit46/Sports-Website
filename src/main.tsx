import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GlobalContextProvider from "./context/globalContext.tsx";
import { BrowserRouter } from "react-router-dom";
import FollowClubProvider from "./context/followClubContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <FollowClubProvider>
          <App />
        </FollowClubProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
