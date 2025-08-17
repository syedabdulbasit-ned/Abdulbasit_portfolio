// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <h1 className="text-xl font-bold text-blue-600">Abdul Basit</h1>
//         <ul className="flex gap-6 text-gray-700">
//           <li><a href="#about" className="hover:text-blue-600">About</a></li>
//           <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
//           <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
//           <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo / Name */}
        <a href="#home" className="text-2xl font-bold text-blue-600">
          Abdul Basit
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

