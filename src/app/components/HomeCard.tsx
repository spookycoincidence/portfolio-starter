'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HomeCard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const content = (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full"
    >
      <h1 className="text-2xl font-bold mb-3 leading-tight md:text-6xl md:mb-4 text-white">
        Your Name
      </h1>
      <p className="text-base mb-4 leading-snug md:text-3xl text-gray-300">
        Full Stack Developer — Specializing in modern web technologies
      </p>

      <p className="mb-3 text-sm leading-snug md:text-base text-gray-400">
        Brief description about your professional background. Mention your key skills, areas of interest, or industries you worked in.
        <br /><br />
        Use this space to introduce yourself and the kind of work you are passionate about.
      </p>

      <div className="flex gap-2 mt-4 flex-wrap md:gap-4">
        <a
          href="mailto:youremail@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 border border-gray-700 text-white px-2 py-1 rounded shadow hover:bg-gray-700 transition text-xs md:text-sm"
        >
          Email 💌
        </a>
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 border border-gray-700 text-white px-2 py-1 rounded shadow hover:bg-gray-700 transition text-xs md:text-sm"
        >
          GitHub 💻
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 border border-gray-700 text-white px-2 py-1 rounded shadow hover:bg-gray-700 transition text-xs md:text-sm"
        >
          LinkedIn 💼
        </a>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`
        ${isMobile
          ? 'p-3 bg-gray-900'
          : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-3 rounded-3xl shadow-xl md:p-12'}
        max-w-full mx-auto mt-4 md:max-w-6xl
      `}
    >
      {isMobile ? (
        <div className="flex flex-col items-start gap-4">
          {content}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
          <div className="flex-1 max-w-full">{content}</div>
          <motion.img
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            src="/profile.jpg"
            alt="Profile"
            className="
              w-28 h-28 rounded-full border-4 border-gray-700 shadow-md object-cover self-start
              md:w-60 md:h-60
            "
          />
        </div>
      )}
    </motion.div>
  );
}
