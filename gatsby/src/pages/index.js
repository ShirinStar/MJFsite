import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HomePage() {
  const name = useRef(null);

  // useEffect(() => {
  //   gsap.to(name, {
  //     duration: 5,
  //     css: { color: 'black' },
  //   });
  // });

  return (
    <div className="tagLine">
      <h1 data-text="Mary John Frank" className="homeName">
        Mary John Frank
      </h1>{' '}
      <h1 className="logline">Director · Choreographer · Filmmaker</h1>
    </div>
  );
}
