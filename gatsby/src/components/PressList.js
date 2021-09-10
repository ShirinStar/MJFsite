import React from 'react';
import styled from 'styled-components';
import PressGrid from './PressGrid';
import SEO from './SEO';

const PressGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 4rem;
  margin-top: 20px;

  @media only screen and (min-width: 300px) and (max-width: 700px) {
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
`;

export default function ProjectsList({ presses }) {
  return (
    <>
      <SEO title="Press" />
      <h2 className="pageTitle">Press</h2>
      <PressGridStyle>
        {presses
          .sort((a, b) => b.year - a.year)
          .map((press) => (
            <div key={press.id}>
              <PressGrid key={press.id} press={press} />
            </div>
          ))}
      </PressGridStyle>
    </>
  );
}
