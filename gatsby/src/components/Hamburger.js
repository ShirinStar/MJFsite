import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap';

export default function Hamburger({ state }) {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBg = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let humSocial = useRef(null);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: 'right top',
      skewY: 2,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.1,
      },
    });
  };

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: 'power3.inOut',
    });
  };

  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.1,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.2,
      },
    });
  };

  const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: 'power3.inOut',
    });
  };

  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: 'power3.inOut',
    });
  };

  useEffect(() => {
    if (state.clicked === false) {
      gsap.to([revealMenu, revealMenuBg], {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: 'none' },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.menuOpen === null)
    ) {
      gsap.to(menu, {
        duration: 0,
        css: { display: 'block' },
      });
      gsap.to([revealMenu, revealMenuBg], {
        duration: 0,
        opacity: 1,
        height: '100%',
      });
      staggerReveal(revealMenuBg, revealMenu);
      fadeInUp(humSocial);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revealMenuBg = el)}
        className="menu-secondary-background-color"
      />
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div className="container">
          <div className="wrapper">
            <div className="hamLinks">
              <nav>
                <ul>
                  <li ref={(el) => (line1 = el)}>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseLeave={(e) => handleHoverExit(e)}
                      className="meLink"
                      to="/projects"
                    >
                      Projects
                    </Link>
                  </li>
                  <li ref={(el) => (line2 = el)}>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseLeave={(e) => handleHoverExit(e)}
                      className="meLink"
                      to="/press"
                    >
                      Press
                    </Link>
                  </li>
                  <li ref={(el) => (line3 = el)}>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseLeave={(e) => handleHoverExit(e)}
                      className="meLink"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (humSocial = el)} className="humSocialLinks">
                <p>Linkdin</p>
                <p>Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
