"use client";

import React from "react";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <div className="shadow-lg p-6 rounded-md bg-white overflow-hidden">
      {/* Banner Component */}
      <div className="mt-8">
      <div data-test="tcplusBanner" className="bg-black text-center text-white">
      <div className="relative mx-auto max-w-[1600px] space-y-3 py-5 text-center">
        {/* Banner Header */}
        <div className="relative mx-auto h-[85px]">
          <div
            className="picture-container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 sm:scale-100"
            style={{ paddingBottom: 0, width: 506, height: 85 }}
          >
            <img
              className="picture-inner picture-svg"
              src="https://www.truecar.com/assets/_next/static/images/title-centered-3dafb7bfa74195039786a74199c67f39.svg"
              alt="Buy online. Have it delivered."
            />
          </div>
        </div>

        {/* Banner Body */}
        <div className="rounded-[10px] border border-gray-900 bg-[rgba(30,30,30,0.5)] relative z-[2] mx-4 max-w-full space-y-4 py-4 px-3 backdrop-blur-lg sm:px-4 min-[1540px]:mx-auto min-[1540px]:max-w-[1190px]">
          <div className="heading-2 normal-case font-[500]">
            How does Rent IT Works ?
            <div
              className="picture-container mx-2"
              style={{ paddingBottom: 0, width: 131, height: 23 }}
            >
              {/* <img
                className="picture-inner picture-svg"
                src="https://www.truecar.com/assets/_next/static/images/tc-plus-dark-theme-logo-f9a028938a01d05a636e4a5a8a188099.svg"
                alt="TrueCar Plus"
              /> */}
            </div>
          </div>

          {/* Steps */}
          <ol className="mx-auto grid max-w-[400px] gap-3 p-0 pr-3 text-left min-[1080px]:max-w-full min-[1080px]:grid-cols-[repeat(3,auto)] min-[1140px]:pr-5 min-[1540px]:pr-7">
            {[
              {
                number: "https://www.truecar.com/assets/_next/static/images/number-1-5f3f6bfeb32e9113f9a4ed55c11f4b94.svg",
                title: "You're in total control",
                description:
                  "Shop at your own pace and choose from a large selection of new and used vehicles.",
              },
              {
                number: "https://www.truecar.com/assets/_next/static/images/number-2-2db898bea518a47edfe0cbeade0a155b.svg",
                title: "Find the right financing",
                description:
                  "See your actual monthly payment and select the lender that fits you best.",
              },
              {
                number: "https://www.truecar.com/assets/_next/static/images/number-3-7df2c01b3f48551ae97e84ee42f4a600.svg",
                title: "Receive your car",
                description:
                  "Schedule delivery (for used cars only) or pickup, to begin enjoying your new ride!",
              },
            ].map((step, index) => (
              <li key={index} className="flex list-none items-start gap-2-5">
                <div
                  className="picture-container -mr-3 shrink-0 origin-top-left scale-75 min-[1080px]:mr-0 min-[1080px]:scale-100"
                  style={{ paddingBottom: 0, width: 74, height: 94 }}
                >
                  <img
                    className="picture-inner picture-svg"
                    src={step.number}
                    alt={`True Car Plus step ${index + 1}`}
                  />
                </div>
                <div className="space-y-1">
                  <div className="heading-3 normal-case font-bold ">
                    {step.title}
                  </div>
                  <p className="mt-20">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Call-to-Action */}
          <a
            className="btn btn-dark btn-lg btn-primary"
            href="/garage"
          >
            <Button className="bg-white text-black mt-16 hover:bg-white"> Buy Online</Button>
          </a>
        </div>

        
      </div>
    </div>
      </div>
    </div>
    
  );
};

export default Banner;
