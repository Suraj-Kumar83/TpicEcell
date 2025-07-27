import React, { useState } from "react";
import coordinator from "../../assets/rahul.jpg";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function SpecialMember() {
  const [isActivated, setIsActivated] = useState(true);

  const toggleQuote = () => {
    setIsActivated(!isActivated);
  };

  const members = [
    {
      img: coordinator,
      name: "Rahul Singh",
      role: "Research Assistant",
      email: "mailto:rahul@email.com",
      linkedin: "https://www.linkedin.com/in/r4ravikumar",
      instagram: "https://www.instagram.com/_jha.ravi",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full mb-10">
      <p className="mt-10 text-base4 font-bold font-Montserrat text-center text-[16px] sm:text-[20px] leading-[135%] p-2 rounded-md bg-lightBlue mb-10">
        Special Members
      </p>

      <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
        {members.map((member, index) => (
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
            <p className="text-white font-bold text-[14px] sm:text-[16px] text-center -mt-1">
              {member.role}
            </p>
            <div className="flex gap-4 mt-3">
              <a href={member.email}>
                <MdEmail className="text-[20px] hover:text-white/60 text-white" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-[20px] hover:text-white/60 text-white" />
              </a>
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill className="text-[20px] hover:text-white/60 text-white" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialMember;
