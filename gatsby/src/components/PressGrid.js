import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PressStyle = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    grid-template-rows: auto auto;
  }
  grid-template-rows: subgrid;
  column-gap: 10px;
  row-gap: 10px;
  h2,
  p {
    margin: 0;
  }
`;

export default function PressGrid({ press }) {
  return (
    <>
      <PressStyle>
        <a href={press.pressLink}>
          <Img fluid={press.image.asset.fluid} alt={press.name} />
        </a>

        <div className="pressInfo">
          <p>{press.name}</p>
          <p>{press.year}</p>
        </div>
      </PressStyle>
    </>
  );
}
