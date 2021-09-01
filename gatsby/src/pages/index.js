import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import SEO from '../components/SEO';
import { loadableP5 as P5Wrapper } from '../components/loadable';
import SketchSinLine from '../components/sketchSinLine';
import FooterNoFixed from '../components/FooterNoFixed';
import SketchMovingLine from '../components/sketchMovingLine';

export default function HomePage({ eventTrigger, setEventTrigger }) {
  const [divDisplay, setDivDispaly] = useState(false);

  const responsiveVideoContainer = {
    padding: '56.25% 0 0 0',
    position: 'relative',
  };

  const responsiveVideoPlayer = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  const handleShowDiv = () => {
    setDivDispaly(true);
  };

  useEffect(() => {
    setEventTrigger(eventTrigger + 1);
  }, []);

  return (
    <div>
      <SEO title="✿" />
      {/* <div className="p5Div">
        <P5Wrapper sketch={SketchMovingLine} />
      </div> */}
      <div className="container">
        <div className="wrapper">
          <div className="tagLine">
            <h1 data-text="MARY JOHN FRANK" className="homeName">
              <span className="titleSpan"> MARY JOHN FRANK </span>
            </h1>
            <h1 className="logline">CHOREOGRAPHER · FILMMAKER · DIRECTOR</h1>
          </div>

          <div className="videoImageContainer">
            <div className="imageWrapper">
              <div className={divDisplay ? 'imageHome none' : 'imageHome'}>
                <img className="imageSize" src="./homeImage.png" alt="home" />
              </div>

              <div className={divDisplay ? 'playIcon none' : 'playIcon'}>
                <a>
                  <img
                    src="./play-button.png"
                    alt="play"
                    onClick={handleShowDiv}
                  />
                </a>
              </div>

              <div>
                <div
                  id="videoDiv"
                  className={divDisplay ? 'videoDiv' : 'videoNone'}
                >
                  <div style={responsiveVideoContainer}>
                    <iframe
                      src="https://player.vimeo.com/video/205550428?h=007989203f?&autoplay=1&loop=1&byline=0&title=0&muted=1"
                      style={responsiveVideoPlayer}
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterNoFixed />
    </div>
  );
}
