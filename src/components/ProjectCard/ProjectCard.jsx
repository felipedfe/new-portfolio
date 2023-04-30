import React from 'react';
import ProjectLinks from '../ProjectLinks/ProjectLinks';
import './project-card.css';

function ProjectCard({ project }) {
  const { id, title, tags, alt, urls } = project;
  console.log(project);
  return (
    <div className="projectcard--wrapper">
      <div className="projectcard--hover-area">
        <div className="projectcard--hover-card">
          <h2 className="projectcard--hover-card-title">{title}</h2>
          {/* <hr className="projectcard--card-divider"></hr> */}
          <div className="projectcard--tags-wrapper">
            {tags.map((tag) => <span key={tag} className="tag-pill">{`${tag}`}</span>)}
          </div>
          <ProjectLinks urls={urls} />
        </div>
      </div>
      <img
        className="projectcard--img"
        src={`/images/projects/${id}/thumb.jpg`}
        alt={alt} />
    </div>
  )
};

export default ProjectCard;
