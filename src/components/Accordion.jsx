import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaDownload } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import About from '../pages/About';
import Profiles from '../pages/Profiles';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';

const sections = [
  { title: 'Resume', icon: <FaDownload /> },
  { title: 'About Me' ,page:<About/>},
  { title: 'Skills', page:<Skills/> },
  { title: 'Projects', page:<Projects/> },
  { title: 'Profiles', page:<Profiles/> },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRefs = useRef([]);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null && sectionRefs.current[openIndex]) {
      sectionRefs.current[openIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [openIndex]);

  return (
    <div className="bg-[#cbd5d9] flex flex-col items-center justify-center p-4">
      {sections.map((section, index) => (
        <div key={index} ref={(el) => (sectionRefs.current[index] = el)} className="md:w-[50%] w-[90%] mb-4">
          <div
            onClick={() => toggleSection(index)}
            className="flex justify-between items-center p-4 rounded-full cursor-pointer shadow transition duration-300 bg-[#D6E3E8] hover:bg-[#BFD1D7] border-2 border-[#D6E3E8] hover:border-[#D6E3E8]"
          >
            <div className="w-full text-center">
              <span className="font-medium text-black">{section.title}</span>
            </div>
            <div className="ml-4 flex-shrink-0">
              {section.title === 'Resume' ? (
                <FaDownload className="text-black" />
              ) : openIndex === index ? (
                <FaChevronUp className="text-black" />
              ) : (
                <FaChevronDown className="text-black" />
              )}
            </div>
          </div>

          {/* Expandable Content with Framer Motion */}
          <AnimatePresence>
            {openIndex === index && section.title !== 'Resume' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-[#D6E3E8] mt-2 rounded-lg shadow text-black">
                  <p>{section.page}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
