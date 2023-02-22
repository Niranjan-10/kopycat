import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ComingSoon from "./components/CommingSoon";
import DesignAssignment from "./components/DesignAssignment";
import AboutUs from "./components/AboutUs";
import LetsDiscuss from "./components/LetsDiscuss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./components/MainContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "/screen-shots",
        element: <ComingSoon title="Screenshots" />,
      },
      {
        path: "/daily-design",
        element: <ComingSoon title="Daily Design" />,
      },
      {
        path: "/ui-component",
        element: <ComingSoon title="UI Components Handbook" />,
      },
      {
        path: "/interactions",
        element: <ComingSoon title="Interactions" />,
      },
      {
        path: "/design-assignment",
        element: <DesignAssignment />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/lets-discuss",
        element: <LetsDiscuss />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
