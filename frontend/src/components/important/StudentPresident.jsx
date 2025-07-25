import React from "react";
import coordinator from "../../assets/aayushi1.jpeg";
import analyst from "../../assets/rahul.jpg";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function StudentPresident() {
  return (
    <div className="flex flex-wrap w-full mx-auto  justify-center items-center mb-16 ">
      <p className="text-base4 font-bold text-[16px] sm:text-[30px] mb-8">
        Core Members
      </p>
      <div className="flex flex-wrap gap-8 sm:gap-16 w-full mx-auto  justify-center items-center">
        <div className="flex flex-wrap flex-col justify-center items-center">
          <img
            src={analyst}
            alt="Research and Development"
            width={240}
            height={240}
            className="w-[120px] sm:w-[160px] rounded-md mb-2 "
          />
          <p className="text-base4 font-semibold text-[16px] sm:text-[20px]">
            Rahul Singh
          </p>
          <p className="text-base4 font-semibold text-[14px] sm:text-[16px] -mt-1">
            Reseach Assistant
          </p>
          <div className="flex flex-wrap gap-4  mt-2">
            <a href="https://www.linkedin.com/in/rahul-singh-rs1106?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><FaLinkedin className="text-[20px] hover:text-base4/60 text-base4" /></a>
            <a href="https://www.instagram.com/ray_eternal_life?igsh=eTlydmdyaHdjMmls"><RiInstagramFill className="text-[20px] hover:text-base4/60 text-base4" /></a>
          </div>
        </div>
        <div className="flex flex-wrap flex-col justify-center items-center">
          <img
            src={coordinator}
            alt="Research and Development"
            width={240}
            height={240}
            className="w-[120px] sm:w-[160px] rounded-md mb-2 "
          />
          <p className="text-base4 font-semibold text-[16px] sm:text-[20px]">
            Aayushi uniyal
          </p>
          <p className="text-base4 font-semibold text-[14px] sm:text-[16px] -mt-1">
            Student Head
          </p>
          <div className="flex flex-wrap gap-4  mt-2">
            <a href="https://www.linkedin.com/in/aayushii-uniyal-4b25b8212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className="text-[20px] hover:text-base4/60 text-base4" /></a>
            <a href="https://www.instagram.com/aayuuniyaal/"><RiInstagramFill className="text-[20px] hover:text-base4/60 text-base4" /></a>
          </div>
        </div>
      </div>
      <div className='text-center mt-4  sm:mt-12 inline-block h-[1px] w-full bg-slate-400 rounded-lg '></div>
    </div>
  );
}

export default StudentPresident;
