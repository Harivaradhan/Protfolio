import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer with a love for creating innovative solutions
              and beautiful user experiences. With expertise in modern web technologies,
              I bring ideas to life through clean code and thoughtful design.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>fresher</h3>
                <p> Experience</p>
              </div>
              <div className="stat-item">
                <h3>200+</h3>
                <p>coding problems solved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




