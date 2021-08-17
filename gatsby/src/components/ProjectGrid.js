import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

// const ProjectStyle = styled.div`
/* display: grid;
  @supports not (grid-template-rows: subgrid) {
    grid-template-rows: auto auto 1fr;
  }
  grid-template-rows: subgrid;
  column-gap: 20px;
  row-gap: 10px;
  h2,
  p {
    margin: 0;
  } */
// `;

export default function ProjectGrid({ project }) {
  return (
    <>
      <div className="imageContainer">
        <Link to={`/project/${project.slug.current}`}>
          <div className="imageGrid">
            <img src={project.image.asset.url} alt={project.name} />
            {/* <Img fluid={project.image.asset.fluid} alt={project.name} /> */}
          </div>
          <div className="textImages textImages--blur">
            <p className="mainImageTitle">{project.name}</p>
            <p className="secondImageTitle">{project.tagline}</p>
            {/* <p>{project.tags.map((tag) => tag.name).join(', ')}</p> */}
          </div>
        </Link>
      </div>
    </>
  );
}
