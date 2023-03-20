import React from 'react';
import './navbar.css';

function NavBar() {
  return (
    <nav>
      <a href="/#projects">
        <button type="button">PROJETOS</button>
      </a>
      <a href="/#about">
        <button type="button">SOBRE</button>
      </a>
    </nav>
  )
};

export default NavBar;
