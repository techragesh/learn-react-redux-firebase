import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
  return (
    <div className="project-list selection">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};

export default ProjectList;
