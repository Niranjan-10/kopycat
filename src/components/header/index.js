import React from "react";
import Logo from "../../images/logo.svg";
import LogoText from "../../images/logo-text.svg";

const Header = () => {
  return (
    <div className="h-[82px] shadow-lg flex items-center justify-between px-[42px] w-full">
      <div className="flex flex-row">
        <img src={Logo} alt="logo" className=" mr-[18px]" />
        <img src={LogoText} alt="logo-text" className="" />
      </div>
      <div className="flex flex-row">
        <p className="my-[42px] py-[12px] pl-[32px]">Home</p>
        <p className="my-[42px] py-[12px] px-[32px]">Subscribe</p>
        <div className="my-[42px] py-[12px] px-[32px] bg-[#6F5CCB] border border-black">
          Let's Discuss
        </div>
      </div>
    </div>
  );
};

export default Header;
