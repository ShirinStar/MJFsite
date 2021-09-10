import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
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

  return (
    <>
      <SEO title="Reels" />
      <div className="container">
        <div className="wrapper">
          <h2 className="pageTitle">Reels</h2>
          <div className="reelWrapper">
            {reels
              .sort((a, b) => a.setOrder - b.setOrder)
              .map((reel) => (
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
        setOrder
        # _rawReelPortableText
      }
    }
  }
`;
