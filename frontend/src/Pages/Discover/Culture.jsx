import React from "react";
import CoreValues from "../../components/important/coreValues";
// import team from "../../assets/Team-amico.png"

function Culture() {
  return (
    <>
      <div className='max-w-screen-lg mx-auto flex flex-wrap justify-center item-center mt-10 px-6 mb-24'>
      <div className='flex flex-wrap flex-col justify-center item-center text-center'>
      <p className='mt-10 text-base4 text-center text-[16px] sm:text-[20px] -tracking-tight leading-[135%]'>
      TPIC has been a cornerstone of entrepreneurial culture on campus. At TPIC, we approach every initiative with passion and precision, uniting a diverse group that shares a common vision—bringing entrepreneurship to the forefront. We are committed to exploring uncharted territories and constantly innovating with impactful and improved initiatives. Our guiding principle is to nurture and grow while fostering an engaging and collaborative learning environment. To achieve this, we organize intra-team brainstorming sessions, founder interactions, team discussions, webinars, and annual trips, creating a dynamic and enriching experience for all.
      </p>
      </div>
      <div className='text-center mt-4  sm:mt-12 inline-block h-[1px] w-full bg-slate-400 rounded-lg '></div> 
      <div className='mt-8 sm:mt-12 md:mt-16'>
      <CoreValues/>
      </div>
    </div>
    </>
  );
}

export default Culture;
