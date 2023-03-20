import React from 'react';
import { FaVimeo } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IoMdOpen } from 'react-icons/io';

function ProjectLinks({urls}) {
  const { github, deploy } = urls;
  console.log("_-_-_---->", github)
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
