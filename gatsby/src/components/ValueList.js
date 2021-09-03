import React from 'react';
import styled from 'styled-components';
import SEO from './SEO';
import ValuesOneGrid from './ValuesOneGrid';
import ValuesTwoGrid from './ValuesTwoGrid';
import FooterNoFixed from './FooterNoFixed';

const ValuesGridStyle = styled.div`
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

export default function ValueList({ value1, value2 }) {
  console.log(value2);
  return (
    <>
      <SEO title="Values" />
      <div className="container">
        <div className="wrapper">
          <h2 className="pageTitle">Values</h2>
          {/* <div>
            <h3>Section one</h3>
            <ValuesGridStyle>
              {value1.map((value) => (
                <div>
                  <ValuesOneGrid key={value.id} value1={value} />
                </div>
              ))}
            </ValuesGridStyle>
          </div>
          <div>
            <h3>Section two</h3>
            <ValuesGridStyle>
              {value2.map((value) => (
                <div>
                  <ValuesTwoGrid key={value.id} value2={value} />
                </div>
              ))}
            </ValuesGridStyle>
          </div> */}
        </div>
      </div>
      <FooterNoFixed />
    </>
  );
}
