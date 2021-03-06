import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

const serializers = {
  marks: {
    link: ({ children, mark }) =>
      mark.blank ? (
        <a
          className="bodyTextLinks about"
          href={mark.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <a className="bodyTextLinks about" href={mark.href}>
          {children}
        </a>
      ),
  },
};

export default function AboutPage({ data }) {
  const about = data.about.nodes;

  return (
    <>
      <SEO title="Contact" image={about[0].image?.asset?.fluid?.src} />
      <h2 className="pageTitle">Contact</h2>
      <div className="aboutDiv">
        <img
          className="imgAbout"
          src={about[0].image.asset.url}
          alt={about[0].name}
        />
        <div className="abouttTextDiv">
          <div className="aboutText">
            <PortableText
              blocks={about[0]._rawBodyPortableText}
              serializers={serializers}
              className="aboutParag"
            />
          </div>
          <div className="contact">
            <h2 className="contact contactme"> Contact me </h2>
            <div className="textIcon">
              <a
                className="contactlink"
                href="mailto:maryjohn.frank@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/email_icon2.png"
                  alt="email"
                  className="socialLinkAbout mail"
                />
                maryjohn.frank@gmail.com
              </a>
            </div>
            <div className="textIcon">
              <a
                className="contactlink"
                href="https://www.instagram.com/maryjohnfrank/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/instagram_icon_nofill.png"
                  alt="instagram"
                  className="socialLinkAbout"
                />
                maryjohnfrank
              </a>
            </div>
            {/* <a
                      href="https://www.instagram.com/maryjohnfrank/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/linkedin_icon.png"
                        alt="linkedin"
                        className="socialLinkAbout"
                      />
                    </a> */}
            <div className="textIcon">
              <a
                className="contactlink"
                href="https://www.facebook.com/mary.j.frank.9/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/facebook_icon_nofill2.png"
                  alt="facebook"
                  className="socialLinkAbout"
                />
                @mary.j.frank.9
              </a>
            </div>
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
            url
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
