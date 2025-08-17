import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiDjango } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-500 text-5xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
  { name: "Python", icon: <FaPython className="text-blue-500 text-5xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
  { name: "Django", icon: <SiDjango className="text-green-700 text-5xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              {skill.icon}
              <p className="mt-3 text-gray-700 dark:text-gray-200 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
