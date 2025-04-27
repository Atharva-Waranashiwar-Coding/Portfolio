import { Link } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col bg-[#100001] text-white min-h-screen">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-8 pt-20 pb-10 space-y-10 md:space-y-0 md:space-x-20 animate-fade-in">
        
        {/* Left - Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/assets/hero.jpg"
            alt="Atharva Waranashiwar"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-[#CA0000] object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right - Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Engineering Tomorrow, Today!
          </h1>
          <h2 className="text-2xl font-semibold text-gray-300">
            Engineer. Problem Solver. Creator.
          </h2>
          <p className="text-gray-400 max-w-md">
            Crafting impactful web solutions and scalable backend systems, with a passion for data, AI, and cloud-native technologies. 
          </p>
          <Link
            to="/projects"
            className="inline-block bg-[#CA0000] hover:bg-[#b00000] text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
          >
            Explore My Work
          </Link>
        </div>

      </section>

      {/* Quick Stats Section */}
      <section className="bg-gradient-to-b from-[#100001] to-[#1a1a1a] py-10 px-8 text-center animate-fade-in">
        <h3 className="text-3xl font-bold mb-8">Quick Highlights</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg font-semibold">
          <div>
            <p className="text-[#CA0000] text-4xl">2+</p>
            <p>Years of Experience</p>
          </div>
          <div>
            <p className="text-[#CA0000] text-4xl">8+</p>
            <p>Technologies Mastered</p>
          </div>
          <div>
            <p className="text-[#CA0000] text-4xl">5+</p>
            <p>Projects Completed</p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-8 max-w-5xl mx-auto animate-fade-in">
        <h3 className="text-3xl font-bold text-center mb-8">About Me</h3>
        <p className="text-gray-300 mb-6 text-lg leading-8">
          Hi, I'm Atharva Waranashiwar — a passionate engineer who believes technology should solve real problems, not just impress.
          Starting my journey with electronics and telecommunication engineering, I transitioned into software development where I found my true calling: building scalable, human-centric solutions.
        </p>
        <p className="text-gray-400 mb-6 text-lg leading-8">
          I specialize in backend and full-stack development — crafting seamless web platforms, orchestrating efficient databases, and designing impactful digital experiences.
          Currently pursuing my Master's in Information Systems at Northeastern University, I am expanding my expertise in cloud technologies, AI, and large-scale system design.
        </p>
        <p className="text-gray-500 italic text-center">
          Let's create solutions that truly make a difference.
        </p>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center animate-fade-in">
        <h3 className="text-3xl font-bold mb-6">Let's Build Something Great Together 🚀</h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block bg-[#CA0000] hover:bg-[#b00000] text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300"
        >
          Contact Me
        </button>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-slide-down p-4">
          <div className="bg-[#ca0000] text-white p-6 sm:p-8 rounded-xl w-full max-w-md text-center relative">

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl"
            >
              ×
            </button>

            {/* Modal Content */}
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-200 mb-4 text-sm sm:text-base">You can reach me at:</p>

            <div className="space-y-4">
              <p className="text-base sm:text-lg">
                📧 <a href="mailto:waranashiwaratharva@gmail.com" className="hover:underline break-all">Email: waranashiwaratharva@gmail.com</a>
              </p>
              <p className="text-base sm:text-lg">
                💼 <a href="https://www.linkedin.com/in/atharvawaranashiwar/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile</a>
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Home;