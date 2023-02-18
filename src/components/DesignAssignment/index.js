import React from "react";
import WeWork from "../../images/we-work.svg";

const DesignAssignment = () => {
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
        <button className="border border-[#161616] py-[16px] px-[50px] bg-[#6F5CCB] ml-[32px]">
          Create Assignment
        </button>
      </div>
      <div className="flex flex-col justify-start items-center w-full px-[126px]">
        <p className="mb-[35px]">USED BY TOP COMPANY LIKE</p>

        <div className="w-full border border-black flex justify-center p-[16px] bg-[#9C84F9] ">
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
      <button className="border border-[#161616] py-[16px] px-[88px] mt-[32px] mb-[100px]">
        See More
      </button>
    </div>
  );
};

export default DesignAssignment;
