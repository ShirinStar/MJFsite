import React from 'react';
import styled from 'styled-components';
import PressGrid from './PressGrid';
import SEO from './SEO';
import Footer from './Footer';

const PressGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 6rem;
  /* grid-auto-rows: auto auto; */
`;

// const PressGridCointainer = styled.div`
//   max-width: 900px;
//   margin-left: auto;
//   margin-right: auto;
//   margin-bottom: 10rem;
//   align-items: center;
// `;

export default function ProjectsList({ presses }) {
  return (
    <>
      <SEO title="Press" />
      <div className="container">
        <div className="wrapper">
          <h2 className="pageTitle">Press</h2>
          <PressGridStyle>
            {presses.map((press) => (
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
