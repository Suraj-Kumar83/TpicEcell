// src/pages/Discover/Nodes.jsx
import React, { useState } from "react";
import Nodes24 from "./Nodes24";
import Nodes25 from "./Nodes25";

function Nodes() {
  const [selectedYear, setSelectedYear] = useState("25");

  return (
    <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center mt-10 px-6 mb-20">
      <div className="text-center">
        <p className="mt-10 text-base4 text-justify sm:text-center text-[16px] sm:text-[20px] tracking-tight leading-[135%]">
          In TPIC, the "Node" refers to specialized departments that are vital
          to the smooth operation of the Technology Pre-Incubation Cell. These
          Nodes include areas such as Media and Branding, Finance and
          Management, Technology, and Research and Development. Each Node acts
          as a pillar, overseeing specific functions like project management,
          resource coordination, mentoring, and event execution. Together, they
          ensure TPIC runs efficiently by facilitating communication, organizing
          activities, and addressing the needs of budding entrepreneurs. While
          TPIC focuses on fostering innovation and entrepreneurial growth, these
          Nodes provide essential support, aligning with TPIC's core values —
          <span className="text-base4">
            &nbsp;“Ideate, Incubate, Innovate, and Serve”
          </span>
        </p>
      </div>

      {/* Dropdown */}
      <div className="mt-6">
        <label htmlFor="nodes-year" className="text-base4 mr-3 font-medium">
          Select Nodes Year:
        </label>
        <select
          id="nodes-year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded-md border border-gray-600"
        >
          <option value="25">Nodes of 2025</option>
          <option value="24">Nodes of 2024</option>
        </select>
      </div>

      {/* Render based on selection */}
      <div className=" sm:mt-12 w-full">
        {selectedYear === "25" ? <Nodes25 /> : <Nodes24 />}
      </div>
    </div>
  );
}

export default Nodes;
