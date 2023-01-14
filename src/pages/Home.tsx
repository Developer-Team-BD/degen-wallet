import React from "react";
import dottedLine from "../assets/dottedLine.png";
import logo from "../assets/logo.png";
import logoOne from "../assets/logo 2.png";
import logoTwo from "../assets/logo 3.png";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="bg-image">
      <div className="flex items-center justify-center min-h-screen px-2">
        <div className="text-white bgGradient w-full rounded-md p-[1px] max-w-[520px] m-auto">
          <div className="bg-[#111111] py-6 md:px-8 px-3 rounded-md">
            <div className="flex items-center justify-center">
              <h1 className="md:text-[1.7rem] text-[1.35rem] font-semibold text-center">
                Bridge Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E873FF] to-[#53FFFC]">
                  Degens
                </span>
              </h1>
            </div>
            <p className="text-center my-4">
              Connect your wallet to verify your NFTs and to register your
              wallet for the Guardians of Agora airdrop!
            </p>
            <h4 className="text-center text-[1.25rem] font-semibold">
              How it works
            </h4>
            <div className="mt-4">
              <div className="bgGradient rounded-md p-[1px] md:w-[85%] m-auto">
                <div className="bg-[#111111] rounded-md">
                  <div className="flex">
                    <div className="flex items-center">
                      <div className="px-5">
                        <img src={logo} alt="l" className="w-[50px]" />
                      </div>
                      <img src={dottedLine} alt="dl" className="h-[64px]" />
                    </div>
                    <div className="text-center w-full flex items-center justify-center">
                      <h3 className="md:text-[1.25rem] font-semibold">
                        Connect your wallet.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="bgGradient rounded-md p-[1px] md:w-[85%] m-auto">
                <div className="bg-[#111111] rounded-md">
                  <div className="flex">
                    <div className="flex items-center">
                      <div className="px-5">
                        <img src={logoOne} alt="l" className="w-[50px]" />
                      </div>
                      <img src={dottedLine} alt="dl" className="h-[64px]" />
                    </div>
                    <div className="text-center w-full flex items-center justify-center">
                      <h3 className="md:text-[1.25rem] font-semibold">
                        Sign the transaction.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="bgGradient rounded-md p-[1px] md:w-[85%] m-auto">
                <div className="bg-[#111111] rounded-md">
                  <div className="flex">
                    <div className="flex items-center">
                      <div className="px-5">
                        <img src={logoTwo} alt="l" className="w-[50px]" />
                      </div>
                      <img src={dottedLine} alt="dl" className="h-[64px]" />
                    </div>
                    <div className="text-center w-full flex items-center justify-center">
                      <h3 className="md:text-[1.25rem] font-semibold">
                        Submit your wallet.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mb-4 mt-6">
              <Link to="/verify" className="btnGradient py-2 rounded-md px-4 text-base">
                Connect Wallet
              </Link>
            </div>
            <p className="text-center">
              Make sure that you connect your wallet that is holding at least 3
              Degens NFTs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
