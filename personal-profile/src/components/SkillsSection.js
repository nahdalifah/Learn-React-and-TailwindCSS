import React from "react";
import {
  PencilSquareIcon,
  CodeBracketIcon,
  BoltIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid"; // import ikon heroicons

const skills = [
  {
    name: "Figma",
    desc: "UI Design, Prototyping",
    icon: PencilSquareIcon,
    color: "text-pink-500",
  },
  {
    name: "JavaScript",
    desc: "Front-End Development",
    icon: CodeBracketIcon,
    color: "text-yellow-500",
  },
  {
    name: "React",
    desc: "Web Apps & SPA",
    icon: BoltIcon,
    color: "text-blue-500",
  },
  {
    name: "HTML & CSS",
    desc: "Responsive Design",
    icon: GlobeAltIcon,
    color: "text-orange-500",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Keahlian</h2>
      <p className="text-gray-600 mb-10">
        Saya menguasai berbagai tools dan teknologi untuk membangun produk digital yang modern.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <Icon className={`w-12 h-12 ${skill.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{skill.name}</h3>
              <p className="text-gray-500">{skill.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;