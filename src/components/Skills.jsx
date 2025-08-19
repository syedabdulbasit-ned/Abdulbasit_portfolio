import React from 'react';
// src/components/Skills.jsx
const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">
          Skills
        </h2>

        {/* Flex row with left alignment */}
        <div className="flex flex-wrap justify-start gap-x-12 gap-y-20>
          <div className="flex flex-col items-center w-1/4">
            <i className="devicon-react-original colored text-[90px] hover:scale-125 transition-transform duration-300"></i>
            <p className="mt-4 text-xl font-semibold">React</p>
          </div>
          <div className="flex flex-col items-center w-1/4">
            <i className="devicon-html5-plain colored text-[90px] hover:scale-125 transition-transform duration-300"></i>
            <p className="mt-4 text-xl font-semibold">HTML</p>
          </div>
          <div className="flex flex-col items-center w-1/4">
            <i className="devicon-css3-plain colored text-[90px] hover:scale-125 transition-transform duration-300"></i>
            <p className="mt-4 text-xl font-semibold">CSS</p>
          </div>
          <div className="flex flex-col items-center w-1/4">
            <i className="devicon-javascript-plain colored text-[90px] hover:scale-125 transition-transform duration-300"></i>
            <p className="mt-4 text-xl font-semibold">JavaScript</p>
          </div>
          <div className="flex flex-col items-center w-1/4">
            <i className="devicon-tailwindcss-plain colored text-[90px] hover:scale-125 transition-transform duration-300"></i>
            <p className="mt-4 text-xl font-semibold">TailwindCSS</p>
          </div>
          <div className="flex flex-col items-center w-1/4">
            <i className="devicon-nodejs-plain colored text-[90px] hover:scale-125 transition-transform duration-300"></i>
            <p className="mt-4 text-xl font-semibold">Node.js</p>
          </div>
          <div className="flex flex-col items-center w-1/4">
            <i className="devicon-django-plain colored text-[90px] hover:scale-125 transition-transform duration-300"></i>
            <p className="mt-4 text-xl font-semibold">Django</p>
          </div>
          <div className="flex flex-col items-center w-1/4">
            <i className="devicon-python-plain colored text-[90px] hover:scale-125 transition-transform duration-300"></i>
            <p className="mt-4 text-xl font-semibold">Python</p>
          </div>
          <div className="flex flex-col items-center w-1/4">
            <i className="devicon-mongodb-plain colored text-[90px] hover:scale-125 transition-transform duration-300"></i>
            <p className="mt-4 text-xl font-semibold">MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
