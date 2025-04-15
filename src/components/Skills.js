import React from 'react';
import './Skills.css';
import {
  AcademicCapIcon,
  CodeBracketIcon,
  ServerStackIcon,
  WindowIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/solid';

const skills = [
  { name: 'HTML', icon: <AcademicCapIcon className="icon" />, category: 'Front-end', description: 'Compétence que je maîtrise pleinement, consolidée par mes projet Réalisé.' },
  { name: 'CSS', icon: <CodeBracketIcon className="icon" />, category: 'Front-end', description: 'Compétence que je maîtrise pleinement, consolidée par mes projet Réalisé.' },
  { name: 'JavaScript', icon: <CodeBracketIcon className="icon" />, category: 'Front-end', description: 'Compétence que je maîtrise pleinement, consolidée par mes projet Réalisé.' },
  { name: 'React.js', icon: <WindowIcon className="icon" />, category: 'Front-end', description: 'Compétence actuellement en cours d apprentissage.' },
  { name: 'Node.js', icon: <ServerStackIcon className="icon" />, category: 'Back-end', description: 'Compétence actuellement en cours d apprentissage.' },
  { name: 'PHP', icon: <CodeBracketIcon className="icon" />, category: 'Back-end', description: 'Compétence que je maîtrise pleinement, consolidée par mes projet Réalisé.' },
  { name: 'MySQL', icon: <ServerStackIcon className="icon" />, category: 'Back-end', description: 'Compétence que je maîtrise pleinement, consolidée par mes projet Réalisé.' },
  { name: 'MongoDB', icon: <ServerStackIcon className="icon" />, category: 'Back-end', description: 'Compétence actuellement en cours d apprentissage.' },
  { name: 'Linux', icon: <DevicePhoneMobileIcon className="icon" />, category: 'Divers', description: 'Compétence que je maîtrise pleinement, consolidée par mes projet Réalisé.' },
  { name: 'Windows', icon: <DevicePhoneMobileIcon className="icon" />, category: 'Divers', description: 'Compétence que je maîtrise pleinement, consolidée par mes projet Réalisé.' },
  { name: 'Wordpress', icon: <DevicePhoneMobileIcon className="icon" />, category: 'Divers', description: 'Compétence que je maîtrise pleinement, consolidée par mes projet Réalisé.' },
  { name: 'Symphony', icon: <DevicePhoneMobileIcon className="icon" />, category: 'Back-end', description: 'Compétence actuellement en cours d apprentissage.' },
];

const categories = ['Front-end', 'Back-end', 'Divers'];

const Skills = () => {
  return (
    <div className="skills-timeline">
   <h2>Ce que je maîtrise aujourd’hui en développement</h2>

      <div className="timeline-columns">
        {categories.map(category => (
          <div key={category} className="timeline-column">
            <h3>{category}</h3>
            <div className="timeline-list">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <div className="timeline-item" key={index}>
                    <div className="timeline-icon">{skill.icon}</div>
                    <div className="timeline-content">
                      <h4>{skill.name}</h4>
                      <p>{skill.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;