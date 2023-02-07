import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';
import { NavBarContainer, NavBarContent } from './styled';

import logo from '/assets/images/logo.svg';

export const NavBar = () => {
  const [show, setShow] = useState<boolean>(false);
  const [menuHover, setMenuHover] = useState<boolean>(false);
  const [buttonHover, setButtonHover] = useState<boolean>(false);
  let timeoutId: number | undefined = undefined;
  const menuRef = useRef<HTMLUListElement>(null);

  const handleButtonHover: React.MouseEventHandler = () => {
    setButtonHover(true);
    setShow(true);
  };

  const handleButtonLeave: React.MouseEventHandler = () => {
    setButtonHover(false);
  };

  const handleMenuMouseOver: React.MouseEventHandler = () => {
    setMenuHover(true);
  };

  const handleMenuMouseLeave: React.MouseEventHandler = () => {
    setMenuHover(false);
    timeoutId = setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }, [timeoutId]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShow(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <NavBarContainer>
      <NavBarContent>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <ul>
          <li>
            <Link to="/">Our Programs</Link>
          </li>
          <li>
            <Link to="/">Awards</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/article">Article</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <Button label="Get Started" variant="small" className="desktop" />
        <Button
          label="Menu"
          variant="small"
          className="tablet"
          onMouseOver={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          {show && (
            <ul
              ref={menuRef}
              className="mobile"
              onMouseOver={handleMenuMouseOver}
              onMouseLeave={handleMenuMouseLeave}
            >
              <li className="programs">
                <Link to="/">Our Programs</Link>
              </li>
              <li>
                <Link to="/">Awards</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/article">Article</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          )}
        </Button>
      </NavBarContent>
    </NavBarContainer>
  );
};
