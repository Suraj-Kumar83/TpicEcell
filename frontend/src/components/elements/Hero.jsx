import React from "react";
import hero from "../../assets/heroPic.svg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="">
          <img
            src={hero}
            alt="Technoloyg Pre-incubation Cell"
            className="absolute w-full h-[95vh] object-cover z-0"
          />
          <div className="relative h-[95vh] [background:linear-gradient(0.62deg,_rgba(255,_250,_250,_0),_rgba(56,_55,_55,_0.78)_34.95%,_rgba(16,_16,_16,_0.94)_50%,_rgba(10,_9,_9,_0.96)_75.04%,_#000)] inset-0 flex justify-center sm:justify-center items-center text-center px-[16px]">
            <div class="w-full flex flex-wrap flex-col justify-center items-center text-[#F2F0EF] mx-auto max-w-screen-lg">
              <h1 className="text-[56px] sm:text-[80px] md:text-[120px] font-extrabold font-SFPro text-base3">
                TPIC <span className="text-white">HNBGU</span>
              </h1>
              <h2 className="text-base3/60 text-[20px] sm:text-[28px] md:text-[42px] -mt-4 md:-mt-10 text-center">
                Technology Pre-Incubation Cell HNBGU
              </h2>
              <p className="text-white text-[20px] sm:text-[40px] font-semibold tracking-wide mt-8">
                <span className="hover:text-base2">Ideate.</span>&nbsp;<span className="hover:text-base2">Incubate.</span>&nbsp;<span className="hover:text-base2">Innovate.</span>&nbsp;<span className="hover:text-base2">Serve.</span>
              </p>
              <button className="border-2 border-base2 hover:bg-base2/60 py-2 px-8 rounded-full mt-8 text-base2 hover:text-white font-SFProDisplay font-semibold"
                onClick={() => navigate("/events")}>
               Stay Updated
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
