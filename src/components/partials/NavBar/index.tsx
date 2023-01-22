import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';
import { NavBarContainer, NavBarContent } from './styled';

import logo from '/assets/images/logo.svg';

export const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarContent>
        <img src={logo} alt="" />
        <ul>
          <li>
            <Link to="/">Our Programs</Link>
          </li>
          <li>
            <Link to="/">Awards</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">Article</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>

        <Button label="Get Started" variant="small" className="desktop" />
        <Button label="Menu" variant="small" className="tablet" />
      </NavBarContent>
    </NavBarContainer>
  );
};
