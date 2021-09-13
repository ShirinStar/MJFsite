import React from 'react';
import styled from 'styled-components';
import PressGrid from './PressGrid';
import SEO from './SEO';

const PressGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(1fr));
  gap: 2rem;
  padding-bottom: 70px;
  @media only screen and (min-width: 300px) and (max-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(1fr));
    gap: 0.5rem;
  }
`;

export default function ProjectsList({ presses }) {
  return (
    <>
      <SEO title="Press" />
      <h2 className="pageTitle">Press</h2>
      <PressGridStyle>
        {presses.map((press) => (
          <div key={press.id}>
            <PressGrid key={press.id} press={press} />
          </div>
        ))}
      </PressGridStyle>
    </>
  );
}
