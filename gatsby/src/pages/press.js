import React from 'react';
import { graphql } from 'gatsby';
import PressList from '../components/PressList';

export default function PressPage({ data }) {
  const presses = data.press.nodes;
  return (
    <>
      <PressList presses={presses} />
    </>
  );
}

export const pressQuery = graphql`
  query {
    press: allSanityPress {
      nodes {
        name
        id
        pressLink
        year
        image {
          asset {
            fixed(width: 450, height: 300) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;