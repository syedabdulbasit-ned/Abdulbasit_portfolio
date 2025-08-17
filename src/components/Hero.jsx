export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
        Hi, I'm <span className="text-blue-600">Abdul Basit</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600">
        Software Engineer | IoT & AI Enthusiast
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
