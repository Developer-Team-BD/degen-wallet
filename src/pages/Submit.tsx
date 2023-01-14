import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Submit: React.FC = () => {
  return (
    <div className="bg-image">
      <div className="flex items-center justify-center min-h-screen px-2">
        <div className="text-white bgGradient w-full rounded-md p-[1px] max-w-[355px] m-auto">
          <div className="bg-[#111111] py-6 md:px-5 px-3 rounded-md">
            <div className="flex items-center justify-center">
              <h1 className="md:text-[1.7rem] text-[1.35rem] font-semibold text-center">
                Bridge Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E873FF] to-[#53FFFC]">
                  Degens
                </span>
              </h1>
            </div>
            <div className="my-5">
              <div className="bgGradient p-[1px] rounded-md w-[70%] m-auto relative">
                <div className="bg-[#111111] rounded-md py-1">
                  <h3 className="pl-8 md:text-[1.25rem] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E873FF] to-[#53FFFC]">
                    9pfp.......we3b
                  </h3>
                </div>
                <div className="bgGradient w-[65px] h-[65px] rounded-full flex items-center justify-center absolute top-[-12px] left-[-25px]">
                  <div className="relative bg-[#111111] w-[63px] h-[63px] rounded-full flex items-center justify-center">
                    <img src={logo} alt="l" className="w-[40px]" />
                    <div className="bg-[#111111] h-[38px] w-[10px] absolute right-[-5px]"></div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="md:text-[1.25rem] font-semibold text-center">
              Submit wallet.
            </h3>
            <div className="text-center mt-4">
              <Link to="/success" className="bg-[#2DA32D] py-2 rounded-md px-10 text-base">
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submit;
