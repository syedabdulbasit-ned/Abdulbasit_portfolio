// Currently, it uses a placeholder:
// https://via.placeholder.com/200

// Replace it with your real profile photo (e.g., put your photo in src/assets/profile.jpg and use:

// <img src="/src/assets/profile.jpg" alt="Profile" ... />



import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-50 py-20 px-6"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 bg-white shadow-xl rounded-2xl p-10">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <img
            src="https://via.placeholder.com/200" 
            alt="Profile"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-blue-100"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            Hi, I’m <span className="font-semibold text-blue-600">Abdul Basit</span>, 
            a passionate software engineer with a strong background in 
            <span className="font-semibold"> web development</span>, 
            <span className="font-semibold"> AI/ML</span>, and 
            <span className="font-semibold"> IoT-based systems</span>. 
            I enjoy building innovative solutions that bridge the gap between 
            hardware and software, from developing full-stack web apps to 
            creating smart embedded systems with ESP32 and sensors.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            My focus areas include <span className="font-medium">React, Tailwind, Django, FastAPI, 
            and microcontroller-based IoT systems</span>. 
            I love solving real-world problems through technology.
          </p>
          <div className="mt-6">
            <a
              href="#projects"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
