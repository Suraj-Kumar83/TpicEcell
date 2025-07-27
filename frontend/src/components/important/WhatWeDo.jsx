import React from 'react'
import { Link } from "react-router-dom";
import ideas from "../../assets/ideate.gif";

function WhatWeDo() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center  mb-12 max-w-screen-lg mx-auto px-[24px] pb-12">
        <div className=" flex flex-wrap flex-col justify-center items-center">
          <h1 className="text-base4 text-[40px] md:text-[56px] font-bold font-poppins">
            What we do?
          </h1>
          <p className="text-black text-[16px] md:text-[20px] leading-[135%] mt-4 text-center">
          Through the vision of 'Ideate, Incubate, Innovate, and Serve,' TPIC HNBGU actively organizes initiatives and events that fuel entrepreneurial growth and foster a vibrant culture of startups on a path to success.
          </p>
          <div className='flex flex-wrap w-full justify-evenly items-center text-center mt-10 gap-4'>
            <div className='w-[360px] sm:w-[280px] md:w-[220px] h-[360px] flex flex-wrap flex-col justify-center items-center  shadow-md shadow-slate-500 rounded-md font-Montserrat text-black/80 bg-slate-800 pt-4 pb-8 px-4'>
              <img src={ideas} alt="Ideate" width={100} height={100} className='w-[120px]' />
              <h1 className='text-[24px] font-poppins font-semibold text-white leading-[135%] mt-4'>
                Ideate
              </h1>
              <p className='text-[14px] font-poppins text-white leading-[135%] mt-4'>
              Ideation is the creative process of generating, developing, and refining new ideas. 
              </p>
              <button className='bg-slate-600 text-white py-1 px-6 mt-4 rounded-md hover:bg-black/80'>
                <Link to="discover/who-we-are">know more &rarr;</Link>
              </button>
            </div>
            <div className='w-[360px] sm:w-[280px] md:w-[220px] h-[360px] flex flex-wrap flex-col justify-center items-center  shadow-md shadow-slate-500 rounded-md font-Montserrat text-black/80 bg-slate-800 pt-4 pb-8 px-4'>
              <img src={ideas} alt="Ideate" width={100} height={100} className='w-[120px]' />
              <h1 className='text-[24px] font-poppins font-semibold text-white leading-[135%] mt-4'>
                Incubate
              </h1>
              <p className='text-[14px] text-white font-normal leading-[135%] mt-4'>
              To incubate means to provide the necessary environment for ideas to grow and develop. 
              </p>
              <button className='bg-slate-600 text-white py-1 px-6 mt-4 rounded-md hover:bg-black/80'>
                <Link to="discover/who-we-are">know more &rarr;</Link>
              </button>
            </div>
            <div className='w-[360px] sm:w-[280px] md:w-[220px] h-[360px] flex flex-wrap flex-col justify-center items-center  shadow-md shadow-slate-500 rounded-md font-Montserrat text-black/80 bg-slate-800 pt-4 pb-8 px-4'>
              <img src={ideas} alt="Ideate" width={100} height={100} className='w-[120px]' />
              <h1 className='text-[24px] font-poppins font-semibold text-white leading-[135%] mt-4'>
                Innovate
              </h1>
              <p className='text-[14px] text-white font-normal leading-[135%] mt-4'>
              Innovation is the act of turning creative ideas into practical solutions that bring real value.  
              </p>
              <button className='bg-slate-600 text-white py-1 px-6 mt-4 rounded-md hover:bg-black/80'>
                <Link to="discover/who-we-are">know more &rarr;</Link>
              </button>
            </div>
            <div className='w-[360px] sm:w-[280px] md:w-[220px] h-[360px] flex flex-wrap flex-col justify-center items-center  shadow-md shadow-slate-500 rounded-md font-Montserrat text-black/80 bg-slate-800 pt-4 pb-8 px-4'>
              <img src={ideas} alt="Ideate" width={100} height={100} className='w-[120px]' />
              <h1 className='text-[24px] font-poppins font-semibold text-white leading-[135%] mt-4'>
                Serve
              </h1>
              <p className='text-[14px] text-white font-normal leading-[135%] mt-4'>
              To serve means to actively support and guide entrepreneurs and ideas into viable businesses.
              </p>
              <button className='bg-slate-600 text-white py-1 px-6 mt-4 rounded-md hover:bg-black/80'>
                <Link to="discover/who-we-are">know more &rarr;</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeDo