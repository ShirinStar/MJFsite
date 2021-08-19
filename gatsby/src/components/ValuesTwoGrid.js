import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ValueStyle = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    grid-template-rows: auto auto;
  }
  grid-template-rows: subgrid;
  column-gap: 10px;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2,
  p {
    margin: 0;
  }
  .gatsby-image-wrapper {
    object-fit: contain;
    box-shadow: 1px 1px 8px 4px rgba(225, 112, 52, 0.1);
  }
`;

export default function ValuesTwoGrid({ value2 }) {
  return (
    <ValueStyle>
      <a href={value2.orgLink} target="_blank" rel="noreferrer">
        <Img fixed={value2.image.asset.fixed} alt={value2.name} />
        <p>{value2.name}</p>
      </a>
    </ValueStyle>
  );
}
