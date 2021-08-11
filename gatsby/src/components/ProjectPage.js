import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import VideoEmbed from './VideoEmbed';

const ProjectStyle = styled.div`
  display: grid;
  // grid-template-columns: 100px 50px 100px;
  @supports not (grid-template-rows: subgrid) {
    grid-template-rows: auto auto 1fr;
  }
  grid-template-rows: subgrid;
  column-gap: 20px;
  row-gap: 10px;
  h2,
  p {
    margin: 0;
  }
`;

export default function ProjectPage({ project }) {
  return (
    <ProjectStyle>
      <Link to={`/project/${project.slug.current}`}>
        <h2>{project.name}</h2>
      </Link>
      <p>{project.tags.map((tag) => tag.name).join(', ')}</p>
      <Img fluid={project.image.asset.fluid} alt={project.name} />

      {/* <VideoEmbed project={project} /> */}
    </ProjectStyle>
  );
}
