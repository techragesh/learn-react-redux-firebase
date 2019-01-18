import React from 'react';

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <span className="card-title">{project.title}</span>
      <p>techragesh</p>
      <p className="grey-text">21st Sep</p>
    </div>
  );
};

export default ProjectSummary;
