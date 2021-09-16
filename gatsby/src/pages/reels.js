import React, { useEffect, useRef, useState } from 'react';
import { graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import Player from '@vimeo/player';
import VideoEmbed from '../components/VideoEmbed';
import SEO from '../components/SEO';

const serializers = {
  marks: {
    link: ({ children, mark }) =>
      mark.blank ? (
        <a
          className="bodyTextLinks"
          href={mark.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <a className="bodyTextLinks" href={mark.href}>
          {children}
        </a>
      ),
  },
};

export default function ReelsPage({ data }) {
  const reels = data.reels.nodes;
  const [divDisplay, setDivDispaly] = useState(false);
  // const iframRef = useRef(null);

  const handleShowDiv = () => {
    setDivDispaly(true);
    // const player = new Player(iframRef.current);
    // player.play();
  };

  return (
    <>
      <SEO title="Reels" />
      <h2 className="pageTitle reels">Reels</h2>
      <div className="reelDiv">
        {reels
          .sort((a, b) => a.setOrder - b.setOrder)
          .map((reel) => (
            <div key={reel.id}>
              <div className="reelWrapper">
                {/* place holder for the reels without video */}
                {reel.reelLink === null ? (
                  <div className="reelPlaceholder">
                    <h2 className="reeltitle">{reel.name}</h2>
                    <p className="reelPlaceholderText">
                      the reel is currently being updated,
                      <br />
                      thank you for your patience!
                    </p>
                  </div>
                ) : (
                  <>
                    {/* overlay black */}
                    <div
                      className={
                        divDisplay
                          ? 'reelTitleContainer none'
                          : 'reelTitleContainer'
                      }
                      onClick={handleShowDiv}
                    >
                      <h2 className="reeltitle">{reel.name}</h2>
                      <div
                        className={
                          divDisplay ? 'playIconReel none' : 'playIconReel'
                        }
                      >
                        <a>
                          <img
                            src="/play-button.png"
                            alt="play"
                            onClick={handleShowDiv}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="reelVideoContainer">
                      <div className="videoDiv">
                        <VideoEmbed link={reel.reelLink} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export const reelsQuery = graphql`
  query {
    reels: allSanityReels {
      nodes {
        id
        name
        reelLink
        setOrder
        # _rawReelPortableText
      }
    }
  }
`;
