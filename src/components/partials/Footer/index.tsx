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
            <a href="" className="facebook">
              <FacebookLogo size={32} weight="fill" />
            </a>
            <a href="">
              <TwitterLogo size={32} weight="fill" />
            </a>
            <a href="">
              <InstagramLogo size={32} weight="fill" />
            </a>
            <a href="">
              <LinkedinLogo size={32} weight="fill" />
            </a>
            <a href="">
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
              <a href="/portfolios">Portfolios</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/works">Works</a>
            </li>
            <li>
              <a href="/carrer">Carrer</a>
            </li>
          </ul>
          <ul>
            <span>Company</span>
            <li>
              <a href="/terms">Terms Conditions</a>
            </li>
            <li>
              <a href="/policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/cookies">Cookies</a>
            </li>
            <li>
              <a href="/carrers">Careers</a>
            </li>
          </ul>
          <ul>
            <span>Community</span>
            <li>
              <a href="/help">Help Center</a>
            </li>
            <li>
              <a href="/forum">Forum</a>
            </li>
            <li>
              <a href="/webinars">Webinars</a>
            </li>
            <li>
              <a href="Professionals">Professionals</a>
            </li>
          </ul>
        </FooterNavigation>
        <p><div></div> © Designed by Magika.Studio</p>
      </FooterContent>
    </FooterContainer>
  );
};
