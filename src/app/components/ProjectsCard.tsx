'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Landing Page – Startup X',
    description: 'Modern landing page built with Next.js, Tailwind CSS, and animations using Framer Motion.',
    link: 'https://example.com/project-landing',
    imageSrc: '/placeholder/landing.webp',
    imageAlt: 'Landing page preview',
  },
  {
    title: 'E-commerce API',
    description: 'RESTful API built in Golang with Gin, MySQL, and JWT authentication for a fictional store.',
    link: 'https://example.com/project-api',
    imageSrc: '/placeholder/api.webp',
    imageAlt: 'API preview',
  },
  {
    title: 'Portfolio Template',
    description: 'Personal portfolio template made with Next.js 14, featuring a custom dark theme and animation loader.',
    link: 'https://example.com/project-portfolio',
    imageSrc: '/placeholder/portfolio.webp',
    imageAlt: 'Portfolio preview',
  },
  {
    title: 'Dashboard UI Kit',
    description: 'Reusable dashboard components with Radix UI, Zustand state, and dark/light mode toggle.',
    link: 'https://example.com/project-dashboard',
    imageSrc: '/placeholder/dashboard.webp',
    imageAlt: 'Dashboard preview',
  },
  {
    title: 'Real-time Chat App',
    description: 'Fullstack messaging app using WebSockets, Redis, PostgreSQL, and React.',
    link: 'https://example.com/project-chat',
    imageSrc: '/placeholder/chat.webp',
    imageAlt: 'Chat app preview',
  },
  {
    title: 'Course Platform MVP',
    description: 'MVP for a learning platform with course upload, video player, and user auth flow.',
    link: 'https://example.com/project-platform',
    imageSrc: '/placeholder/course.webp',
    imageAlt: 'Course platform preview',
  },
];

export default function ProjectsCard() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div
      className={`
        w-full max-w-6xl mx-auto mt-12
        p-4 md:p-12 md:rounded-3xl md:shadow-lg
        md:bg-gradient-to-br md:from-gray-800 md:via-gray-900 md:to-black
        text-white
      `}
    >
      <h2 className="text-2xl font-bold mb-3 leading-tight px-4 md:text-4xl md:px-0 md:mb-8 text-left">
        Projects
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-2 md:px-0">
        {visibleProjects.map((project, i) => (
          <div key={i} className="w-full">
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
            />
          </div>
        ))}
      </div>

      {!showAll && projects.length > 6 && (
        <div className="flex justify-center mt-6 md:mt-8 px-4 md:px-0">
          <button
            onClick={() => setShowAll(true)}
            className="bg-gray-100 text-gray-900 border border-gray-400 px-3 py-1 rounded shadow hover:bg-white transition text-xs md:text-sm"
          >
            Show more →
          </button>
        </div>
      )}
    </div>
  );
}
