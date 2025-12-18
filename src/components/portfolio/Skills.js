import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      title: 'Backend',
      skills: ['Java' , 'spring Boot','Node.js', 'Python', 'REST APIs']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Eclipse', 'Github', 'MySql', 'VS Code','Hibernate']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;




