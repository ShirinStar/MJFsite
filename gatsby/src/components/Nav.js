import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Header from './Header.js';

// const NavStyles = styled.nav`
//   margin-bottom: 3rem;
//   margin-top: 3rem;
//   display: flex;
//   .header {
//   }
//   .menuDiv {
//     display: flex;
//     max-width: 95%;
//     padding-left: 80%;
//   }
//   ul {
//     margin: 0;
//     padding: 0;
//     //padding-right: 10rem;
//     /* display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-gap: 15rem; */
//     text-align: center;
//     list-style: none;
//   }
//   a {
//     //font-size: 3rem;
//     &:hover {
//       color: white;
//     }
//     &[aria-current='page'] {
//       color: grey;
//     }
//   }
//   .logoNav {
//     padding-left: 50px;
//     width: 50px;
//   }
// `;

export default function Nav() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <Header />
        </div>
      </div>
    </>
  );
}
