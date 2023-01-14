import React from "react";
import logoTwo from "../assets/logo 3.png";

const Success: React.FC = () => {
  return (
    <div className="bg-image">
      <div className="flex items-center justify-center min-h-screen px-2">
        <div className="text-white bgGradient w-full rounded-md p-[1px] max-w-[355px] m-auto">
          <div className="bg-[#111111] py-6 md:px-5 px-3 rounded-md">
            <div className="flex items-center justify-center flex-col">
              <img src={logoTwo} alt="l" className="w-[50px]"/>
                <h1 className="md:text-[1.7rem] text-[1.35rem] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#E873FF] to-[#53FFFC]">
                  Success
                </h1>
            </div>
            <p className="text-center mt-2">
              Congrats Degen! You have successfully registered your wallet for
              the Guardians of Agora airdrop!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
