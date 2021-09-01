import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import { globalHistory } from '@reach/router';
import { window } from 'browser-monads';
import Humburger from './Hamburger.js';

export default function Header() {
  let btnRef = useRef(null);
  let circle = useRef(null);
  let nameMenuRef = useRef(null);

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: '☰',
  });
  const [disabled, setDisabled] = useState(false);
  const [logoShow, setLogoShow] = useState(true);

  useEffect(() => {
    // change url in production
    if (
      window.location.href === 'http://localhost:8000/' ||
      window.location.href === 'http://localhost:8000/#videoDiv'
    ) {
      setLogoShow(true);
    } else {
      setLogoShow(false);
    }

    if (state.menuName === '☰') {
      circle.style.filter = 'invert(0)';
      btnRef.style.transform = 'scale(1)';
      nameMenuRef.style.color = 'black';
    }
  }, [window.location.href]);

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
      nameMenuRef.style.color = 'white';
      btnRef.style.transform = 'scale(1.3)';
      circle.style.filter = 'invert(1)';
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: '☰',
      });
      nameMenuRef.style.color = 'black';
      circle.style.filter = 'invert(0)';
      btnRef.style.transform = 'scale(1)';
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'X',
      });
      circle.style.filter = 'invert(1)';
      btnRef.style.transform = 'scale(1.3)';
      nameMenuRef.style.color = 'white';
    }
  };

  return (
    <header>
      <div className="inner-header">
        <div className="menuHome">
          <div className="headerLogo">
            <Link
              className="logoNav"
              to="/"
              style={logoShow ? { display: 'none' } : {}}
            >
              MARY JOHN FRANK
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
              <a ref={(el) => (nameMenuRef = el)} className="menuName">
                {state.menuName}
              </a>
            </button>
          </div>
        </div>
        <Humburger state={state} />
      </div>
    </header>
  );
}
