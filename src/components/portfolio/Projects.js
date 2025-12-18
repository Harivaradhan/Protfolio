import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Job Posting Platform',
      description: 'Developed a job posting admin interface that allows administrators to create, update, and manage job listings efficiently. The application provides a simple dashboard to control job details, status, and visibility..',
      technologies: ['React', 'Java', 'Jdbc', 'J2EE'],
      image: '/images/jobApp1.jpg',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Manager',
      description: 'Built a task management system to organize, assign, and monitor tasks with status tracking. Designed to improve productivity and task visibility..',
      technologies: ['React', 'Html', 'Css','Java','j2EE','Mysql'],
      image: '/images/project_homepage.jpg',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Food Ordering App ',
      description: 'Developed a food ordering application that allows users to browse restaurants, select items, and place orders seamlessly. The application manages orders and order status through a simple and user-friendly interface..',
      technologies: ['Html', 'Css','Java','j2EE','Mysql','Jsp'],
      image: '/images/kichb.png',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Library Management ',
      description: 'Implemented a library management system featuring role-based authentication for admins and users to manage library resources..',
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

