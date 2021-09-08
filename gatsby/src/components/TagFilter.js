import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const TagStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 5rem;
  margin-top: 1.5rem;
  text-align: center;
  max-width: 700px;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 0 8px;
    padding-right: 0px;
    margin-right: 0px;
    font-size: 18px;
    letter-spacing: 2px;
    font-family: 'Barriecito', sans-serif;
    color: #c170d3;
    &[aria-current='page'] {
      background: white;
      color: black;
      border-radius: 4px;
      font-weight: 700 !important;
    }
    &:hover {
      color: #95b1d5;
    }
  }
  @media (max-width: 768px) {
    grid-gap: 0 0rem;
    margin-top: 0.6rem;
    text-align: center;
    justify-content: center;
    a {
      padding: 0 4px;
      font-size: 14px;
      grid-gap: 0 1rem;
      line-height: 1.8;
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
    <div className="container">
      <div className="wrapper">
        <h2 className="pageTitle">Projects</h2>
        <TagStyles>
          <Link to="/projects">
            <span className="tagName">All</span>
          </Link>
          {tagsToShow.map((tag) => (
            <Link to={`/tags/${tag.name}`} key={tag.id}>
              <span className="tagName">{tag.name}</span>
            </Link>
          ))}
        </TagStyles>
      </div>
    </div>
  );
}
