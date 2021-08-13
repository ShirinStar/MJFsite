import React from 'react';
import { graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import Img from 'gatsby-image';

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

export default function AboutPage({ data }) {
  const about = data.about.nodes;
  console.log(about);
  return (
    <>
      <div className="aboutCointainer">
        <h2 className="pageTitle">About</h2>

        <div className="aboutDiv">
          <div className="imgAbout">
            <Img fixed={about[0].image.asset.fixed} alt={about[0].name} />
          </div>
          <div className="aboutText">
            <PortableText
              blocks={about[0]._rawBodyPortableText}
              serializers={serializers}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export const aboutQuery = graphql`
  query {
    about: allSanityAbout {
      nodes {
        name
        id
        _rawBodyPortableText
        image {
          asset {
            fixed(width: 350, height: 500) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
