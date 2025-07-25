import React from 'react'
import coordinator from "../../assets/upashnaB.jpeg"
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function MediaandBranding() {
  return (
    <>
      <div className='max-w-screen-lg mx-auto flex flex-wrap justify-center item-center mt-10'>
      <div className='flex flex-wrap flex-col justify-center item-center text-center'>
      <div className='flex flex-wrap flex-col justify-center items-center text-center'>
      <h1 className='text-base4 font-SFPro text-[20px] sm:text-[24px] font-bold leading-[135%]'>
        Media and Branding
      </h1>
      <div className='text-center mt-4 inline-block h-[2px] w-[160px] bg-base4 rounded-lg'></div>
      </div>
      {/* <img src={team} alt="statrtup" width={1200} height={1200} className="w-[360px] items-center" /> */}
      <p className='mt-4 text-base4 text-justify text-[14px] sm:text-[18px] -tracking-tight leading-[135%]'>
      Media and Branding plays a very important role in fostering innovation and promoting cells initiatives.Through various social media platforms,it helps in spreading about the e-cells activities,events and success stories. It drives awareness, build the e-cell's brand, and engage the community. It also attract members and sponsors, promote events, and share educational content, fostering innovation and growth. Through strategic campaigns, it enhance visibility and support the e-cell's mission and objectives.
      </p>
      </div>
      <div className='mt-12 flex flex-wrap flex-col w-full justify-center items-center '>
        <p className='text-base4 font-semibold text-[16px] sm:text-[18px] mb-4'>
          Student Co-ordinators
        </p>
        <img src={coordinator} alt="Research and Development" width={240} height={240} className='w-[120px] sm:w-[160px] rounded-md mb-2 ' />
        <p className='text-base4 font-semibold text-[16px] sm:text-[20px]'>
          Upashna Bartwal
        </p>
        <p className='text-base4 font-semibold text-[14px] sm:text-[16px] -mt-1'>
          Co-ordinator
        </p>
        <div className="flex flex-wrap gap-4  mt-2">
            <a href="http://Linkedin.com/in/upashna-bartwal-9baab1303"><FaLinkedin className="text-[20px] hover:text-base4/60 text-base4" /></a>
            <a href="https://www.instagram.com/upashna_bartwal"><RiInstagramFill className="text-[20px] hover:text-base4/60 text-base4" /></a>
          </div>
      </div>
      {/* <div className='text-center mt-4  sm:mt-12 inline-block h-[1px] w-full bg-slate-400 rounded-lg '></div> */}
    </div>
    </>
  )
}

export default MediaandBranding