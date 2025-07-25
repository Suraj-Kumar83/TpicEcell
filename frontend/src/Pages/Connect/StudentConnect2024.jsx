import React from "react";
import aayushi from "../../assets/aayushi1.jpeg";
import khushi from "../../assets/khushi.jpg";
import ravi from "../../assets/ravi.jpg";
import upashna from "../../assets/upashnaB.jpeg";
import bhashkar from "../../assets/bhashkar.jpg";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const teamMembers = [
  {
    img: aayushi,
    name: "Aayushi Uniyal",
    role: "Student Head & Co-ordinator,\nStartup Management",
    email: "mailto:aayushi@email.com",
    linkedin: "https://www.linkedin.com/in/r4ravikumar",
    instagram: "https://www.instagram.com/_jha.ravi",
  },
  {
    img: khushi,
    name: "Khushi Sharma",
    role: "Student Co-ordinator,\nResearch and Development",
    email: "mailto:khushi@email.com",
    linkedin: "https://www.linkedin.com/in/r4ravikumar",
    instagram: "https://www.instagram.com/_jha.ravi",
  },
  {
    img: upashna,
    name: "Upashna Bartwal",
    role: "Student Co-ordinator,\nMedia and Branding",
    email: "mailto:upashna@email.com",
    linkedin: "https://www.linkedin.com/in/r4ravikumar",
    instagram: "https://www.instagram.com/_jha.ravi",
  },
  {
    img: ravi,
    name: "Ravi Kumar",
    role: "Student Co-ordinator,\nTechnology Development",
    email: "mailto:ravi@email.com",
    linkedin: "https://www.linkedin.com/in/r4ravikumar",
    instagram: "https://www.instagram.com/_jha.ravi",
  },
  {
    img: bhashkar,
    name: "Bhashkar Singh Rawat",
    role: "Student Co-ordinator,\nFinancial Management",
    email: "mailto:bhashkar@email.com",
    linkedin: "https://www.linkedin.com/in/r4ravikumar",
    instagram: "https://www.instagram.com/_jha.ravi",
  },
];

function StudentCoordinator2024() {
  return (
    <div className="flex flex-col items-center w-full px-6 mb-10">
      <p className="mt-10 text-base4 font-bold font-Montserrat text-center text-[16px] sm:text-[20px] leading-[135%] p-2 rounded-md bg-lightBlue mb-10">
        Core Team Members
      </p>
      <div className="flex flex-wrap gap-8 sm:gap-16 justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 w-[260px] flex flex-col items-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-[200px] h-[200px] object-cover rounded-full mb-4"
            />
            <p className="text-white font-semibold text-[16px] sm:text-[20px] text-center">
              {member.name}
            </p>
            <p className="text-white font-bold text-[13px] sm:text-[15px] text-center whitespace-pre-line mt-1">
              {member.role}
            </p>
            <div className="flex gap-4 mt-3">
              <a href={member.email}>
                <MdEmail className="text-[20px] hover:text-white/60 text-white" />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-[20px] hover:text-white/60 text-white" />
              </a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <RiInstagramFill className="text-[20px] hover:text-white/60 text-white" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentCoordinator2024;
