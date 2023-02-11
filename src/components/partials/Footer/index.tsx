import {
  FooterContainer,
  FooterContent,
  FooterHeader,
  FooterNavigation
} from './styled';

import footerLogo from '/assets/images/footer-logo.svg';

import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo
} from 'phosphor-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterHeader>
          <img src={footerLogo} alt="" className="logo" />
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <div className="social">
            <a
              target="_blank"
              href="https://www.facebook.com/Allann.Junnkh"
              className="facebook"
            >
              <FacebookLogo size={32} weight="fill" />
            </a>
            <a target="_blank" href="https://twitter.com/_alanjunqueira">
              <TwitterLogo size={32} weight="fill" />
            </a>
            <a target="_blank" href="https://www.instagram.com/_alanjunqueira/">
              <InstagramLogo size={32} weight="fill" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/alan-junqueira/"
            >
              <LinkedinLogo size={32} weight="fill" />
            </a>
            <a target="_blank" href="https://www.youtube.com/@_alanjunqueira">
              <YoutubeLogo size={32} weight="fill" />
            </a>
          </div>
        </FooterHeader>
        <FooterNavigation>
          <ul>
            <span>Pages</span>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="/">Portfolios</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Works</a>
            </li>
            <li>
              <Link to="/carrer">Carrer</Link>
            </li>
          </ul>
          <ul>
            <span>Company</span>
            <li>
              <a href="/">Terms Conditions</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Cookies</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
          </ul>
          <ul>
            <span>Community</span>
            <li>
              <a href="/">Help Center</a>
            </li>
            <li>
              <a href="/">Forum</a>
            </li>
            <li>
              <a href="/">Webinars</a>
            </li>
            <li>
              <a href="">Professionals</a>
            </li>
          </ul>
        </FooterNavigation>
        <p> © Designed by Magika.Studio</p>
      </FooterContent>
    </FooterContainer>
  );
};
