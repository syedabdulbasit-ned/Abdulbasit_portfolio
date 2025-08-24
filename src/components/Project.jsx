// src/components/Projects.jsx
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Image Generation Using Genetic Algorithm",
    description:
      "Developed a Django-based web application that leverages genetic algorithms to recreate target images. The system simulates evolutionary processes—mutation, crossover, and selection—to iteratively improve image accuracy, providing an interactive and visual demonstration of evolutionary computing principles.",
    tech: ["AI", "Genetic Algorithm", "Django"],
    github: "https://github.com/your-username/weather-monitoring",
    demo: "https://your-live-demo.com",
    image: "https://via.placeholder.com/400x250", // replace with your project screenshot
  },
  {
    title: "E-Mart (E-Commerce Website)",
    description:
      "A responsive e-commerce platform built with HTML, CSS, and JavaScript, providing a seamless shopping experience.",
    tech: ["HTML", "CSS", "JavaScript", "Django"],
    github: "https://github.com/your-username/emart",
    demo: "https://your-live-demo.com",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Handwritten Digit Recognition",
    description:
      "Machine learning project to recognize handwritten digits using deep learning techniques.",
    tech: ["Python", "TensorFlow", "NumPy", "Matplotlib"],
    github: "https://github.com/your-username/digit-recognition",
    demo: "",
    image: "https://via.placeholder.com/400x250",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-indigo-600 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-700 hover:text-indigo-600"
                    >
                      <Github size={18} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-700 hover:text-indigo-600"
                    >
                      <ExternalLink size={18} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
