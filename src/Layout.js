import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import MainContent from "./components/MainContent";
import SubmitCard from "./components/SubmitCard";

const Layout = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Layout;
