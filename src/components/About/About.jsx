import React from 'react';
import './about.css';

function About() {
  console.log(process.env.PUBLIC_URL)
  return (
    <section id="about" className="about--container">
      <div className="about--img-wrapper">
        <img
          className="about--img"
          src="/images/perfil-crop-2.jpg"
          alt="eu"
        />
      </div>
      <article className="about--text-wrapper">
        <h2 className="about--title">SOBRE MIM</h2>
        <p className="about--text">
          Com foco principal no Front-End, meus principais interesses são a criação de interfaces web em React, UX e gameficação. Minha formação como Designer pode auxiliar na criação de boas experiências para o usuário. Trabalhei anos como artista plástico e designer e hoje estou em transição de carreira. Vejo a área de tecnologia como um lugar que cresce aberto à multidisciplinaridade, um ótimo cenário para que novas soluções sejam criadas.
        </p>
      </article>
    </section>
  )
};

export default About;
