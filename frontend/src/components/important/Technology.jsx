import React from "react";
import coordinator from "../../assets/ravi.jpg";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
function Technology() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center item-center mt-10">
        <div className="flex flex-wrap flex-col justify-center item-center text-center">
          <div className="flex flex-wrap flex-col justify-center items-center text-center">
            <h1 className="text-base4 font-SFPro text-[20px] sm:text-[24px] font-bold leading-[135%]">
              Technology Development (Web Cell)
            </h1>
            <div className="text-center mt-4 inline-block h-[2px] w-[160px] bg-base4 rounded-lg"></div>
          </div>
          {/* <img src={team} alt="statrtup" width={1200} height={1200} className="w-[360px] items-center" /> */}
          <p className="mt-4 text-base4 text-justify text-[14px] sm:text-[18px] -tracking-tight leading-[135%]">
            The Technology Development Department plays a pivotal role in
            driving innovation and advancing the mission of the cell. By
            leveraging cutting-edge tools and platforms, it supports the
            ideation, development, and deployment of tech-driven solutions. The
            department fosters collaboration between innovators, entrepreneurs,
            and developers, ensuring seamless integration of technology into
            various initiatives. Through continuous research and development, it
            enhances the cell's ability to solve real-world challenges, driving
            progress in both internal and external projects. Additionally, the
            department provides vital technical support for events, workshops,
            and collaborations, empowering the e-cell to remain at the forefront
            of technological advancements while achieving its mission and goals.
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
            Ravi Kumar
          </p>
          <p className="text-base4 font-semibold text-[14px] sm:text-[16px] -mt-1">
            Co-ordinator
          </p>
          <div className="flex flex-wrap gap-4  mt-2">
            <a href="https://www.linkedin.com/in/r4ravikumar"><FaLinkedin className="text-[20px] hover:text-base4/60 text-base4" /></a>
            <a href="https://www.instagram.com/_jha.ravi"><RiInstagramFill className="text-[20px] hover:text-base4/60 text-base4" /></a>
          </div>
        </div>
        <div className="text-center mt-4  sm:mt-12 inline-block h-[1px] w-full bg-slate-400 rounded-lg "></div>
      </div>
    </>
  );
}

export default Technology;
