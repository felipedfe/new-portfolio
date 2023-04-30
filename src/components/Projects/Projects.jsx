import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from '../../data/projects';
import './projects.css';

function Projects() {
  return (
    <section id="projects" className="projects--container">
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />
      })}
    </section>
  )
};

export default Projects;
