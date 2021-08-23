import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import SEO from '../components/SEO';
import { loadableP5 as P5Wrapper } from '../components/loadable';
import SketchSinLine from '../components/sketchSinLine';
import FooterNoFixed from '../components/FooterNoFixed';
import SketchMovingLine from '../components/sketchMovingLine';
import VideoEmbed from '../components/VideoEmbed';

export default function HomePage({ eventTrigger, setEventTrigger }) {
  const [divDisplay, setDivDispaly] = useState(false);

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
          {/* <img className="arrowImg" src="/arrow2.png" alt="arrow" /> */}

          <div className={divDisplay ? 'videoDiv' : 'videoNone'}>
            <div id="videoDiv">
              <VideoEmbed link="https://vimeo.com/205550428" />
            </div>
          </div>
        </div>
      </div>
      <FooterNoFixed />
    </div>
  );
}
