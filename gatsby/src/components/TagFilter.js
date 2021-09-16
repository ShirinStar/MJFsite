import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const TagStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  margin-top: 2rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 0rem;
    align-items: center;
    padding: 0 12px;
    font-size: 18px;
    color: 'black';
    &[aria-current='page'] {
      border-bottom: 2px solid #fff;
    }
    &:hover {
      color: #c4ffe7;
    }
  }
  @media only screen and (max-width: 650px) {
    margin: 0;
    padding: 0;
    margin-top: 0.6rem;
    text-align: center;
    justify-content: center;
    margin-bottom: 3rem;
    gap: 0.4rem;
    a {
      letter-spacing: -0.3px;
      padding: 0 3px;
      font-size: 10px;
      grid-gap: 0 0rem;
      &[aria-current='page'] {
        border-bottom: 1px solid #fff;
      }
    }
  }
`;

// sorting tags based on count --- currently not in used.
function countProjectsInTags(projects) {
  const counts = projects
    .map((project) => project.tags)
    .flat()
    .reduce((acc, tag) => {
      const existingTag = acc[tag.id];
      if (existingTag) {
        existingTag.count += 1;
      } else {
        acc[tag.id] = {
          id: tag.id,
          name: tag.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  const sortedTags = Object.values(counts).sort((a, b) => b.count - a.count);
  return sortedTags;
}

// filtering tags based on if project is mark to show.
function getTagsWithShowOnSite(projects) {
  const tags = {};
  projects.forEach((project) => {
    if (project.showOnSite) {
      project.tags.forEach((tag) => (tags[tag.id] = tag));
    }
  });
  return Object.values(tags);
}

export default function TagFilter({ activeTag }) {
  const { projects } = useStaticQuery(graphql`
    query {
      projects: allSanitySingleProject {
        nodes {
          showOnSite
          tags {
            name
            id
            setOrder
          }
        }
      }
    }
  `);

  const tagsWithCounts = countProjectsInTags(projects.nodes);
  const tagsToShow = getTagsWithShowOnSite(projects.nodes).sort(
    (a, b) => a.setOrder - b.setOrder
  );

  return (
    <>
      <h2 className="pageTitle">Videos</h2>
      <TagStyles>
        <Link to="/projects">All</Link>
        {tagsToShow.map((tag) => (
          <Link to={`/tags/${tag.name}`} key={tag.id}>
            {tag.name}
          </Link>
        ))}
      </TagStyles>
    </>
  );
}
