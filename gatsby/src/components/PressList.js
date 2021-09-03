import React from 'react';
import styled from 'styled-components';
import PressGrid from './PressGrid';
import SEO from './SEO';
import FooterNotFixed from './FooterNoFixed';

const PressGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2.8rem;
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
      <div className="container">
        <div className="wrapper">
          <h2 className="pageTitle">Press</h2>
          <PressGridStyle>
            {presses
              .sort((a, b) => b.year - a.year)
              .map((press) => (
                <div>
                  <PressGrid key={press.id} press={press} />
                </div>
              ))}
          </PressGridStyle>
        </div>
      </div>
      <FooterNotFixed />
    </>
  );
}
