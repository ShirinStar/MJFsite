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
    console.log('true');
  };

  useEffect(() => {
    setEventTrigger(eventTrigger + 1);
  }, []);

  return (
    <div>
      <SEO title="✿" />
      <div className="p5Div">
        <P5Wrapper sketch={SketchMovingLine} />
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="indexPageOne">
            <div className="tagLine">
              <h1 data-text="MARY JOHN FRANK" className="homeName">
                <span className="titleSpan"> MARY JOHN FRANK </span>
              </h1>
              <h1 className="logline">Director · Choreographer · Filmmaker</h1>
            </div>
            <div className="arrow">
              <a href="#videoDiv" onClick={handleShowDiv}>
                <p className="downArrow"> ᐁ</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={divDisplay ? 'videoDiv' : 'videoNone'}>
        <div id="videoDiv">
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
      <FooterNoFixed />
    </div>
  );
}
