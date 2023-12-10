import React, { useState, useEffect } from 'react';
import TypeWritter from 'typewriter-effect';
import { motion } from 'framer-motion';
import NavBar from './NavBar'; // Import the NavBar component
import dynamic from 'next/dynamic';

const HeroSection = () => {
  const images = ['main.png', 'main2.jpeg']; // List of image paths
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 3 seconds (3000 milliseconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-white">
        <div className="relative" style={{ height: '480px' }}>
        {/* Image slider */}
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          className="flex items-center justify-center w-full h-full pt-4"
        >
          <img
            src={`/${images[currentImage]}`}
            alt="hero section"
            className="object-cover object-center"
            style={{ width: '688px', height: '450px' }}
          />
        </motion.div>

        {/* Navigation buttons */}
        <button onClick={prevImage} className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2">
          {'<'}
        </button>
        <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2">
          {'>'}
        </button>
      </div>
      <main className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="font-extrabold">
            <div className="pt-8">
              {/* span text separator -- for design*/}
              <span className="text-2xl font-semibold">
                Hello, I'm{' '}
                <span className="text-transparent bg-clip-text sm:text-3xl md:text-4xl bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-400">
                  Kyaw Htet Thu
                </span>
              </span>
              <br />
              <span className="text-2xl">
                <TypeWritter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(`<span style="color:#7549F2">IOS Developer</span>`)
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString(`<span style="color:#DF58D2">Cyber Security Enthusiast</span>`)
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString(`<span style="color:#ED787C">Second Year Student</span>`)
                      .pauseFor(1500)
                      .deleteAll()
                      .start();
                  }}
                ></TypeWritter>
              </span>
            </div>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-12 lg:mt-0 pt-0 lg:pt-24"
        >
          {/* Additional content */}
        </motion.div>
      </main>
    </div>
  );
};

export default dynamic(() => Promise.resolve(HeroSection), { ssr: false });
