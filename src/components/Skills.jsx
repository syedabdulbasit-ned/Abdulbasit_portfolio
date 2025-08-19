const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "devicon-react-original colored" },
        { name: "HTML", icon: "devicon-html5-plain colored" },
        { name: "CSS", icon: "devicon-css3-plain colored" },
        { name: "TailwindCSS", icon: "devicon-tailwindcss-plain colored" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Django", icon: "devicon-django-plain colored" },
      ],
    },
    {
      title: "Programming",
      skills: [
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "Python", icon: "devicon-python-plain colored" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">
          Skills
        </h2>

        {/* Loop through categories */}
        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">
                {category.title}
              </h3>

              {/* Skills inside category */}
              <div className="flex flex-wrap justify-start gap-x-12 gap-y-12">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center w-1/4">
                    <i
                      className={`${skill.icon} text-[90px] hover:scale-125 transition-transform duration-300`}
                    ></i>
                    <p className="mt-4 text-xl font-semibold">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
