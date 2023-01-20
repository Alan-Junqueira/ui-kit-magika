import React from 'react';
import { Button } from '../../Button';
import { NavBarContainer } from './styled';

import logo from '/assets/images/logo.svg';

export const NavBar = () => {
  return (
    <NavBarContainer>
      <img src={logo} alt="" />
      <ul>
        <li>
          <a href="">Our Programs</a>
        </li>
        <li>
          <a href="">Awards</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Article</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
      </ul>

      <Button label="Get Started" variant="small" className="desktop" />
      <Button label="Menu" variant="small" className="tablet" />
    </NavBarContainer>
  );
};
