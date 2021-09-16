import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const InnerNavStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2.5rem;
  justify-content: flex-end;
  .socialNav {
    display: flex;
    justify-content: space-evenly;
    padding: 0 5px;
  }
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 0rem;
    align-items: center;
    padding: 0;
    padding-right: 5px;
    margin-right: 0px;
    font-size: 18px;
    color: 'black';
    &[aria-current='page'] {
      border-bottom: 2px solid #fff;
    }
    &:hover {
      color: #c4ffe7;
    }
  }
  @media (max-width: 768px) {
    grid-gap: 0 0rem;
    margin-top: 0.6rem;
    text-align: center;
    justify-content: center;
    a {
      padding: 0 4px;
      font-size: 14px;
      grid-gap: 0 1rem;
      line-height: 1.8;
    }
  }
`;

export default function InnerNav() {
  return (
    <>
      <InnerNavStyles>
        <Link to="/reels">
          <span className="tagName">Reels</span>
        </Link>
        <Link to="/projects">
          <span className="tagName">Videos</span>
        </Link>
        <Link to="/about">
          <span className="tagName">Contact</span>
        </Link>
        <Link to="/press">
          <span className="tagName">Press</span>
        </Link>
        {/* <Link to="/values">
          <span className="tagName">Values</span>
        </Link> */}
        <div className="socialNav">
          <a
            href="https://www.instagram.com/maryjohnfrank/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/instagram_icon_nofill.png"
              alt="instagram"
              height="26px"
            />
          </a>
          <a href="mailto:maryjohn.frank@gmail.com">
            <img src="/email_icon.png" alt="email" height="26px" />
          </a>
        </div>
      </InnerNavStyles>
    </>
  );
}