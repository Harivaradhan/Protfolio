import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Job Posting Platform',
      description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
      technologies: ['React', 'Java', 'Jdbc', 'J2EE'],
      image: '/images/jobApp1.jpg',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Manager',
      description: 'A collaborative task management tool with real-time updates and team features.',
      technologies: ['React', 'Html', 'Css','Java','j2EE','Mysql'],
      image: '/images/project_homepage.jpg',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Food Ordering App ',
      description: 'Beautiful weather dashboard with location-based forecasts and interactive maps.',
      technologies: ['Html', 'Css','Java','j2EE','Mysql','Jsp'],
      image: '/images/kichb.png',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Library Management ',
      description: 'Analytics platform for tracking social media metrics and engagement.',
      technologies: ['Html', 'Css', 'Java','jsp', 'mySql','J2EE'],
      image: '/images/lib.jpg',
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
              <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo →
                  </a>
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

