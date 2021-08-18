import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

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
