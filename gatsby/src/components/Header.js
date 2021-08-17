import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import { globalHistory } from '@reach/router';
import Humburger from './Hamburger.js';

export default function Header() {
  let logoRef = useRef(null);
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu',
  });
  const [disabled, setDisabled] = useState(false);
  const [logoPressed, setLogoPressed] = useState(false);

  // const checkingLogoPressed = () => {
  //   setLogoPressed(true);
  //   setTimeout(() => {
  //     setLogoPressed(false);
  //   }, 1000);
  // };

  // const showLogo = () => {
  //   if (state.initial === false || logoPressed === true) {
  //     logoRef.style.visibility = 'hidden';
  //   } else {
  //     logoRef.style.visibility = 'visible';
  //   }
  // };

  useEffect(
    () =>
      globalHistory.listen(({ action }) => {
        if (action === 'PUSH')
          setState({
            clicked: false,
            menuName: 'Menu',
          });
      }),
    [setState]
  );

  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  const handleMenu = () => {
    disabledMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close',
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu',
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'Close',
      });
    }
  };

  return (
    <header>
      <div className="inner-header">
        <div className="menuHome">
          <div className="headerLogo" ref={(el) => (logoRef = el)}>
            <Link className="logoNav" to="/">
              M·J·F
            </Link>
          </div>
          <div className="navMenu">
            <button
              disabled={disabled}
              className="btnMenu"
              type="button"
              onClick={handleMenu}
            >
              {state.menuName}
            </button>
          </div>
        </div>
        <Humburger state={state} />
      </div>
    </header>
  );
}
