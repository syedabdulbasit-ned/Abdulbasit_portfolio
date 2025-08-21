
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//     </>
//   );
// }  

// export default App;
 

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
// (Later: Skills, Projects, Contact)

function App() {
  return (
    <div className="App font-sans">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="pt-20">
        <About />
      </section>
      <section id="skills" className="pt-20">
        <h2 className="text-center text-3xl font-bold">Skills</h2>
      </section>
      <section id="projects" className="pt-20">
        <h2 className="text-center text-3xl font-bold">Projects</h2>
      </section>
      <section id="contact" className="pt-20">
        <h2 className="text-center text-3xl font-bold">Contact</h2>
      </section>
      <Skills />
      <Experience />
    </div>
  );
}

export default App;

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// // (Later: Projects, Contact)

// function App() {
//   return (
//     <div className="App font-sans">
//       <Navbar />

//       <section id="hero">
//         <Hero />
//       </section>

//       <section id="about" className="pt-20">
//         <About />
//       </section>

//       <section id="skills" className="pt-20">
//         <Skills />
//       </section>

//       <section id="experience" className="pt-20">
//         <Experience />
//       </section>

//       <section id="projects" className="pt-20">
//         <h2 className="text-center text-3xl font-bold">Projects</h2>
//         {/* Projects component will go here later */}
//       </section>

//       <section id="contact" className="pt-20">
//         <h2 className="text-center text-3xl font-bold">Contact</h2>
//         {/* Contact component will go here later */}
//       </section>
//     </div>
//   );
// }

// export default App;
