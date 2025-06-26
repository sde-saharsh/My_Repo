import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="p-4 bg-[#cbd5d9] text-black ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full max-w-md md:max-w-[60%] mx-auto p-6 text-center rounded-xl flex flex-col items-center justify-center gap-8"
      >
        {/* Image Section */}
        <div className="flex flex-col items-center">
          <img
            src="/profile/me.jpeg"
            alt="profile image"
            className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-full object-cover mb-4 cursor-pointer"
          />

          <a 
            href="https://github.com/sde-saharsh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl font-bold hover:underline"
          >
            @sde_saharsh
          </a>
        </div>

        {/* Text Section */}
        <div className="space-y-2 text-gray-700 text-center">
          <p>🌿 Real vibes, random days & raw adventures.</p>
          <p>🔥 Exploring places, building projects & coding awesome stuff.</p>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-6 mt-6 text-4xl text-gray-800">
            <a 
              href="https://www.linkedin.com/in/saharsh-khalokar-a9a8a731a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>

            <a 
              href="https://www.instagram.com/sde_saharsh?igsh=MTc1eHhvODNrbGZ2ZA==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-600"
            >
              <FaInstagram />
            </a>

            <a 
              href="https://www.youtube.com/@sde_saharsh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-red-600"
            >
              <FaYoutube />
            </a>

            <a 
              href="https://github.com/sde-saharsh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-gray-700"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
