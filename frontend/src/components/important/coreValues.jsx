import React from "react";

function CoreValues() {
  return (
    <>
      <div>
        <div className="flex flex-wrap flex-col justify-center items-center text-center max-w-screen-lg">
          <h1 className="text-base4 font-poppins text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[135%]">
            Core Values
          </h1>
          <div className="text-center mt-4 inline-block h-1 w-[240px] bg-base4 rounded-lg"></div>
        </div>
        <div className="w-full flex flex-wrap flex-col justify-center items-center mt-8 ">
          <ul className="text-white text-justify text-[16px] sm:text-[20px] -tracking-tight leading-[135%]">
            <li className=" text-base4 font-semibold text-[18px] sm:text-[24px]">
              Innovation: {" "}
              <span className="text-base4 font-normal  text-[16px] sm:text-[20px] -tracking-tight leading-[135%">
                Innovation is about creating space for fresh ideas and creative
                problem-solving. By encouraging new perspectives and bold
                approaches, we open doors to breakthroughs that can transform
                the future.
              </span>
            </li>
            <li className="mt-8 text-base4 font-semibold text-[18px] sm:text-[24px]">
              Collaboration: {" "}
              <span className="text-base4 font-normal  text-[16px] sm:text-[20px] -tracking-tight leading-[135%">
                Collaboration is about building strong teamwork and meaningful
                connections between entrepreneurs, mentors, and industry
                experts. By sharing knowledge and resources, we create a network
                that drives growth, innovation, and mutual success.
              </span>
            </li>
            <li className="mt-8 text-base4 font-semibold text-[18px] sm:text-[24px]">
              Integrity: {" "}
              <span className="text-base4 font-normal  text-[16px] sm:text-[20px] -tracking-tight leading-[135%">
                Integrity means upholding transparency and adhering to ethical
                standards in every action. By staying honest and accountable, we
                ensure trust and fairness in all our activities, fostering a
                strong and principled foundation.
              </span>
            </li>
            <li className="mt-8 text-base4 font-semibold text-[18px] sm:text-[24px]">
              Support: {" "}
              <span className="text-base4 font-normal  text-[16px] sm:text-[20px] -tracking-tight leading-[135%">
                Support means offering a wide range of resources, mentorship,
                and guidance to help individuals succeed. By providing these
                tools, we ensure that everyone has the help they need to reach
                their goals.
              </span>
            </li>
            <li className="mt-8 text-base4 font-semibold text-[18px] sm:text-[24px]">
              Adaptability: {" "}
              <span className="text-base4 font-normal  text-[16px] sm:text-[20px] -tracking-tight leading-[135%">
                Adaptability means staying flexible and ready to adjust to
                changing technologies and market trends. It’s about quickly
                responding to new challenges and opportunities, ensuring
                continuous growth and relevance in a dynamic environment.
              </span>
            </li>
            <li className="mt-8 text-base4 font-semibold text-[18px] sm:text-[24px]">
              Sustainability: {" "}
              <span className="text-base4 font-normal  text-[16px] sm:text-[20px] -tracking-tight leading-[135%">
                Sustainability focuses on encouraging practices that are both
                environmentally responsible and economically viable. By
                balancing resource use and long-term growth, we aim to create
                solutions that benefit the planet and future generations.
              </span>
            </li>
            <li className="mt-8 text-base4 font-semibold text-[18px] sm:text-[24px]">
              Excellence: {" "}
              <span className="text-base4 font-normal  text-[16px] sm:text-[20px] -tracking-tight leading-[135%">
                Excellence means aiming for the highest standards throughout the
                incubation process. We focus on quality in every aspect,
                ensuring that our initiatives and support empower entrepreneurs
                to achieve their fullest potential.
              </span>
            </li>
            <li className="mt-8 text-base4 font-semibold text-[18px] sm:text-[24px]">
              Inclusivity: {" "}
              <span className="text-base4 font-normal  text-[16px] sm:text-[20px] -tracking-tight leading-[135%">
                Inclusivity means providing equal opportunities for all
                participants, regardless of their background. By embracing
                diversity and fostering a welcoming environment, we create a
                community where everyone can contribute and thrive.
              </span>
            </li>
            <li className="mt-8 text-base4 font-semibold text-[18px] sm:text-[24px]">
              Resilience: {" "}
              <span className="text-base4 font-normal  text-[16px] sm:text-[20px] -tracking-tight leading-[135%">
                Resilience is about fostering persistence and the strength to
                overcome challenges. By promoting a mindset of determination, we
                empower individuals to face obstacles head-on and emerge
                stronger through adversity.
              </span>
            </li>
            <li className="mt-8 text-base4 font-semibold text-[18px] sm:text-[24px]">
              Customer-Centricity: {" "}
              <span className="text-base4 font-normal  text-[16px] sm:text-[20px] -tracking-tight leading-[135%">
                Customer-centricity involves prioritizing the understanding of
                customer needs and preferences. By addressing these needs
                effectively, we enhance satisfaction and build lasting
                relationships, ultimately driving loyalty and success for our
                business.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CoreValues;
