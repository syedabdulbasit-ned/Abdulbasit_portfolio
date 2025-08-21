// import { useState } from "react";
// import { Menu, X } from "lucide-react"; // icons

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
//         {/* Logo / Name */}
//         <a href="#home" className="text-2xl font-bold text-blue-600">
//           Abdul Basit
//         </a>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
//           <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
//           <li><a href="#skills" className="hover:text-blue-600 transition">Skills</a></li>
//           <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
//           <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button 
//           onClick={toggleMenu} 
//           className="md:hidden text-gray-700"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
//             <li><a href="#about" onClick={toggleMenu}>About</a></li>
//             <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
//             <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
//             <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

// src/components/Navbar.jsx
// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-semibold tracking-wide text-indigo-600">
            MyPortfolio
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-indigo-600 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)} // Close menu after click
                  className="hover:text-indigo-600 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
