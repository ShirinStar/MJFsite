import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const TagStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  text-align: center;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    font-size: 14px;
    cursor: pointer;
    &[aria-current='page'] {
      border-bottom: 2px solid pink;
    }
    &:hover {
      color: white;
    }
  }
`;

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

export default function TagFilter({ activeTag }) {
  const { projects } = useStaticQuery(graphql`
    query {
      projects: allSanitySingleProject {
        nodes {
          tags {
            name
            id
          }
        }
      }
    }
  `);

  const tagsWithCounts = countProjectsInTags(projects.nodes);

  return (
    <div className="container">
      <div className="wrapper">
        <h2 className="pageTitle">Projects</h2>
        <TagStyles>
          <Link to="/projects">
            <span className="tagName">All</span>
          </Link>
          {tagsWithCounts.map((tag) => (
            <Link to={`/tags/${tag.name}`} key={tag.id}>
              <span className="tagName">{tag.name}</span>
            </Link>
          ))}
        </TagStyles>
      </div>
    </div>
  );
}