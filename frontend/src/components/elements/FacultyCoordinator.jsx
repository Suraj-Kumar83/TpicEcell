import React from "react";
import coordinator from "../../assets/Teacher Coordinator.jpg";
import coordinator1 from "../../assets/rohitmehersir.jpg";
import coordinator2 from "../../assets/coordinator2.jpg";
import coordinator3 from "../../assets/coordinator3.jpg";

function FacultyCoordinator() {
  return (
    <>
      <div className="flex flex-wrap w-full mx-auto justify-center items-center mb-4 sm:mb-8">
        <p className="mt-10 text-base4 font-bold font-Montserrat text-justify text-[16px] sm:text-[20px] -tracking-tight leading-[135%] p-2 rounded-md bg-lightBlue mb-6 sm:mb-10">
          Faculty Members
        </p>

        <div className="flex flex-wrap gap-8 sm:gap-16 w-full mx-auto justify-center items-center">
          {[ 
            {
              img: coordinator,
              name: "Dr. Digar Singh",
              role: "Faculty Co-ordinator",
            },
            {
              img: coordinator1,
              name: "Dr. Rohit Meher",
              role: "Faculty Co-ordinator",
            },
            {
              img: coordinator2,
              name: "Dr. Varun Barthwal",
              role: "Faculty Co-ordinator",
            },
            {
              img: coordinator3,
              name: "Dr. Bhaskaran",
              role: "Faculty Co-ordinator",
            }
          ].map((faculty, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 w-[260px] flex flex-col items-center"
            >
              <img
                src={faculty.img}
                alt={faculty.name}
                className="w-[200px] h-[200px] object-cover rounded-full mb-4 transition duration-300"
              />
              <p className="text-white font-semibold text-[16px] sm:text-[20px] text-center">
                {faculty.name}
              </p>
              <p className="text-white font-bold text-[14px] sm:text-[16px] text-center -mt-1">
                {faculty.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FacultyCoordinator;
