import React from "react";
import Lighting from "../../images/lighting.svg";

const SubmitCard = () => {
  return (
    <div className="flex justify-center items-center bg-[#FFE1E9] py-[16px] border-y border-[#161616]  w-full">
      <img src={Lighting} alt="lighting" />
      <button className="bg-[#6F5CCB] border border-[#161616] px-[50px] py-[16px] ml-[42px] text-white">
        Try Now
      </button>
    </div>
  );
};

export default SubmitCard;
