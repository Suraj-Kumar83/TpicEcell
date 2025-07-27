import React from "react";
import teacher from "../../assets/Teacher Coordinator.jpg";

function Message() {
  return (
    <>
      <div>
        <div className="flex flex-wrap flex-col justify-center items-center text-center max-w-screen-lg">
          <h1 className="text-base4 font-SFPro text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[135%]">
            Message from the desk
          </h1>
          <div className="text-center mt-4 inline-block h-1 w-[320px] bg-base4 rounded-lg"></div>
        </div>
        <div className="w-full flex flex-wrap flex-col justify-center items-center mt-16 rounded-xl border-2 border-base4 py-16 px-4 sm:px-10 ">
          <div className="flex flex-wrap flex-col justify-center items-center">
            <img
              src={teacher}
              alt="Teacher Coordinator"
              width={250}
              height={250}
              className="w-[80px] sm:w-[160px] object-cover rounded-full border-4 border-base4"
            />
            <div className="mt-4 flex flex-wrap flex-col justify-center items-center">
              <h2 className="text-[18px] font-SFProDisplay  font-bold leading-[135%] text-base4">
                Dr. Digar Singh
              </h2>
              <h2 className="text-[16px] font-SFProDisplay  font-semibold leading-[135%] text-white">
                Faculty Co-ordinator, TPIC
              </h2>
            </div>
          </div>
          <div className=" flex flex-wrap pt-8">
            <h2 className="text-[16px] sm:text-[20px] md:text-[24px] font-Montserrat font-bold leading-[135%] text-base4 text-center">
              Ideate. Incubate. Inovtate. Serve
            </h2>
            <p className="text-[16px] sm:text-[20px] font-Montserrat font-normal leading-[135%] text-base4 text-justify mt-2">
              As one of the founding Coordinators of the Technology
              Pre-Incubation Cell (TPIC), I am filled with enthusiasm for this
              exhilarating journey of fostering innovation, entrepreneurship,
              and forward-thinking at HNB Garhwal University. Since TPIC’s
              formal establishment in February 2024, we have already marked
              significant achievements. <br />
              One of our most notable milestones has been the signing of two
              MoUs with iHUB DivyaSampark and IIT Roorkee, both Section 8
              companies. These partnerships cement our collaboration on
              Cyber-Physical Systems (CPS) innovations, focusing on cutting-edge
              fields such as Machine Learning (ML) and the Internet of Things
              (IoT). By working together, we aim to create avenues for
              entrepreneurship development and advanced training for students,
              bringing practical and meaningful change to areas that are
              essential for our region's growth—specifically, ed-tech,
              healthcare, climate change, and natural disaster forecasting.
              <br />
              &#34; What led to the formation of this vision for TPIC was a desire to
              bridge the gap between academic learning and real-world
              application. There is a growing need for practical solutions,
              especially in regions like ours, where technology can play a
              crucial role in addressing pressing societal challenges. From the
              beginning, our focus has been on scouting CPS-related ideas for
              potential start-ups and existing industries, as well as tapping
              into government initiatives like the NIDHI grants, BioNEST,
              BioEnabler, and the Biotechnology Ignition Grant from BIRAC. &#34;
              <br />
              This effort is driven by a passionate team of faculty and students
              who share a common goal: to cultivate a vibrant ecosystem of
              innovation that empowers the next generation of entrepreneurs and
              leaders in CPS. Together, we are not only creating opportunities
              but building a future-oriented foundation for
              innovation in this region. <br />
            </p>
            <h2 className="mt-12 text-white font-semibold font-Montserrat text-[18px]">
              Dr. Digar Singh
              <br />
              Faculty Co-ordinator, TPIC
            </h2>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default Message;
