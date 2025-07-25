import React  from "react";
import FacultyCoordinator from "../../components/elements/FacultyCoordinator";
import StudentConnect2024 from "../Connect/StudentConnect2024";
import StudentConnect2025 from "../Connect/StudentConnet2025";
import SpecialMember from "../../components/elements/SpecialMember";
import StudentMembers from "../../components/elements/StudentMembers";
import { useState } from "react";

function team() {

   const [selectedYear, setSelectedYear] = useState("2025");
    const studentComponents = {
    "2024": <StudentConnect2024 />,
    "2025": <StudentConnect2025 />,
  };

  return (
    <>
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center item-center mt-10 sm:mt-16">
        <div className="flex flex-wrap flex-col justify-center items-center">
          <div className="flex flex-wrap flex-col justify-center items-center text-center">
            <h1 className="text-base4 font-SFPro text-[24px] sm:text-[28px] font-bold leading-[135%]">
              Team Member
            </h1>
            <h3 className="text-base4 font-SFPro text-[16px] sm:text-[20px] sm:-mt-1 font-bold leading-[135%]">
              (Session 2025-26)
            </h3>
            <div className="text-center mt-4 inline-block h-[4px] w-[180px] sm:w-[240px] bg-base2 rounded-lg"></div>
          </div>
          <div className="flex flex-wrap justify-center items-center mt-4 sm:mt-12">
            <FacultyCoordinator/>
            <SpecialMember/>
             <div className="w-full flex justify-center items-center my-6">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="p-2 rounded-md border-2 border-base2 text-base4 bg-white font-semibold"
              >
                <option value="2025">Students Team - 2025</option>
                <option value="2024">Students Team- 2024</option>
              </select>
            </div>
                {studentComponents[selectedYear]}
          </div>
        </div>
      </div>
    </>
  );
}

export default team;
