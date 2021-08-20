import React from 'react';
import styled from 'styled-components';
import ProjectGrid from './ProjectGrid';

// const ProjectGridStyle = styled.div`
/* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px; */
// `;

// const ProjectGridCointainer = styled.div`
//   max-width: 900px;
//   margin-left: auto;
//   margin-right: auto;
//   margin-bottom: 10rem;
//   align-items: center;
// `;

export default function ProjectsList({ projects }) {
  return (
    <div className="container">
      <div className="wrapper">
        {projects
          .filter((project) => project.showOnSite)
          // .sort((a, b) => a.setOrder - b.setOrder)
          .map((project) => (
            <div className="heroImage">
              <ProjectGrid key={project.id} project={project} />
            </div>
          ))}
      </div>
    </div>
  );
}
