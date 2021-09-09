import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PressStyle = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    grid-template-rows: auto auto;
  }
  grid-template-rows: subgrid;
  /* column-gap: 10px; */
  row-gap: 2px;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2,
  p {
    margin: 0;
  }
  .pressImage {
    max-height: 100%;
    /* width: 100%; */
    object-fit: contain;
    border: 1px solid #85493e;
  }
  .pressImage:hover {
    border: 1px solid #c4ffe7;
  }
  a {
    color: #85493e;
  }
  a:hover {
    color: #c4ffe7;
  }
`;

export default function PressGrid({ press }) {
  return (
    <PressStyle>
      <a href={press.pressLink} target="_blank" rel="noreferrer">
        <img
          className="pressImage"
          src={press.image.asset.url}
          alt={press.name}
        />
        <div className="pressInfo">
          <p className="presstext">
            {press.name} | {press.year}
          </p>
        </div>
      </a>
    </PressStyle>
  );
}
