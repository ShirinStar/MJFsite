import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import PressList from '../components/PressList';

export default function PressPage({ data, setEventTrigger, eventTrigger }) {
  const presses = data.press.nodes;
  useEffect(() => {
    setEventTrigger(eventTrigger + 1);
  }, []);

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
