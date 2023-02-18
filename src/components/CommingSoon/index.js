import { computeHeadingLevel } from "@testing-library/react";
import React from "react";

const ComingSoon = ({ title }) => {
  return (
    <div className="flex flex-col justify-center w-full items-center">
      <p className="mt-[210px] text-3xl font-bold">{title}</p>
      <p className="mt-[8px]">(Coming Soon)</p>
      <p className="mt-[24px] text-center px-[260px]">
        Save time by studying top-grossing app user journeys for common flows
        such as Onboarding, Search/Filters, Checkout, Gamification, and more.
        Gain insights, reduce iteration cycles, and benchmark against
        competitors and industry standards.
      </p>
      <div
        className="mt-[100px] w-screen relative"
        style={{
          background: "black",
          color: "black",
          height: "1px",
        }}
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[-34px]  border border-black bg-white flex justify-between">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("ello");
            }}
          >
            <input
              className="my-[18px] ml-[18px] mr-[18px] w-[240px] border-none focus:outline-none"
              placeholder="Please enter your email address"
              type="email"
            />
            <button
              className="bg-[#6F5CCB] border  border-[#161616]  px-[51px] py-[16px]  my-1 mr-1 text-white"
              type="submit"
            >
              Notify me
            </button>
          </form>
        </div>
      </div>
      <div className="my-[80px]">
        <p className="">-_notify me when {title} is launched_-</p>
      </div>
    </div>
  );
};

export default ComingSoon;
