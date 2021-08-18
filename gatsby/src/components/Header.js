import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import { globalHistory } from '@reach/router';
import Humburger from './Hamburger.js';

export default function Header() {
  let btnRef = useRef(null);
  let circle = useRef(null);

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: '☰',
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
            menuName: '☰',
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
        menuName: 'X',
      });
      btnRef.style.color = 'white';
      btnRef.style.transform = 'scale(1.3)';
      circle.style.filter = 'invert(1)';
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: '☰',
      });
      btnRef.style.color = 'black';
      circle.style.filter = 'invert(0)';
      btnRef.style.transform = 'scale(1)';
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'X',
      });
      btnRef.style.color = 'white';
      circle.style.filter = 'invert(1)';
      btnRef.style.transform = 'scale(1.3)';
    }
  };

  return (
    <header>
      <div className="inner-header">
        <div className="menuHome">
          <div className="headerLogo">
            <Link className="logoNav" to="/">
              M·J·F
            </Link>
          </div>
          <div className="navMenu">
            <div className="circle1" ref={(el) => (circle = el)} />
            <button
              ref={(el) => (btnRef = el)}
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
