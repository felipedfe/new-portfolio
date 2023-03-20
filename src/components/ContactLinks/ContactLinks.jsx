import React, { useEffect, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './contact-links.css';

function Links() {
  const [copyEmail, setCopyEmail] = useState(false);

  useEffect(() => {
    setTimeout(() => setCopyEmail(false), 2500)
  }, [copyEmail]);

  return (
    <div className="icons-container">
      <a href="https://github.com/felipedfe" rel="noreferrer" target="_blank">
        <AiFillGithub className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/felipedfe/" rel="noreferrer" target="_blank">
        <AiFillLinkedin className="icon" />
      </a>
      <CopyToClipboard
        text="felipedfe@gmail.com"
        onCopy={() => setCopyEmail(true)}
      >
        <FiMail className="icon" />
      </CopyToClipboard>
      {copyEmail ? <span className="copy-msg">E-MAIL COPIADO</span> : null}
    </div>
  )
};

export default Links;
