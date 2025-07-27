import React from "react";
import coordinator from "../../assets/khushi.jpg";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function ResearchDevelopment() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center item-center mt-10">
        <div className="flex flex-wrap flex-col justify-center item-center text-center">
          <div className="flex flex-wrap flex-col justify-center items-center text-center">
            <h1 className="text-base4 font-SFPro text-[20px] sm:text-[24px] font-bold leading-[135%]">
              Research & Development (R&D)
            </h1>
            <div className="text-center mt-4 inline-block h-[2px] w-[160px] bg-base4 rounded-lg"></div>
          </div>
          {/* <img src={team} alt="statrtup" width={1200} height={1200} className="w-[360px] items-center" /> */}
          <p className="mt-4 text-base4 text-justify text-[14px] sm:text-[18px] -tracking-tight leading-[135%]">
            Research and Development plays a vital role in a Technology
            Pre-Incubation Cell by fostering innovation, providing technical
            guidance, and developing proof-of-concept solutions. It helps
            identify viable ideas, conduct feasibility studies, and create
            prototypes that enhance the potential of early-stage startups. R&D
            also aids in securing intellectual property, reducing technical
            risks, and aligning innovations with market trends. By offering
            access to technical expertise, advanced tools, and collaborative
            networks, R&D helps startups refine their products and business
            models, making them more competitive and increasing their chances of
            success during the incubation phase.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap flex-col w-full justify-center items-center ">
          <p className="text-base4 font-semibold text-[16px] sm:text-[18px] mb-4">
            Student Co-ordinators
          </p>
          <img
            src={coordinator}
            alt="Research and Development"
            width={240}
            height={240}
            className="w-[120px] sm:w-[160px] rounded-md mb-2 "
          />
          <p className="text-base4 font-semibold text-[16px] sm:text-[20px]">
            Khushi Sharma
          </p>
          <p className="text-bas4 font-semibold text-[14px] sm:text-[16px] -mt-1">
            Co-ordinator
          </p>
          <div className="flex flex-wrap gap-4  mt-2">
            <a href="https://www.linkedin.com/in/khushi-sharma-191799321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><FaLinkedin className="text-[20px] hover:text-base4/60 text-base4" /></a>
            <a href="https://www.instagram.com/_khushiii002"><RiInstagramFill className="text-[20px] hover:text-base4/60 text-base4" /></a>
          </div>
        </div>
        <div className='text-center mt-4  sm:mt-12 inline-block h-[1px] w-full bg-slate-400 rounded-lg '></div>
      </div>
    </>
  );
}

export default ResearchDevelopment;
