import React from "react";
import coordinator from "../../assets/mansi.jpg";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function EventPR25() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center item-center mt-10">
        <div className="flex flex-wrap flex-col justify-center item-center text-center">
          <div className="flex flex-wrap flex-col justify-center items-center text-center">
            <h1 className="text-base4 font-SFPro text-[20px] sm:text-[24px] font-bold leading-[135%]">
              Event & Public Relation 
            </h1>
            <div className="text-center mt-4 inline-block h-[2px] w-[160px] bg-base4 rounded-lg"></div>
          </div>
          {/* <img src={team} alt="statrtup" width={1200} height={1200} className="w-[360px] items-center" /> */}
          <p className="mt-4 text-base4 text-justify text-[14px] sm:text-[18px] -tracking-tight leading-[135%]">
           The Event and PR Team is responsible for conceptualizing, organizing, and executing events that align with the E-Cell’s mission of promoting entrepreneurship. This role also involves building strong relationships with external stakeholders and managing the public image of the cell.
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
            className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-full object-cover mb-2 "
          />
          <p className="text-base4 font-semibold text-[16px] sm:text-[20px]">
            Mansi Khugshal
          </p>
          <p className="text-bas4 font-semibold text-[14px] sm:text-[16px] -mt-1">
            Co-ordinator
          </p>
          <div className="flex flex-wrap gap-4  mt-2">
            <a href="https://www.linkedin.com/in/mansi-khugshal "><FaLinkedin className="text-[20px] hover:text-base4/60 text-base4" /></a>
          </div>
        </div>
        <div className='text-center mt-4  sm:mt-12 inline-block h-[1px] w-full bg-slate-400 rounded-lg '></div>
      </div>
    </>
  );
}

export default EventPR25
