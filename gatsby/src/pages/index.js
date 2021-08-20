import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { loadableP5 as P5Wrapper } from '../components/loadable';
import SketchSinLine from '../components/sketchSinLine';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <SEO title="✿" />
      <div className="p5Div">
        <P5Wrapper sketch={SketchSinLine} />
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="tagLine">
            <h1 data-text="MARY JOHN FRANK" className="homeName">
              <span className="titleSpan"> MARY JOHN FRANK </span>
            </h1>
            <h1 className="logline">Director · Choreographer · Filmmaker</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
