import React from "react";
import logo from "../../assets/TPIC_logo-removebg-preview.png"
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useState } from "react";
import emailjs from "emailjs-com";
import StudentConnect2024 from "./StudentConnect2024";
import FacultyCoordinator from "../../components/elements/FacultyCoordinator";
import SpecialMember from "../../components/elements/SpecialMember";
import StudentConnect2025 from "./StudentConnet2025";

function Connect() {
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
    const [selectedYear, setSelectedYear] = useState("2025");

    const studentComponents = {
    "2024": <StudentConnect2024 />,
    "2025": <StudentConnect2025 />,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_rujky1l",   
        "template_pvubics",   
        templateParams,
        "Zfhqwu-UJqX19VVIx"     
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("✅ Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
    }
  return (
    <>

       <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center item-center mt-10 sm:mt-16">
        <div className="flex flex-wrap flex-col justify-center items-center">
          <div className="flex flex-wrap flex-col justify-center items-center text-center">
            <h1 className="text-base4 font-SFPro text-[24px] sm:text-[35px] font-bold leading-[135%]">
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
    

       <div className="max-w-screen-lg mx-auto px-6 mb-20">
        <h2 className="text-center font-semibold font-Montserrat text-[20px] sm:text-[28px] text-base4 mb-6">
          Send Us a Message
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto flex flex-col gap-4 bg-slate-800 p-6 rounded-xl border-2 border-slate-300"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-3 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-base2"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-base2"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="p-3 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-base2"
          ></textarea>
          <button
            type="submit"
            className="border-2 border-base4 hover:bg-base2/60 py-2 px-8 rounded-full mt-2 text-base2 hover:text-white font-SFProDisplay font-semibold"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center mt-4 text-white font-medium">{status}</p>
          )}
        </form>
      </div>
    </>
  );
}

export default Connect;
