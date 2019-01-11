import React, { Component } from 'react';

class ProjectDetails extends Component {
  render(props) {
    const id = props.match.params.id;
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>Test Project</p>
          </div>
          <div className="card-action blue lighten-4 blue-text">
            <div>Posted by techragesh</div>
            <div>1 Jan 2019</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
