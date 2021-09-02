import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import VideoEmbed from '../components/VideoEmbed';
import FooterNoFixed from '../components/FooterNoFixed';

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

export default function SingleProjectPage({
  data,
  setEventTrigger,
  eventTrigger,
}) {
  const { project } = data;

  useEffect(() => {
    setEventTrigger(eventTrigger + 1);
  }, []);

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="backToProjects">
            <Link className="backText" to="/projects">
              Back
            </Link>
          </div>
          <div className="projectHead">
            <h2 className="pageTitle singleProject">{project.name}</h2>
            <p className="projectYear">{project.year}</p>
          </div>

          <div className="videoDiv singleProject">
            <VideoEmbed link={project.videoLink} />
          </div>

          <div className="descriptionDiv">
            <PortableText
              blocks={project._rawBodyPortableText}
              serializers={serializers}
            />
          </div>
          {project._rawFeaturePortableText !== null ? (
            <div className="featureDiv">
              <p className="featureP">Featured: </p>
              <PortableText
                blocks={project._rawFeaturePortableText}
                serializers={serializers}
              />
            </div>
          ) : (
            ''
          )}
          <div className="imagesContainer">
            {project.BHSimage1 == null &&
            project.BHSimage2 == null &&
            project.BHSimage3 == null &&
            project.BHSimage4 == null ? (
              ''
            ) : (
              <>
                <h2 className="BHSTitle">Behind The Scene</h2>
                <div className="imageBHSGallery">
                  {project.BHSimage1 == null ? (
                    ''
                  ) : (
                    <img
                      className="BHSimage"
                      src={project.BHSimage1.asset.url}
                      alt="BHS1"
                    />
                  )}
                  {project.BHSimage2 == null ? (
                    ' '
                  ) : (
                    <img
                      className="BHSimage"
                      src={project.BHSimage2.asset.url}
                      alt="BHS2"
                    />
                  )}
                  {project.BHSimage3 == null ? (
                    ''
                  ) : (
                    <img
                      className="BHSimage"
                      src={project.BHSimage3.asset.url}
                      alt="BHS3"
                    />
                  )}
                  {project.BHSimage4 == null ? (
                    ' '
                  ) : (
                    <img
                      className="BHSimage"
                      src={project.BHSimage4.asset.url}
                      alt="BHS4"
                    />
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <FooterNoFixed />
    </>
  );
}

export const projectQuery = graphql`
  query($slug: String!) {
    project: sanitySingleProject(slug: { current: { eq: $slug } }) {
      name
      id
      year
      tagline
      videoLink
      _rawBodyPortableText
      _rawFeaturePortableText
      bodyPortableText {
        children {
          text
        }
      }
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      BHSimage1 {
        asset {
          url
        }
      }
      BHSimage2 {
        asset {
          url
        }
      }
      BHSimage3 {
        asset {
          url
        }
      }
      BHSimage4 {
        asset {
          url
        }
      }
      tags {
        name
        id
      }
    }
  }
`;
