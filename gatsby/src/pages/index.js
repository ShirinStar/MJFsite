import React from 'react';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO title="✿" />
      <div className="wrapper">
        <div className="tagLine">
          <h1 data-text="Mary John Frank" className="homeName">
            <span className="titleSpan"> Mary John Frank</span>
          </h1>
          <h1 className="logline">Director · Choreographer · Filmmaker</h1>
        </div>
      </div>
    </>
  );
}
