import React from 'react';

function ThrustAreas() {
  const thrustAreas = [
    {
      title: 'Climate Change',
      description:
        'Startups tackling climate change focus on renewable energy, carbon capture, and energy-efficient technologies, promoting sustainable materials and solutions that reduce emissions, enhance energy security, and support green jobs.',
    },
    {
      title: 'Food Processing',
      description:
        'Food processing startups improve food security and reduce waste by developing preservation, packaging, and processing technologies, adding value to agricultural products, and creating market opportunities while promoting sustainability.',
    },
    {
      title: 'Med-Tech & Ed-Tech',
      description:
        'Med-tech and ed-tech startups improve rural life with affordable diagnostics, telemedicine, wearable health monitors, and e-learning platforms, bridging healthcare and education gaps in remote and underserved areas.',
    },
    {
      title: 'Waste Processing',
      description:
        'Waste processing startups can innovate by recycling waste into valuable resources, using technologies like waste-to-energy, biogas, and upcycling, while promoting efficient waste collection and sustainable management, especially in remote areas.',
    },
    {
      title: 'Logistics & Supplies in remote areas',
      description:
        'Startups can address remote logistics challenges through drone delivery, autonomous transport, and decentralized supply chains, using blockchain for transparency and building efficient distribution networks for last-mile delivery in hard-to-reach areas.',
    },
    {
      title: 'Cloud Bursting',
      description:
        'Cloud bursting mitigation involves early warning systems, water management, disaster response technologies, and resilient infrastructure. Startups can use AI, IoT, and satellite data to predict and manage cloudburst impacts in vulnerable regions.',
    },
    {
      title: 'Water Resource Management',
      description:
        'Water resource management emphasizes sustainable use in water-scarce regions through rainwater harvesting, smart irrigation, recycling, river rejuvenation, groundwater recharge, and IoT-based monitoring for efficient conservation and management.',
    },
    {
      title: 'Eco-Tourism',
      description:
        'Eco-tourism promotes sustainable travel that preserves nature and supports communities through renewable energy, waste management, digital platforms for responsible tourism, IoT monitoring, and eco-friendly accommodations.',
    },
    {
      title: 'Hill Agriculture',
      description:
        'Hill agriculture faces challenges like tough terrain and limited resources. Startups can boost productivity with agritech solutions like precision farming, water-efficient irrigation, and better supply chains for sustainable farming.',
    },
  ];

  return (
    <>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center mt-10 px-6 mb-20'>
        <div className='text-center w-full'>
          <h1 className='text-base4 font-SFPro text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[135%]'>
            Thrust Areas
          </h1>
          <div className='mt-4 inline-block h-1 w-[160px] sm:w-[240px] md:w-[320px] bg-base4 rounded-lg'></div>
          <p className='mt-10 text-base4 text-[16px] sm:text-[20px] leading-[135%]'>
            The Technology Pre-Incubation Cell (TPIC) focuses on key areas that guide its projects and initiatives.
            These are the main fields where TPIC works, helping students and entrepreneurs develop practical solutions
            to real-world problems. The thrust areas include sectors like healthcare, sustainable development, digital
            technology, and entrepreneurship. By concentrating on these important fields, TPIC encourages creative
            thinking and supports the development of innovative projects. Each thrust area aligns with TPIC’s goal of
            helping individuals bring their ideas to life and make a positive impact on society.
          </p>
        </div>

        <div className='mt-12 w-full'>
          <div className='flex flex-wrap justify-center items-stretch gap-6'>
            {thrustAreas.map((area, index) => (
              <div
                key={index}
                className='w-full sm:w-[47%] lg:w-[30%] bg-gray-700 rounded-lg shadow-md shadow-slate-500 text-white font-poppins transition-transform duration-300 hover:scale-105 flex flex-col p-6'
              >
                <h2 className='text-[20px] font-SFProDisplay font-semibold text-green-400 leading-[135%] mb-4 text-center'>
                  {area.title}
                </h2>
                <p className='text-[14px] font-normal leading-[135%] text-justify flex-grow'>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ThrustAreas;
