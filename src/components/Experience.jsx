// const Experience = () => {
//   const experiences = [
//     {
//       role: "Software Development Intern",
//       company: "ABC Tech Solutions",
//       duration: "June 2024 – Aug 2024",
//       description: [
//         "Worked on building RESTful APIs using Node.js and Express.",
//         "Implemented authentication and authorization with JWT.",
//         "Collaborated with frontend team to integrate APIs into React application.",
//       ],
//     },
//     {
//       role: "Machine Learning Intern",
//       company: "XYZ AI Labs",
//       duration: "Jan 2024 – Apr 2024",
//       description: [
//         "Developed a handwritten digit recognition system using Python and TensorFlow.",
//         "Preprocessed datasets and applied feature engineering for model accuracy.",
//         "Achieved 95% accuracy in classification tasks.",
//       ],
//     },
//     {
//       role: "Freelance Web Developer",
//       company: "Self-Employed",
//       duration: "2023 – Present",
//       description: [
//         "Built responsive websites for small businesses using HTML, CSS, JS, and React.",
//         "Optimized performance and SEO for better user experience.",
//         "Managed client communication and delivered projects on time.",
//       ],
//     },
//   ];

//   return (
//     <section id="experience" className="py-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//           Experience & Internships
//         </h2>

//         <div className="space-y-8">
//           {experiences.map((exp, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="flex justify-between items-center mb-3">
//                 <h3 className="text-2xl font-semibold text-indigo-600">{exp.role}</h3>
//                 <span className="text-sm text-gray-500">{exp.duration}</span>
//               </div>
//               <h4 className="text-lg font-medium text-gray-700 mb-3">{exp.company}</h4>
//               <ul className="list-disc list-inside space-y-2 text-gray-600">
//                 {exp.description.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    role: "MERN Stack Developer Intern",
    company: "National Center for Artificial Intelligence (NCAI)",
    duration: "Jan 2025 - Present",
    details: [
      "Built a To-Do List Application using HTML, CSS, and JavaScript for task management with features like add/delete/edit and local storage support.",
      " Developed a Weather Forecast Web App that fetched real-time weather data using OpenWeatherMap API and displayed it with a responsive UI. ",
      "Created a Student Internship Portal enabling students to register, apply for internships, and view application status, incorporating form validation and a simple backend (Node.js). ",
      "Gained hands-on experience in frontend development, API integration, and basic backend/database workflows.",
    //   "Built REST APIs with authentication (JWT).",
    //   "Integrated backend with React frontend.",
    //   "Optimized database queries improving performance by 20%.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "XYZ AI Labs",
    duration: "Feb 2024 – May 2024",
    details: [
      "Developed Handwritten Digit Recognition system with 95% accuracy.",
      "Worked on TensorFlow & Scikit-learn models.",
      "Collaborated in a team of 5 on AI research project.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    duration: "2023 – Present",
    details: [
      "Designed and built responsive websites for small businesses.",
      "Worked with HTML, CSS, JavaScript, React, and Tailwind.",
      "Improved SEO and website performance for clients.",
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Experience & Internships</h2>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden border"
            >
              {/* Header */}
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <div>
                  <h3 className="text-xl font-semibold text-indigo-600">{exp.role}</h3>
                  <p className="text-gray-700">{exp.company} • {exp.duration}</p>
                </div>
                <div>
                  {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </div>
              </button>

              {/* Details */}
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  <ul className="list-disc list-inside space-y-1">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
