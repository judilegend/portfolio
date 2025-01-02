"use client";
import { memo } from "react";
import SimpleTittle from "../Title/SimpleTittle";
import AboutText from "./AboutText";
import WhatIdo from "./WhatIdo";

const About = memo(() => {
  return (
    <div className="relative min-h-screen w-full px-4 max-md:px-0 py-8">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF62AD] opacity-10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#5DE4F6] opacity-10 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-9 gap-6">
          {/* About Text Section */}
          <div className="backdrop-blur-sm p-6 rounded-2xl border border-gray-800/50">
            <AboutText />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {Array(4)
              .fill(0)
              .map((_, index) => {
                const skills = [
                  {
                    title: "Task Organization",
                    description:
                      "Efficient task management using Eisenhower Matrix method",
                  },
                  {
                    title: "Effective Work",
                    description:
                      "Productivity optimization using Pomodoro Technique",
                  },
                  {
                    title: "IT Passion",
                    description:
                      "Deep enthusiasm for technology and continuous learning",
                  },
                  {
                    title: "Quick Adaptation",
                    description:
                      "Flexible and adaptable to new technologies and environments",
                  },
                ];

                return (
                  <div
                    key={index}
                    className="backdrop-blur-sm p-6  rounded-2xl border border-gray-800/50 flex flex-col items-center "
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FF62AD] to-[#5DE4F6] rounded-lg mb-4 flex items-center justify-center">
                      {/* Icon placeholder */}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {skills[index].title}
                    </h3>
                    <p className="text-sm text-gray-400 text-center">
                      {skills[index].description}
                    </p>
                  </div>
                );
              })}
          </div>

          {/* What I Do Section */}
          <div className="md:col-span-2 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/50">
            <WhatIdo />
          </div>
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;
