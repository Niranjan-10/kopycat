import React from "react";
import Logo from "../../images/logo.svg";
import LogoText from "../../images/logo-text.svg";
import SubmitCard from "../SubmitCard";

const Footer = () => {
  return (
    <div className=" bottom-0">
      <SubmitCard />
      <footer className="px-[126px] py-[82px] grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <img src={Logo} alt="logo" className="h-[26px] w-[26px]" />
            <p className="ml-[16px] text-bold">Kopycat</p>
          </div>
          <div className="mt-[24px] text-justify">
            It's the handbook with hundreds of end to end user journeys from the
            top grossing apps to reduce iteration cycles, Create Design for
            others, identify trends, UI Components, Design assignments &
            benchmarking
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div></div>
          <div className="flex flex-col">
            <p>Roadmap</p>
            <p className="mt-[24px]">Changelog</p>
          </div>
          <div className="flex flex-col">
            <p>Feedback</p>
            <p className="mt-[24px]">About us</p>
            <p className="mt-[24px]">Privacy Policy</p>
            <p className="mt-[24px]">Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
