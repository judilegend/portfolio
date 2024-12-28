import { motion } from "framer-motion";
import Services from "./Services";

const WhatIdo = () => {
  const services = [
    {
      name: "Web Development",
      icon: "/Code.svg",
      desc: "Full-stack developer specializing in MERN stack & Next.js",
      gradient: "from-[#5DE4F6] to-[#306EE8]",
    },
    {
      name: "UI/UX Design",
      icon: "/Stack Of Paper.svg",
      desc: "Creating intuitive and engaging user experiences",
      gradient: "from-[#FF62AD] to-[#FF4D4D]",
    },
    {
      name: "Software Architecture",
      icon: "/Windows 10 Personalization.svg",
      desc: "Designing robust software solutions with UML & Merise",
      gradient: "from-[#BEF264] to-[#17B3A9]",
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FF62AD] to-[#5DE4F6] bg-clip-text text-transparent">
        My Expertise
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${service.gradient} p-[1px] rounded-xl hover:scale-[1.02] transition-transform`}
          >
            <div className="bg-[#0E0D0D] h-full rounded-xl p-4">
              <img
                src={service.icon}
                alt={service.name}
                className="w-8 h-8 mb-2"
              />
              <h4 className="font-bold mb-2">{service.name}</h4>
              <p className="text-sm text-gray-300">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIdo;
