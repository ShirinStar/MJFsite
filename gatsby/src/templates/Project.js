import { graphql } from 'gatsby';
import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import VideoEmbed from '../components/VideoEmbed';

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

export default function SingleProjectPage({ data }) {
  const { project } = data;

  return (
    <div className="projectMain">
      <div className="projectHeader">
        <h2 className="projectTitle">{project.name}</h2>
        <p>
          {project.tagline} | {project.year}
        </p>
      </div>

      <div>
        <VideoEmbed project={project} />
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
      {/* <ul>
          {project.tags.map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul> */}
    </div>
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
      tags {
        name
        id
      }
    }
  }
`;
