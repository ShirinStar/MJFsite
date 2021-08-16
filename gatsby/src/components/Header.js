import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { globalHistory } from '@reach/router';
import Humburger from './Hamburger.js';

export default function Header() {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu',
  });
  const [disabled, setDisabled] = useState(false);

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
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="headerLogo">
              <Link className="logoNav" to="/">
                Mary John Frank
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
            <Humburger state={state} />
          </div>
        </div>
      </div>
    </header>
  );
}
