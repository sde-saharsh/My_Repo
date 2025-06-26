import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaExternalLinkAlt, FaYoutube, FaInstagram } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiHackerrank } from 'react-icons/si';

const profiles = [
  { icon: SiLeetcode, color: '#FFA116', link: 'https://leetcode.com/your-username' },
  { icon: SiGeeksforgeeks, color: '#0F9D58', link: 'https://auth.geeksforgeeks.org/user/your-username' },
  { icon: SiCodechef, color: '#5B4638', link: 'https://www.codechef.com/users/your-username' },
  { icon: FaGithub, color: '#000000', link: 'https://github.com/your-username' },
  { icon: FaLinkedin, color: '#0A66C2', link: 'https://linkedin.com/in/your-username' },
  { icon: FaTwitter, color: 'blue', link: 'https://twitter.com/your-username' },
  { icon: SiHackerrank, color: '#2EC866', link: 'https://www.hackerrank.com/your-username' },
  { icon: FaExternalLinkAlt, color: '#555555', link: 'https://your-portfolio-link.com' },
  { icon: FaYoutube, color: 'red', link: 'https://youtube.com/your-channel' },
  { icon: FaInstagram, color: '#E1306C', link: 'https://instagram.com/your-username' },
];

const Profiles = () => {
  return (
    <div className="text-black p-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8">My Profiles</h2>
      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {profiles.map((profile, index) => {
          const IconComponent = profile.icon;
          return (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white border border-[#CBD5D9] rounded-full shadow hover:bg-[#BFD1D7] transition duration-300 w-16 h-16 group"
            >
              <IconComponent
                className="text-black text-3xl transition duration-300 group-hover:text-current"
                style={{ color: 'black' }}
              />
              <style>
                {`
                  .group:hover svg {
                    color: ${profile.color} !important;
                  }
                `}
              </style>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Profiles;
