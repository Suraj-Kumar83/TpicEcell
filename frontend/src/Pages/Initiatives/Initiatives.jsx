import React from "react";

const initiatives = [
  {
    name: "Startup Bootcamps",
    description: "Intensive workshops to help aspiring entrepreneurs build and scale their startups.",
    icon: "https://img.icons8.com/ios-filled/100/rocket--v1.png",
  },
  {
    name: "Innovation Challenges",
    description: "Themed hackathons and competitions to bring out the best innovative solutions.",
    icon: "https://img.icons8.com/ios-filled/100/light-on.png",
  },
  {
    name: "Mentorship Programs",
    description: "Access to expert mentors from academia and industry for hands-on guidance.",
    icon: "https://img.icons8.com/ios-filled/100/handshake.png",
  },
  {
    name: "Funding Opportunities",
    description: "Support to connect with VCs, angel investors, and government grants.",
    icon: "https://img.icons8.com/ios-filled/100/money-bag.png",
  },
];

const Initiatives = () => {
  return (
    <section id="initiatives" className="bg-gray-50 py-20 animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-16">
          <h2
            className="relative mb-4 inline-block font-headline text-4xl font-bold"
            style={{ color: "#114b2c" }}
          >
            Our Key Initiatives
          </h2>
          <p className="mx-auto max-w-3xl text-lg" style={{ color: "#114b2c" }}>
            Empowering innovation through a diverse set of programs that nurture ideas and scale impact.
          </p>
        </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
  {initiatives.map((item) => (
    <div
      key={item.name}
      className="bg-white p-6 rounded-xl shadow-lg shadow-black hover:shadow-2xl hover:shadow-black transition-shadow duration-300 group text-center"
    >
      <div className="flex justify-center mb-4">
        <img
          src={item.icon}
          alt={`${item.name} Icon`}
          width={60}
          height={60}
          className="transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2" style={{ color: "#114b2c" }}>
        {item.name}
      </h3>
      <p className="text-sm" style={{ color: "#114b2c" }}>
        {item.description}
      </p>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Initiatives;
