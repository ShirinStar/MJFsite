import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import { globalHistory } from '@reach/router';
import { window } from 'browser-monads';
import { isMobile } from 'react-device-detect';
import Humburger from './Hamburger.js';
import InnerNav from './InnerNav.js';

export default function Header() {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'bars',
  });
  const [disabled, setDisabled] = useState(false);
  // const [logoShow, setLogoShow] = useState(true);
  const [black, setBlack] = useState(true);
  let labelClasses = 'barsMenu';

  if (state.menuName !== 'bars') {
    labelClasses += ' ex';
  }

  // checking if main page to hide the logo
  // useEffect(() => {
  //   // change url in production
  //   if (
  //     window.location.href === 'http://localhost:8000/' ||
  //     window.location.href === 'https://maryjohnfrank.netlify.app/'
  //   ) {
  //     setLogoShow(true);
  //   } else {
  //     setLogoShow(false);
  //   }
  // }, [window.location.href]);

  // checking if inner pages where clicked from the menu screen
  useEffect(
    () =>
      globalHistory.listen(({ action }) => {
        if (action === 'PUSH')
          setState({
            initial: false,
            clicked: false,
            menuName: 'bars',
          });
        setBlack(true);
      }),
    [setState]
  );

  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  // showing menu page
  const handleMenu = () => {
    disabledMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'ex',
      });
      setBlack(false);
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'bars',
      });
      setBlack(true);
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'ex',
      });
      setBlack(false);
    }
  };

  return (
    <header>
      <div className="inner-header">
        <div className="menuHome">
          <div className="headerLogo">
            <Link className="logoNav" to="/">
              MARY JOHN FRANK
            </Link>
          </div>
          {isMobile ? (
            <div className="navMenu">
              {/* <div className={black ? 'circle1 black' : 'circle1 white'} /> */}
              <div className="barsDiv">
                <label className={labelClasses} htmlFor="check">
                  <input
                    className="barsCheck"
                    type="checkbox"
                    id="check"
                    onClick={handleMenu}
                    disabled={disabled}
                  />
                  <span className={black ? 'barSpan black' : 'barSpan white'} />
                  <span className={black ? 'barSpan black' : 'barSpan white'} />
                  <span className={black ? 'barSpan black' : 'barSpan white'} />
                </label>
              </div>
            </div>
          ) : (
            <div className="innerPageNav">
              <InnerNav />
            </div>
          )}
        </div>
        <Humburger state={state} />
      </div>
    </header>
  );
}
