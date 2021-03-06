import React, { useEffect, useState, useRef } from 'react';
import { graphql, Link } from 'gatsby';
import Player from '@vimeo/player';
import PortableText from '@sanity/block-content-to-react';
import SEO from '../components/SEO';
import { loadableP5 as P5Wrapper } from '../components/loadable';
import SketchSinLine from '../components/sketchSinLine';
import SketchMovingLine from '../components/sketchMovingLine';

// const serializers = {

//   marks: {
//     link: ({ children, mark }) =>
//       mark.blank ? (
//         <a
//           className="bodyTextLinks"
//           href={mark.href}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {children}
//         </a>
//       ) : (
//         <a className="bodyTextLinks" href={mark.href}>
//           {children}
//         </a>
//       ),
//   },
// };

export default function HomePage({ data }) {
  const homeImage = data.homeImage.nodes;
  const [divDisplay, setDivDispaly] = useState(false);
  const iframRef = useRef(null);

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
    const player = new Player(iframRef.current);
    setDivDispaly(true);
    player.play();
  };

  return (
    <div>
      <SEO title="✿" />
      {/* <div className="p5Div">
        <P5Wrapper sketch={SketchMovingLine} />
      </div> */}

      {/* <div className="tagLine">
            <h1 data-text="MARY JOHN FRANK" className="homeName">
              <span className="titleSpan"> MARY JOHN FRANK </span>
            </h1>
            <h1 className="logline">
              CHOREOGRAPHER <span className="loglineDot">·</span> FILMMAKER{' '}
              <span className="loglineDot">·</span> DIRECTOR
            </h1>
          </div> */}

      <div className="textHome">
        <p className="introText">
          <span className="introTextLogo"> Mary John Frank</span> is a New
          York-based choreographer and filmmaker. She has directed video content
          for companies including New York City Ballet, Condé Nast, Disney and
          Google. Her choreography, films, and music video work has been
          featured on Vogue.com, Nowness, Afropunk, and Refinery 29 and has
          played at venues including Lincoln Center and the Hammer Museum. She
          has also built immersive theater and Virtual Reality experiences. She
          is interested in how VR and AR technology can further our storytelling
          capabilities and inform choreographic principles and styles.
        </p>
        {/* <PortableText
          blocks={homeImage[0]._rawHomePortableText}
          serializers={serializers}
        /> */}
      </div>

      <div className="responsiveContainer">
        <div className="videoImageContainer">
          <div className="blackimageCon">
            <div className={divDisplay ? 'imageHome none' : 'imageHome'}>
              <img
                className="imageSize"
                src={homeImage[0].image.asset.url}
                alt="Meticulous Bird"
                onClick={handleShowDiv}
              />
              <p className="imageInfo">
                <a className="imageInfolink" href="/">
                  “Meticulous Bird" by Thao & The Get Down Stay Down
                </a>
                <br />
                Choreographer / Music Video
              </p>
            </div>
            <div className="imageWrapper" />
          </div>
          <div className="imageWrapper" />
          <div className={divDisplay ? 'playIcon none' : 'playIcon'}>
            <a>
              <img src="/play-button.png" alt="play" onClick={handleShowDiv} />
            </a>
          </div>

          <div id="videoDiv" className={divDisplay ? 'videoDiv' : 'videoNone'}>
            <div style={responsiveVideoContainer}>
              <iframe
                ref={iframRef}
                src="https://player.vimeo.com/video/205550428?api=1&h=007989203f?&loop=1&byline=0&title=0"
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
  );
}

export const reelsQuery = graphql`
  query {
    homeImage: allSanityHomePageImage {
      nodes {
        _rawHomePortableText
        image {
          asset {
            url
          }
        }
      }
    }
  }
`;
