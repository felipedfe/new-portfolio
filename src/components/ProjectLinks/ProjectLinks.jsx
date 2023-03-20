import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { IoMdOpen } from 'react-icons/io';

function ProjectLinks({urls}) {
  const { github, deploy } = urls;
  return (
    <div className="icons-container">
      <a href={github} rel="noreferrer" target="_blank">
        <AiFillGithub className="icon" />
      </a>
      <a href={deploy} rel="noreferrer" target="_blank">
        <IoMdOpen className="icon" />
      </a>
    </div>
  )
};

export default ProjectLinks;
