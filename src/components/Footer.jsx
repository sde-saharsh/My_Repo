import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#CBD5D9] py-4 flex flex-col items-center">
      <div className="text-center space-x-4 mb-2 text-black">
        <a
          href="https://github.com/sde-saharsh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-700"
        >
          GitHub
        </a>
        <span>|</span>
        <a
          href="https://www.linkedin.com/in/saharsh-khalokar-a9a8a731a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-700"
        >
          LinkedIn
        </a>
        <span>|</span>
        <a
          href="mailto:saharshkhalokar14@gmail.com"
          className="hover:underline hover:text-blue-700"
        >
          Email
        </a>
      </div>
      <p className="text-sm text-gray-700">© 2025 Saharsh Khalokar</p>
    </div>
  );
};

export default Footer;
