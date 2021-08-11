import { graphql } from 'gatsby';
import React from 'react';
import ProjectsList from '../components/ProjectsList';
import TagFilter from '../components/TagFilter';

export default function ProjectsPage({ data }) {
  const projects = data.projects.nodes;
  return (
    <>
      <TagFilter />
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
        slug {
          current
        }
        tags {
          id
          name
        }
        image {
          asset {
            fixed(width: 200, height: 200) {
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
