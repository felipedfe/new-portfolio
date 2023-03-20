import React from 'react';
import Menu from '../Menu/Menu';
import './reel.css';

function Reel() {
  return (
    <section className="reel--container">
      {/* <div className="reel--transparency-layer" /> */}
      <Menu />
      <div className="reel--video-background">
        <div className="reel--video-foreground">
          <iframe
            title="video-reel"
            src="https://player.vimeo.com/video/809575263?h=c1d00cc6da&autoplay=1&title=0&byline=0&portrait=0&controls=0&loop=1&muted=1"

            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay"
          >
          </iframe>
        </div>
      </div>
    </section>
  )

};

export default Reel;
