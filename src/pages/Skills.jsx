import React from 'react';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['C', 'C++', 'Core Java', 'JavaScript'],
  },
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'React.js'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST API', 'CRUD', 'JWT'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Oracle', 'SQL', 'PL/SQL'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Netlify', 'Vercel'],
  },
  {
    category: 'CS Fundamentals',
    skills: ['OOP', 'DSA (Data Structures and Algorithms)', 'OS', 'DBMS','CN'],
  },
];

const Skills = () => {
  return (
    <div className="text-black space-y-6 ">
      {skillsData.map((section, index) => (
        <div key={index}>
          <h3 className="font-semibold mb-2">{section.category}</h3>
          <div className="flex flex-wrap gap-1">
            {section.skills.map((skill, idx) => (
              <span
                key={idx}
                className="border px-3 py-1 rounded-full bg-white text-sm border-[#CBD5D9] hover:bg-[#BFD1D7] transition duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills;
