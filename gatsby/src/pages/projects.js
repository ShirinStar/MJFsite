import React from 'react';
import { graphql } from 'gatsby';
import ProjectsList from '../components/ProjectsList';
import TagFilter from '../components/TagFilter';

export default function ProjectsPage({ data }) {
  const projects = data.projects.nodes;
  return (
    <>
      {/* <TagFilter /> */}
      <ProjectsList projects={projects} />
    </>
  );
}

export const projectQuery = graphql`
  query {
    projects: allSanitySingleProject {
      nodes {
        name
        id
        year
        tagline
        slug {
          current
        }
        showOnSite
        tags {
          id
          name
        }
        image {
          asset {
            size
            fixed(width: 450, height: 300) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        videoLink
      }
    }
  }
`;
