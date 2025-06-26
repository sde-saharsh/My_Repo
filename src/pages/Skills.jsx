import React from 'react';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['C', 'C++', 'Core Java', 'JavaScript'],
  },
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'React.js', 'JSX'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST API', 'CRUD', 'JWT'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Oracle', 'SQL', 'PL/SQL'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'Netlify', 'Vercel'],
  },
  {
    category: 'CS Fundamentals',
    skills: ['OOP', 'DSA (Data Structures and Algorithms)', 'OS', 'DBMS'],
  },
];

const Skills = () => {
  return (
    <div className="text-black space-y-8 ">
      <h2 className="text-3xl font-bold text-center mb-4">My Skills</h2>
      {skillsData.map((section, index) => (
        <div key={index}>
          <h3 className="text-xl font-semibold mb-2">{section.category}</h3>
          <div className="flex flex-wrap gap-2">
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
