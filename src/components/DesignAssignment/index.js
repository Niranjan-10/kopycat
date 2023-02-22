import React from "react";
import WeWork from "../../images/we-work.svg";
import GroupCompanies from "../../images/company-group.svg";
import Delivery from "../../images/delivery.svg";
import Nykka from "../../images/nykka.svg";
import Flipkart from "../../images/flipkart.svg";
import UrbanCompany from "../../images/urban-company.svg";
import { computeHeadingLevel } from "@testing-library/react";

const DesignAssignment = () => {
  const companyImages = [Nykka, Delivery, UrbanCompany, Flipkart];

  return (
    <div className="flex flex-col mt-[210px] justify-center items-center">
      <p className="text-4xl mb-[28px]  font-bold">Let’s skip the step 1</p>
      <p className="px-[28px] text-center">
        A community project to help designers grow by offering open design
        assignments and skip the multiple level hiring process. Boosts designer
        and provides access to talent for organisations. Promotes collaboration
        and knowledge sharing.
      </p>
      <div className="mt-[80px] mb-[158px] flex">
        <button className="border border-[#161616] py-[16px] px-[50px]">
          Submit Assignment
        </button>
        <button className="border border-[#161616] text-white py-[16px] px-[50px] bg-[#6F5CCB] ml-[32px]">
          Create Assignment
        </button>
      </div>
      <div className="flex flex-col justify-start items-center w-full px-[126px]">
        <p className="mb-[35px] font-medium ">USED BY TOP COMPANY LIKE</p>
        <img src={GroupCompanies} alt="companies" />
        <div className="w-full border border-black flex justify-center mt-[82px] p-[16px] bg-[#9C84F9] ">
          <img src={WeWork} alt="The-way-we-work" />
          <button className="bg-[#6F5CCB] border border-[#161616] px-[51px] py-[16px] ml-[42px] text-white">
            View
          </button>
        </div>
      </div>
      <div className="mt-[116px]">
        <p className="text-3xl mb-[28px] text-center  font-bold">Assignments</p>
        <p className=" text-center mb-[80px]">
          Top startups in India use these assignments to test their candidates.
        </p>
      </div>
      <div className="flex mx-[80px]">
        <img src={Nykka} alt="nykka-img" />
        <img src={Delivery} className="ml-[32px]" alt="delhivery-img" />
        <img src={UrbanCompany} className="ml-[32px]" alt="urban-company-img" />
        <img src={Flipkart} className="ml-[32px]" alt="flipkart-img" />
      </div>
      <button className="border border-[#161616] py-[16px] px-[88px] mt-[32px] mb-[100px]">
        See More
      </button>
    </div>
  );
};

export default DesignAssignment;
