import Layout from "./Layout";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import MainContent from "./components/MainContent";
import Footer from "./components/footer";
import ComingSoon from "./components/CommingSoon";
import DesignAssignment from "./components/DesignAssignment";
import AboutUs from "./components/AboutUs";
import LetsDiscuss from "./components/LetsDiscuss";

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
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
]);

export default App;
