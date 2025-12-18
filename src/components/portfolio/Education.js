import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      type: 'Training',
      degree: 'Software Development',
      field: 'Java Full Stack Development',
      institution: 'Tap Academy',

      location: 'Banglore, Karnataka',
      year: '2024 - 2025',
      description: 'Completed 6 moth training program  with focus on software development, algorithms, and web technologies.',
      achievements: [
        'Learned Java, Mysql, html, css ,javascript, spring, springboot, hibernate, Datastructures ',
        'Participated in coding competitions',
        'Completed various projects in web development'
      ]
    },
    {
        id: 2,
        type: 'College',
        degree: 'Bachelor of Technology',
        field: 'Mechanical Engineering',
        institution: 'Amrita School of Engineering',
  
        location: 'Kollam, Kerala',
        year: '2020 - 2024',
        description: 'Completed Bachelor\'s degree with focus on Robotics, algorithms, and web technologies.',
        achievements: [
          'Maintained good academic performance',
          'Participated in coding competitions',
          'Completed various projects in web development'
        ]
      },
   
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-content">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-header">
                <div className="education-icon">
                  {edu.type === 'College' ? '🎓' : '📚'}
                </div>
                <div className="education-info">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-field">{edu.field}</p>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-location">{edu.location}</p>
                </div>
                <div className="education-year">
                  <span>{edu.year}</span>
                </div>
              </div>
              <div className="education-body">
                <p className="education-description">{edu.description}</p>
                <div className="education-achievements">
                  <h4>Key Highlights:</h4>
                  <ul>
                    {edu.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;




