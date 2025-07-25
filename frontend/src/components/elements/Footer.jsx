import React from "react";
import logo from "../../assets/c3 copy.png";
import collegeLogo from "../../assets/HNBG-new-logo 1.png";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <>
      <footer className="bg-[hsl(147,65%,8%)] w-full mt-[40px] sm:mt-[80px] px-6">
        <div className="mx-auto max-w-screen-xl pt-10 pb-10">
          <div className="flex flex-wrap justify-between mx-auto gap-8 grid-flow-row">
            <nav className="mb-4">
              <div>
                <h2 className="text-base2 font-poppins font-semibold text-[16px] sm:text-[20px] mb-2">
                  Connect with us
                </h2>
                <h2 className="text-white font-poppins text-[14px] sm:text-[16px] font-semibold leading-[135%]">
                  Technology Pre-Incubation Cell
                </h2>
                <p className="text-white font-poppins text-[14px] sm:text-[16px] font-semibold leading-[135%]">
                  Hemvati Nandan Bahuguna Garhwal University, <br /> 1st Floor, USIC Building, Chauras
                  Campus, <br /> Srinagar (Garhwal), Uttarakhand-246174
                </p>
              </div>
            </nav>
            <nav className="mb-4">
              <h2 className="text-base2 font-poppins font-bold text-[16px] sm:text-[20px] mb-2">
                Discover
              </h2>
              <ul className="text-white font-poppins text-[14px] sm:text-[16px] font-medium leading-[135%]">
                <li>
                  <NavLink
                    to="discover/mission-and-vision"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Mission and Vision
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="events"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="initiatives"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Initiatives
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="gallery"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="learn"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Learn
                  </NavLink>
                </li>
              </ul>
            </nav>
            <nav className="mb-4">
              <h2 className="text-base2 font-poppins font-bold text-[16px] sm:text-[20px] mb-2">
                Important Links
              </h2>
              <ul className="text-white font-poppins text-[14px] sm:text-[16px] font-medium leading-[135%]">
                <li>
                  <NavLink
                    to="discover/who-we-are"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Who we are?
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="discover/thrust-areas"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    How TPIC works
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="team"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Meet the Team
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="discover/partners-and-collaborators"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Partners and Collaborators
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="connect"
                    className={({ isActive }) =>
                      `duration-200 ${
                        isActive ? "text-base2 font-bold" : "text-white"
                      } hover:text-base2`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>
            <nav className="mb-4">
              <h2 className="text-base2 font-poppins font-bold text-[16px] sm:text-[20px] mb-2">
                Follow us on
              </h2>
              <div className="flex justify-center gap-6 mt-4">
      <a
        href="https://www.facebook.com/share/19HokDJ3RN/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-base2 transition-colors duration-300"
      >
        <FaFacebook className="w-6 h-6 sm:w-8 sm:h-8" />
      </a>

      <a
        href="https://www.instagram.com/tpic_hnbgu?igsh=MWdyaGt0NXhtdG5mOA=="
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-base2 transition-colors duration-300"
      >
        <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8" />
      </a>

      <a
        href="https://www.linkedin.com/in/tpichnbgu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-base2 transition-colors duration-300"
      >
        <FaTwitter className="w-6 h-6 sm:w-8 sm:h-8" />
      </a>

      <a
        href="https://www.linkedin.com/in/tpichnbgu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-base2 transition-colors duration-300"
      >
        <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
      </a>
    </div>
            </nav>
          </div>
          <div className=" flex flex-wrap flex-col justify-center items-center text-center mt-8">
            <a href="https://www.hnbgu.ac.in/">
              <img
                src={collegeLogo}
                alt="College Logo"
                width={100}
                height={100}
                className="flex w-[32px] sm:w-[48px] object-cover rounded-full mb-2"
              />
            </a>
            <h3 className="text-white/50 font-poppins text-[12px] font-semibold leading-[135%]">
              Copyright 2024 TPIC HNBGU. All Rights Reserved
            </h3>
            <h3 className="text-white/50 font-poppins text-[12px] font-semibold leading-[135%]">
              Designed and Developed by TPIC Tech Team
            </h3>
            <h3 className="text-white/50 font-poppins text-[12px] font-semibold leading-[100%] mt-4 ">
              Credits:  <br /> <span className="font-bold text-white">Dr. Alok Negi </span> (Logo Design) <br /> <span className="font-bold text-white">Graphikx Studio </span> (UI Design)
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
