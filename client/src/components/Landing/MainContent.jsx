import React from 'react'
import ProgressRing from './ProgressRing';
import OpenSourceHeader from './OpenSourceHeader';
import { useNavigate } from 'react-router-dom';

import  { useEffect } from 'react';
import 'aos/dist/aos.css';  // Import AOS styles
import AOS from 'aos';      // Import AOS library
function MainContent() {
  const goTO = useNavigate();
 

  //scroll animation library
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true,     // Run the animation only once
      offset: 300,    // Distance (in px) from the viewport when the animation starts
    });
  }, []); // Empty dependency array to run once on mount


  return (
    <>
     <section
          id="hero"
          className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] bg-cover bg-center"
          style={{ backgroundImage: "url('/img/hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-70"></div>
    
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-6 sm:px-12 md:px-16 h-full">
           <OpenSourceHeader/>
            <p data-aos="fade-up" className="text-lg sm:text-xl mb-6 text-zinc-300 opacity-70">
              Organize, prioritize and manage your tasks efficiently.
            </p>
            <a
              
              onClick={() => goTO("/signup")}
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 mt-1 hover:cursor-pointer"
            >
              Get Started
            </a>
          </div>
        </section>
    
          {/* Features Section */}
          <section
            id="features"
            className="py-12 px-6 sm:px-20 text-center bg-gradient-to-r from-gray-600 to-white-300 backdrop-blur-xl bg-opacity-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <div data-aos="fade-up" className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Task Management</h3>
                <p className="text-gray-400">Easily create, manage, and prioritize your tasks with our intuitive interface.</p>
              </div>
              <div data-aos="fade-up" className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Collaboration</h3>
                <p className="text-gray-400">Work seamlessly with your team and keep everyone on the same page.</p>
              </div>
              <div data-aos="fade-up" className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Analytics</h3>
                <p className="text-gray-400">Get detailed insights into your productivity and performance over time.</p>
              </div>
            </div>
          </section>
    
          {/* Developer Section */}
          <section
            id="Developer"
            className="text-center bg-gradient-to-r from-gray-600 to-white-300 backdrop-blur-xl bg-opacity-10 w-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About the Developer</h2>
            <div className="flex flex-col items-center">
              {/* Developer Image with Glassy Effect */}
              <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl backdrop-blur-md">
                <img
                  data-aos="zoom-in"
                  src="/img/brijesh.jpg"  // Update this path as needed
                  alt="Brijesh Nishad"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Developer Description */}
              <div className="bg-black bg-opacity-40 p-8 rounded-lg shadow-lg mt-8 backdrop-blur-xl w-full max-w-4xl">
                <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold text-white mb-4 " >Brijesh Nishad</h3>
    
                <div className="flex flex-col items-center p-4">
  <div className="glass-box p-6 mb-4 max-w-[768] text-left break-words" data-aos="fade-right">
    <p data-aos="fade-left" className="text-gray-300 mb-4" >
      Hi, I'm Brijesh Nishad, currently pursuing a BTech in Computer Science and Engineering from GNIOT, Greater Noida, Delhi NCR. Hailing from Varanasi, I am an enthusiastic and self-motivated individual with a strong passion for learning and exploring new things.
    </p>
  </div>

  <div className="glass-box p-6 mb-4 max-w-[768] text-left break-words" data-aos="fade-left">
    <p data-aos="fade-right" className="text-gray-300 mb-4">
      I am deeply committed to excelling in the field of Java development. With a solid foundation in software development and a drive to improve continuously, I aim to become an expert Java developer. <br />
      I am currently associated with <strong>GNIOT Group of Institutions, Greater Noida</strong> as the <strong>Research & Development Head</strong> of the <strong>IoT Elite Club</strong>.
    </p>
  </div>

  <div className="glass-box p-6 mb-4 max-w-[768] text-left break-words" data-aos="fade-down">
    <p data-aos="fade-up" className="text-gray-300 mb-4">
      I am excited about the journey ahead and eager to contribute my skills and expertise to the world of programming. My dedication, paired with a thirst for knowledge, fuels my passion for software development.
    </p>
  </div>
</div>

                {/* Progress Rings for Different Technologies */}
                <div data-aos="fade-up" className="flex flex-wrap justify-center gap-8 mt-8">
                  <ProgressRing label="Java" progress={80} />
                  <ProgressRing label="React JS" progress={75} />
                  <ProgressRing label="J2EE" progress={70} />
                  <ProgressRing label="Node.js" progress={70} />
                  <ProgressRing label="Spring Framework" progress={40} />
                  <ProgressRing label="SQL" progress={75} />
                  <ProgressRing label="MongoDB" progress={60} />
                  <ProgressRing label="Linux" progress={55} />
                  <ProgressRing label="Nginx Web Server" progress={65} />
                </div>
              </div>
            </div>
            
          </section>
    
          {/* Testimonials Section */}
          <section
            id="testimonials"
            className="py-12 px-6 sm:px-20 text-center bg-gradient-to-r from-gray-600 to-white-300 backdrop-blur-xl bg-opacity-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">What Our Users Say</h2>
            <div className="flex flex-col md:flex-row justify-center gap-12">
              {/* Testimonial 1 */}
              <div data-aos="fade-right" className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-xs mx-auto">
                <div className="flex justify-center mb-4">
                  <img
                    src="/img/ritik.jpg"
                    alt="Ritik"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <p className="text-gray-400 mb-4">
                  "As a project manager, TaskManager is a game changer. Track progress with ease has improved my team’s collaboration. We’ve become more productive and efficient!"
                </p>
                <p className="text-white font-semibold">Ritik</p>
                <p className="text-gray-300">App Developer</p>
              </div>
    
              {/* Testimonial 2 */}
              <div data-aos="fade-up" className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-xs mx-auto">
                <div className="flex justify-center mb-4">
                  <img
                    src="/img/deepika.jpeg"
                    alt="Deepika"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <p className="text-gray-400 mb-4">
                  "The insights provided by TaskManager’s analytics feature have been incredible. I can now track my productivity and see areas for improvement. It's a must-have tool for any data-driven professional."
                </p>
                <p className="text-white font-semibold">Deepika</p>
                <p className="text-gray-300">Associate Software Engineer</p>
              </div>
    
              {/* Testimonial 3 */}
              <div data-aos="fade-up" className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-xs mx-auto">
                <div className="flex justify-center mb-4">
                  <img
                    src="/img/shivam.jpg"
                    alt="Shivam"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <p className="text-gray-400 mb-4">
                  "TaskManager has really helped me streamline my workflow. The task tracking and scheduling features are essential for staying on top of my responsibilities. It’s been a huge asset to my productivity."
                </p>
                <p className="text-white font-semibold">Shivam</p>
                <p className="text-gray-300">Frontend Developer</p>
              </div>
    
              {/* Testimonial 4 */}
              <div data-aos="fade-left" className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-xs mx-auto">
                <div className="flex justify-center mb-4">
                  <img
                    src="/img/ashu.jpeg"
                    alt="Ashu"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <p className="text-gray-400 mb-4">
                  "I’ve tried numerous task management tools, but TaskManager stands out. It’s intuitive, easy to use, and packed with features that truly help improve my daily efficiency. A real game changer!"
                </p>
                <p className="text-white font-semibold">Ashutosh</p>
                <p className="text-gray-300">Business Associate</p>
              </div>
            </div>
    
            {/* Optional "See More" Button */}
            <div className="mt-8">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                See More Testimonials
              </a>
            </div>
          </section>
    
    </>
  )
}

export default MainContent