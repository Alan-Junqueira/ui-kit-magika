import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';
import { NavBarContainer, NavBarContent } from './styled';
import logo from '/assets/images/logo.svg';
export const NavBar = () => {
  //* Menu programs
  const [programsOpen, setProgramsOpen] = useState<boolean>(false);
  const [programsMobileOpen, setprogramsMobileOpen] = useState();

  //* Menu Mobile
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
    }, 700);
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
          <li
            onMouseOver={() => setProgramsOpen(true)}
            onClick={() => setProgramsOpen(!programsOpen)}
          >
            <Link to="/programs" onClick={() => setProgramsOpen(false)}>
              Our Programs
            </Link>
            {programsOpen && (
              <ul onMouseLeave={() => setProgramsOpen(false)}>
                <li>
                  <Link to="/programs/informatics-engineerings">
                    Informatic Engineering
                  </Link>
                </li>
                <li>
                  <Link to="/programs/software-engineerings">
                    Software Engineering
                  </Link>
                </li>
              </ul>
            )}
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
          onClick={() => setShow(!show)}
        ></Button>
        {show && (
          <ul
            className="mobile"
            onMouseOver={handleMenuMouseOver}
            onMouseLeave={handleMenuMouseLeave}
          >
            <li onClick={() => setShow(false)} className="programs">
              <Link to="/programs">Our Programs</Link>
            </li>
            <li className="program first-program">
              <Link to="/programs/informatics-engineerings">
                Informatic Engineering
              </Link>
            </li>
            <li className="program">
              <Link to="/programs/software-engineerings">
                Software Engineering
              </Link>
            </li>
            <li onClick={() => setShow(false)}>
              <Link to="/">Awards</Link>
            </li>
            <li onClick={() => setShow(false)}>
              <Link to="/about">About Us</Link>
            </li>
            <li onClick={() => setShow(false)}>
              <Link to="/article">Article</Link>
            </li>
            <li onClick={() => setShow(false)}>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        )}
      </NavBarContent>
    </NavBarContainer>
  );
};
