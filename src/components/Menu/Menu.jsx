import React from 'react';
import NavBar from '../NavBar/NavBar';
import ContactLinks from '../ContactLinks/ContactLinks';
import './menu.css';

function Menu() {
  return (
    <section className="menu--container">
      <div className="menu--title-wrapper">
        <h1 className="menu--title">FELIPE FERNANDES</h1>
      </div>
      <div className="menu--links-nav-ocuppation-wrapper">
        <h2 className="menu--occupation">DESENVOLVEDOR WEB FRONTEND</h2>
        <div className="menu--links-nav-wrapper">
          <NavBar />
          <ContactLinks />
        </div>
      </div>
    </section>
  )
};

export default Menu;
