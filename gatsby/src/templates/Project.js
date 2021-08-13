import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import VideoEmbed from '../components/VideoEmbed';

export default function SingleProjectPage({ data }) {
  const { project } = data;
  console.log(project);

  return (
    <div className="projectMain">
      <div className="projectHeader">
        <h2 className="projectTitle">{project.name}</h2>
        <p>
          {project.tagline} | {project.year}
        </p>
      </div>

      <VideoEmbed project={project} />

      <div>
        <div className="descriptionDiv">
          <p className="projectDescription">
            {project.bodyPortableText[0].children
              .map((bodyText) => bodyText.text)
              .join('')}
          </p>
          <p />
        </div>
        {/* <ul>
          {project.tags.map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul> */}
      </div>
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
