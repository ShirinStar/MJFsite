import React from 'react';
import styled from 'styled-components';
import PressGrid from './PressGrid';
import SEO from './SEO';
import Footer from './Footer';

const PressGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2.2rem;
  margin-top: 20px;
  /* grid-auto-rows: auto auto; */
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
      <Footer />
    </>
  );
}
