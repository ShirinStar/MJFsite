import React from 'react';
import styled from 'styled-components';
import ProjectPage from './ProjectPage';

const ProjectGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

const ProjectGridCointainer = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10rem;
  align-items: center;
`;

export default function ProjectsList({ projects }) {
  return (
    <ProjectGridCointainer>
      <ProjectGridStyle>
        {projects.map((project) => (
          <ProjectPage key={project.id} project={project} />
        ))}
      </ProjectGridStyle>
    </ProjectGridCointainer>
  );
}
