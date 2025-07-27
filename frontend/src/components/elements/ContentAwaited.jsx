import React from "react";
import rocket from "../../assets/TPIC_logo-removebg-preview.png";
function ContentAwaited() {
  return (
    <>
      <div className="w-full flex flex-wrap flex-col justify-center items-center h-[80vh]">
        <div>
          <img
            src={rocket}
            alt="Coming Soon"
            width={360}
            height={360}
            className="object-cover w-[120px]"
          />
        </div>
        <div className="w-full flex flex-wrap mt-8 justify-center items-center">
          <h1 className="text-base2 font-Montserrat font-bold text-[24px] sm:text-[32px] text-center">
            Content Awaited
          </h1>
        </div>
        <div className="w-full flex flex-wrap mt-[4px] justify-center items-center">
          <h1 className="text-white font-Montserrat font-medium text-[20px] text-center leading-[120%] tracking-tight">
            We are working on something amazing. Stay Tuned for further
            updates...
          </h1>
        </div>
        <div className="w-full flex flex-wrap mt-[8px] justify-center items-center">
          <h1 className="text-gray-400 font-Montserrat font-medium text-[12px] sm:text-[16px] text-center leading-[120%] tracking-tight">
            We’re committed to quality and want to ensure that every piece of
            content we share meets our high standards. We’re currently crafting
            this section to provide you with valuable insights and resources.
            Our team is dedicated to delivering top-notch content that will
            enhance your experience and knowledge. This section will be filled
            with informative and engaging material soon.
          </h1>
        </div>
      </div>
    </>
  );
}

export default ContentAwaited;
