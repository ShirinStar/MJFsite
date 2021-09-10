import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import ValueList from '../components/ValueList';

export default function ValuePage({ data }) {
  const value1 = data.value1.nodes;
  const value2 = data.value2.nodes;

  return (
    <>
      <ValueList value1={value1} value2={value2} />
    </>
  );
}

export const pressQuery = graphql`
  query {
    value1: allSanityValue1 {
      nodes {
        name
        personLink
        image {
          asset {
            url
            fixed(width: 220, height: 300) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    value2: allSanityValue2 {
      nodes {
        name
        orgLink
        image {
          asset {
            url
            fixed(width: 220, height: 300) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
