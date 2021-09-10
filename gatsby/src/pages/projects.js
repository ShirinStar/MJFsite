import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import ProjectsList from '../components/ProjectsList';
import TagFilter from '../components/TagFilter';

export default function ProjectsPage({ data, pageContext }) {
  const projects = data.projects.nodes;

  return (
    <>
      <TagFilter activeTag={pageContext.tag} />
      <ProjectsList projects={projects} />
    </>
  );
}

export const projectQuery = graphql`
  query ProjectQuery($tag: [String]) {
    projects: allSanitySingleProject(
      sort: { fields: order, order: ASC }
      filter: { tags: { elemMatch: { name: { in: $tag } } } }
    ) {
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
            url
            size
            fixed(width: 450, height: 300) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 600) {
              ...GatsbySanityImageFluid
            }
          }
        }
        videoLink
      }
    }
  }
`;
