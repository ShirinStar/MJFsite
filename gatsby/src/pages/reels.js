import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import VideoEmbed from '../components/VideoEmbed';
import FooterNoFixed from '../components/FooterNoFixed';
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

export default function ReelsPage({ data, setEventTrigger, eventTrigger }) {
  const reels = data.reels.nodes;

  useEffect(() => {
    setEventTrigger(eventTrigger + 1);
  }, []);

  return (
    <>
      <SEO title="Reels" />
      <div className="container">
        <div className="wrapper">
          <div className="reelWrapper">
            {reels.map((reel) => (
              <div key={reel.id}>
                {reel.reelLink === null ? (
                  <div>
                    <h2 className="reeltitle">{reel.name}</h2>
                    <div className="reelPlaceholder">
                      <p className="reelPlaceholderText">
                        My directing reel is currently being updated,
                        <br />
                        thank you for your patience!
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="reeltitle">{reel.name}</h2>
                    <div className="videoDiv">
                      <VideoEmbed link={reel.reelLink} />
                    </div>
                  </>
                )}
                {/* <div className="descriptionDiv">
                <PortableText
                  blocks={reel._rawBodyPortableText}
                  serializers={serializers}
                />
              </div> */}
              </div>
            ))}
          </div>
          <FooterNoFixed />
        </div>
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
        # _rawReelPortableText
      }
    }
  }
`;
