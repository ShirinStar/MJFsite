import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

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

export default function AboutPage({ data, setEventTrigger, eventTrigger }) {
  const about = data.about.nodes;

  useEffect(() => {
    setEventTrigger(eventTrigger + 1);
  }, []);

  return (
    <>
      <SEO title="About" image={about[0].image?.asset?.fluid?.src} />
      <div className="container">
        <div className="wrapper">
          <h2 className="pageTitle">About</h2>

          <div className="aboutDiv">
            <img
              className="imgAbout"
              src={about[0].image.asset.url}
              alt={about[0].name}
            />
            {/* <Img fixed={about[0].image.asset.fixed} alt={about[0].name} /> */}
            <div className="aboutText">
              <PortableText
                blocks={about[0]._rawBodyPortableText}
                serializers={serializers}
              />

              <div className="contact">
                <p>
                  <span className="contactTitle">Contact me </span>
                </p>
                <br />
                <a
                  className="bodyTextLinks about"
                  href="mailto:maryjohn.frank@gmail.com"
                >
                  maryjohn.frank@gmail.com
                </a>

                <div className="aboutSocialWrapper">
                  <div className="socialLinkDivAbout">
                    <a
                      href="https://www.instagram.com/maryjohnfrank/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/instagram_icon.png"
                        alt="instagram"
                        className="socialLinkAbout"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/maryjohnfrank/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/linkedin_icon.png"
                        alt="linkedin"
                        className="socialLinkAbout"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/maryjohnfrank/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/facebook_icon.png"
                        alt="facebook"
                        className="socialLinkAbout"
                      />
                    </a>
                  </div>
                </div>
                {/* <p>
                  Check out my
                  <Link className="bodyTextLinks about" to="/values">
                    {' '}
                    values page ♡
                  </Link>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
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
