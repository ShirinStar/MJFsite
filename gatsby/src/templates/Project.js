import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import VideoEmbed from '../components/VideoEmbed';

export default function SingleProjectPage({ data }) {
  const { project } = data;
  console.log(project);
  return (
    <div>
      <Img fluid={project.image.asset.fluid} />
      <div>
        <h2>{project.name}</h2>
        <p>{project.year}</p>
        <p>{project.tagline}</p>
        <ul>
          {project.tags.map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul>
        <VideoEmbed project={project} />
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
