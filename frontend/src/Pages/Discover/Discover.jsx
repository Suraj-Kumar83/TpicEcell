import React from "react";
import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import discover from "../../assets/image.png";
import DiscoverPage from "../../components/important/DiscoverPage";
function Discover() {
  return (
    <>
      <div className="">
        <div className="">
          <img
            src={discover}
            alt="Discover"
            className="absolute w-full h-[240px] sm:h-[360px] md:h-[420px] object-cover"
          />
          <div className="relative h-[240px] sm:h-[360px] md:h-[420px] bg-gradient-to-b from-black to-base4/40 inset-0 flex justify-center sm:justify-center items-center text-center px-[16px]">
            <div class="w-full flex flex-wrap flex-col justify-center items-center text-[#F2F0EF] mx-auto max-w-screen-lg">
              <p className="text-[16px] sm:text-[33px] font-semibold tracking-widest -mb-4 sm:-mb-6">
                GET TO KNOW MORE ABOUT OUR
              </p>
              <h1 className="text-base3 text-[75px] sm:text-[167px] font-bold">
                <span className="tracking-[0.3em]">E-</span>
                <span className="">CELL</span>
              </h1>
             <p className="text-[16px] sm:text-[24px] font-semibold tracking-wide -mt-4 sm:-mt-6">
  branded as{" "}
  <span className="text-base2 text-[30px]" style={{
    display: "inline",
  }}>
    "Technology Pre-Incubation Cell"
  </span>
</p>


            </div>
          </div>
        </div>
        <div className="w-full bg-base4/60">
          <div className="px-6 py-2 sm:py-4 pb-4 flex flex-wrap max-w-screen-xl justify-evenly items-center mx-auto text-white">
            <div className="w-full flex overflow-x-auto lg:overflow-visible justify-evenly items-center">
              <ul className="flex justify-evenly items-center mt-4 font-bold text-[16px] font-poppins leading-[135%] space-x-8 lg:flex-row lg:space-x-24 lg:mt-0 whitespace-nowrap">
                <li>
                  <NavLink
                    to="who-we-are"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base4`
                    }
                  >
                    Who we are?
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="mission-and-vision"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base4`
                    }
                  >
                    Mission and Vision
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="culture"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base4`
                    }
                  >
                    Culture
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="thrust-areas"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base4`
                    }
                  >
                    Thrust Areas
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="nodes"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base4`
                    }
                  >
                    Nodes of TPIC
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Discover;
