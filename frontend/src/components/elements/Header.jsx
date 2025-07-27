import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import TPIClogo from "../../assets/TPIC_logo-removebg-preview.png";
import { AuthContext } from "../../contexts/AuthContext";

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isDiscoverDropDownOpen, setIsDiscoverDropDownOpen] = useState(false); 
  const { user, role, logout, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleLogout = async () => {
    await logout();
    setIsSideBarOpen(true); // close sidebar
    navigate("/");
  };

  return (
    <>
      <header className="sticky z-50 top-0">
        <nav className="bg-[hsl(147,65%,8%)] backdrop-blur-[8px] px-4 lg:px-6 py-2">
          <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto">
            <Link to="/" className="flex items-center">
              <img
                src={TPIClogo}
                alt="logo"
                width={100}
                height={100}
                className="w-[40px] sm:w-[50px] md:w-[60px] object-cover rounded-full"
              />
              <div className="ml-4 hidden md:block font-poppins font-bold">
                <h1 className="text-[20px] leading-[135%] text-white">
                  Technology Pre-Incubation Cell
                </h1>
                <h2 className="text-[13px] font-semibold text-white tracking-normal -mt-[2px]">
                  Hemvati Nandan Bahuguna Garhwal University
                </h2>
              </div>
            </Link>

            <div className="block lg:hidden" onClick={toggleSideBar}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0,0,256,256">
                <g fill="#fffffa" fillRule="nonzero">
                  <g transform="scale(5.12,5.12)">
                    <path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path>
                  </g>
                </g>
              </svg>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex justify-between items-center w-full lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-bold text-[18px] font-poppins leading-[135%] lg:flex-row lg:space-x-8 lg:mt-0">
                {["", "discover/who-we-are", "initiatives", "events", "gallery", "connect"].map((path, i) => (
                  <li key={i}>
                    <NavLink
                      to={`/${path}`}
                      className={({ isActive }) =>
                        `duration-200 ${
                          isActive
                            ? "text-white font-bold inline-block after:block after:h-1 after:w-full after:bg-white after:transition-all after:mt-[10px]"
                            : "text-white font-medium"
                        } hover:text-base2 font-poppins leading-[135%] inline-block after:block after:h-1 after:w-0 after:bg-base2 after:transition-all hover:after:w-full hover:after:mt-[10px]`
                      }
                    >
                      {["Home", "E-CELL", "Initiatives", "Events", "Gallery", "Contact"][i]}
                    </NavLink>
                  </li>
                ))}
                <li>
                  {loading ? (
                    <span className="text-white">Loading...</span>
                  ) : user && role === 'admin' ? (
                    <button
                      onClick={handleLogout}
                      className="text-base5 hover:text-white duration-200 font-poppins"
                    >
                      Logout
                    </button>
                  ) : (
                    <NavLink
                      to="/admin-login"
                      className={({ isActive }) =>
                        `duration-200 ${
                          isActive
                            ? "text-white font-bold inline-block after:block after:h-1 after:w-full after:bg-white after:transition-all after:mt-[10px]"
                            : "text-white font-medium"
                        } hover:text-base2 font-poppins leading-[135%] inline-block after:block after:h-1 after:w-0 after:bg-base2 after:transition-all hover:after:w-full hover:after:mt-[10px]`
                      }
                    >
                      Admin Login
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu */}
          {!isSideBarOpen && (
            <div className="lg:hidden mt-4 px-4">
              <ul className="flex flex-col space-y-4 font-bold text-white text-[18px] font-poppins">
                <li><NavLink to="/" onClick={toggleSideBar}>Home</NavLink></li>
                <li><NavLink to="/discover/who-we-are" onClick={toggleSideBar}>E-Cell</NavLink></li>
                <li><NavLink to="/initiatives" onClick={toggleSideBar}>Initiatives</NavLink></li>
                <li><NavLink to="/events" onClick={toggleSideBar}>Events</NavLink></li>
                <li><NavLink to="/gallery" onClick={toggleSideBar}>Gallery</NavLink></li>
                <li><NavLink to="/connect" onClick={toggleSideBar}>Contact</NavLink></li>
                <li>
                  {loading ? (
                    <span>Loading...</span>
                  ) : user && role === 'admin' ? (
                    <button onClick={handleLogout}>Logout</button>
                  ) : (
                    <NavLink to="/admin-login" onClick={toggleSideBar}>Admin Login</NavLink>
                  )}
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
