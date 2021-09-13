import { Link } from 'gatsby';
import React from 'react';
import SEO from './SEO';

export default function ProjectGrid({ project }) {
  return (
    <>
      <SEO title="Videos" image={project.image?.asset?.fluid?.src} />
      <div className="imageContainer">
        <Link to={`/project/${project.slug.current}`}>
          <div className="imageGrid">
            <img src={project.image.asset.url} alt={project.name} />
            <div className="textImagesmobile">
              <p className="mainImageTitleMobile">
                {project.name} |
                <span className="secondImageTitleMobile">
                  {project.tagline}
                </span>
              </p>
            </div>
          </div>
          <div className="textImages textImages--blur">
            <p className="mainImageTitle">{project.name}</p>
            <p className="secondImageTitle">{project.tagline}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
