import React from "react";
import WeWork from "../../images/we-work.svg";
import RectangleOrange from "../../images/rectangle-orange.svg";
import RectangleGreen from "../../images/rectangle-green.svg";
import RectangleBlue from "../../images/rectangle-blue.svg";
import RectangleYellow from "../../images/rectangle-yellow.svg";
import RectangleLigtYellow from "../../images/rectangle-light-yellow.svg";
import FirstBox from "../../images/first-box.svg";
import SecondBox from "../../images/second-box.svg";
import ThirdBox from "../../images/third-box.svg";
import ForthBox from "../../images/forth-box.svg";
import FifthBox from "../../images/fifth-box.svg";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div>
      <div className="h-[520px] w-full">
        <div className="mt-[140px] flex flex-col justify-center items-center">
          <p className="text-[100px]">Make one-step forward</p>
          <div className="mt-[32px] mb-[54px]  px-[255px]">
            <p className="text-center">
              Hundreds of end to end user journeys from the top grossing apps to
              reduce iteration cycles, Daily design task for others designer,
              identify trends & benchmark against your competitors and
              industry’s standard.
            </p>
          </div>
        </div>
        <div className="mx-[126px] border border-black flex justify-center p-[16px] bg-[#9C84F9] ">
          <img src={WeWork} alt="The-way-we-work" />
          <button className="bg-[#6F5CCB] border border-[#161616] px-[51px] py-[16px] ml-[42px] text-white">
            View
          </button>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="relative top-0 left-[110px]">
          <img src={FirstBox} alt="first box" />
          <Link to="/design-assignment">
            <div className="absolute left-[15%] top-[50%]">
              <p className="text-2xl font-bold text-center">
                Design <br />
                Assignment
              </p>
            </div>
          </Link>
        </div>
        <div className="relative top-0 left-[37px]">
          <img src={SecondBox} alt="second box" />
          <div className="absolute left-[20%] top-[50%] ">
            <p className="text-2xl font-bold">Screenshots</p>
          </div>
          <div className="absolute left-[8%] top-[64%] ">
            <div className="bg-[#FFCB45] px-[52px] py-[8px]">
              <p>COMING SOON</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={ThirdBox} alt="third box" />
          <div className="absolute left-[20%]  top-[50%]">
            <p className="text-2xl font-bold">Daily Design</p>
          </div>
          <div className="absolute left-[8%] top-[64%] ">
            <div className="bg-[#FF8744] px-[52px] py-[8px]">
              <p>COMING SOON</p>
            </div>
          </div>
        </div>
        <div className="relative top-0 right-[37px]">
          <img src={ForthBox} alt="forth box" />
          <div className="absolute right-[15%] top-[50%]">
            <p className="text-2xl font-bold text-center">
              UI Components
              <br /> Handbook
            </p>
          </div>
          <div className="absolute right-[8%] top-[74%] ">
            <div className="bg-[#3F6FD9] px-[52px] py-[8px]">
              <p className="text-white">COMING SOON</p>
            </div>
          </div>
        </div>
        <div className="relative top-0  right-[110px]">
          <img src={FifthBox} alt="Fifth box" />
          <div className="absolute right-[20%] top-[50%]">
            <p className="text-2xl font-bold">Interactions</p>
          </div>
          <div className="absolute right-[7%] top-[64%] ">
            <div className="bg-[#E5FE40] px-[52px] py-[8px]">
              <p className="">COMING SOON</p>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <div className="group-38-LxtcUV flex flex-col ml-[50px]">
            <img
              className="w-[420px] relative left-[30px]"
              src={RectangleGreen}
              alt="Rectangle 11"
            />
            <div className=" h-[276px] border border-black  relative ">
              <div class="label-lUy8eL valign-text-middle label jockeyone-normal-hunter-green-32px absolute">
                Daily Design
              </div>
            </div>
          </div>
          <div class="group-36-LxtcUV">
            <img
              className="relative w-[398px] right-[30px] "
              src={RectangleYellow}
              alt="Rectangle 16"
            />
            <div class=" h-[276px] border border-black relative">
              <div class="label-31hjx3 valign-text-middle label jockeyone-normal-hunter-green-32px">
                UI Components
                <br />
                Handbook
              </div>
              <div class="card-bar-31hjx3 card-bar">
                <div class="coming-soon-kXITno coming-soon">COMING SOON</div>
              </div>
            </div>
          </div>
          <div class="group-39-LxtcUV">
            <img
              class="w-[288px] relative"
              src={RectangleOrange}
              alt="Rectangle 18"
            />
            <div class="w-[288px] h-[276px] border border-black  relative">
              <div class="label-d0rD4d valign-text-middle label jockeyone-normal-hunter-green-32px">
                Screenshots
              </div>
              <div class="card-bar-d0rD4d card-bar">
                <div class="coming-soon gilroy-medium--normal-hunter-green-16px">
                  COMING SOON
                </div>
              </div>
            </div>
          </div>
          <div class="group-39-LxtcUV">
            <img
              class="w-[398px] relative"
              src={RectangleBlue}
              alt="Rectangle 18"
            />
            <div class=" h-[276px] border border-black  relative">
              <div class="label-d0rD4d valign-text-middle label jockeyone-normal-hunter-green-32px">
                Screenshots
              </div>
              <div class="card-bar-d0rD4d card-bar">
                <div class="coming-soon gilroy-medium--normal-hunter-green-16px">
                  COMING SOON
                </div>
              </div>
            </div>
          </div>
          <div class="my-item mr-[50px]">
            <img
              class="relative w-[420px]"
              src={RectangleLigtYellow}
              alt="Rectangle 18"
            />
            <div class="h-[276px] border border-black  relative">
              <div class="label-d0rD4d valign-text-middle label jockeyone-normal-hunter-green-32px">
                Screenshots
              </div>
              <div class="card-bar-d0rD4d card-bar">
                <div class="coming-soon gilroy-medium--normal-hunter-green-16px">
                  COMING SOON
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainContent;
