import React from 'react';

const projects = [
  {
    title: 'Bluestock',
    image: '/path/to/project1.png', // Replace with your actual image path
    link: '#',
  },
  {
    title: 'Project 2',
    image: '/path/to/project2.png', // Replace with your actual image path
    link: '#',
  },
  {
    title: 'Project 3',
    image: '/path/to/project3.png', // Replace with your actual image path
    link: '#',
  },
  {
    title: 'Project 4',
    image: '/path/to/project4.png', // Replace with your actual image path
    link: '#',
  },
];

const Projects = () => {
  return (
    <div className="text-black p-4 flex flex-wrap gap-6 justify-center">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[80%] md:w-[300px] h-[150px] rounded-xl overflow-hidden shadow-lg bg-[#1E1E1E] group"
        >
          <div className="w-full h-full relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-1 text-xs">
              {project.title}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
