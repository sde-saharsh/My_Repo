import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaExternalLinkAlt, FaYoutube, FaInstagram } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiHackerrank } from 'react-icons/si';

const profiles = [
  { icon: SiLeetcode, color: '#FFA116', link: 'https://leetcode.com/u/SAHARSH_14/' },
  { icon: SiGeeksforgeeks, color: '#0F9D58', link: 'https://www.geeksforgeeks.org/user/sde_saharsh/' },
  { icon: SiCodechef, color: '#5B4638', link: 'https://www.codechef.com/users/saharshx' },
  { icon: FaGithub, color: '#000000', link: 'https://github.com/sde-saharsh' },
  { icon: FaLinkedin, color: '#0A66C2', link: 'https://www.linkedin.com/in/saharsh-khalokar-a9a8a731a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { icon: FaTwitter, color: 'blue', link: 'https://x.com/KhalokarSa51567?t=nwujUj0tuRh2a1n18b3pjw&s=09' },
  { icon: SiHackerrank, color: '#2EC866', link: 'https://www.hackerrank.com/profile/sde_saharsh' },
  { icon: FaExternalLinkAlt, color: '#555555', link: 'https://portfoliosaharsh.vercel.app/' },
  { icon: FaYoutube, color: 'red', link: 'https://www.youtube.com/@sde_saharsh' },
  { icon: FaInstagram, color: '#E1306C', link: 'https://www.instagram.com/sde_saharsh?igsh=MTc1eHhvODNrbGZ2ZA==' },
];

const Profiles = () => {
  return (
    <div className="text-black p-4 flex flex-col items-center">
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
