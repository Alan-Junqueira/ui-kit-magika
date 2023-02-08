import styled, { css } from 'styled-components';
import * as RadioGroup from '@radix-ui/react-radio-group';

import { HeroContainer } from '../../components/Hero/styled';
import { Link } from 'react-router-dom';

export const ContactContainer = styled(HeroContainer)``;

export const ContactContent = styled.div`
  max-width: 1600px;
  width: 100%;

  display: flex;
  justify-content: space-between;

  @media (max-width: 425px) {
    padding: 56px 24px;
    flex-direction: column;
    gap: 56px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    padding: 52px 72px 246px 72px;
    flex-direction: column;
    gap: 70px;
  }

  @media (min-width: 1200px) and (max-width: 1360px) {
    padding: 80px 152px 138px 152px;
    flex-direction: column;
    gap: 70px;
  }

  @media (min-width: 1361px) and (max-width: 1530px) {
    padding: 80px 152px 138px 152px;
    gap: 32px;
    flex-direction: column;
  }

  @media (min-width: 1531px) {
    padding: 80px 152px 138px 152px;
    gap: 200px;
    flex-direction: column;
  }
`;

export const ContactNavigateToHome = styled(Link)`
  font-size: 18px;
  line-height: 28px;
  width: fit-content;

  background: ${(props) => props.theme.colors.primary};

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  opacity: 0.8;
`;

export const ContactMain = styled.main`
  display: flex;
  gap: 41px;

  @media (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
  }

  div.image {
    position: relative;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 70%;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 6px;
      background: ${(props) => props.theme.colors.yellow};
    }

    @media (max-width: 425px) {
      height: 190px;
    }

    @media (min-width: 426px) and (max-width: 1199px) {
      height: 215px;
      margin-bottom: 32px;
    }

    @media (min-width: 1200px) {
      height: 294px;
      margin-bottom: 40px;
    }

    img {
      display: inline-block;
      z-index: 10;

      @media (max-width: 425px) {
        height: 190px;
      }

      @media (min-width: 426px) and (max-width: 1199px) {
        height: 215px;
      }

      @media (min-width: 1200px) {
        height: 294px;
      }
    }
  }
`;

export const ContactTitle = styled.h1`
  font-weight: 700;
  font-size: 5.8rem;
  line-height: 72px;

  margin-bottom: 24px;

  color: ${(props) => props.theme.colors['white-1']};

  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 46px;

    margin-bottom: 16px;
    text-align: center;
  }

  @media (max-width: 1025px) {
    text-align: center;
  }
`;

export const ContactDescription = styled.p`
  opacity: 0.8;
  color: ${(props) => props.theme.colors['white-1']};
  font-weight: 500;

  @media (max-width: 425px) {
    font-weight: 400;
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;
    text-align: center;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    font-size: ${(props) => props.theme.sizes.sm};
    line-height: 24px;
    text-align: center;
  }

  @media (min-width: 1200px) {
    font-size: 2.1rem;
    line-height: 34px;
    opacity: 0.7;
  }
`;

export const ContactForm = styled.form`
  input {
    padding: 16px 28px;
    width: 100%;
    margin-bottom: 24px;

    background: ${(props) => props.theme.colors.black};
    border: 1px solid ${(props) => props.theme.colors['white-1']};
    border-radius: 16px;

    font-weight: 400;
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;

    color: ${(props) => props.theme.colors['white-1']};

    opacity: 0.8;
  }
`;

export const ContactFormRoleTitle = styled.h3`
  font-weight: 500;
  font-size: 2.1rem;
  line-height: 34px;

  opacity: 0.7;

  color: ${(props) => props.theme.colors['white-1']};

  margin-bottom: 23px;
  margin-top: 31px;
`;

export const ContactFormRole = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 55px;

  @media (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 24px;
    column-gap: 48px;
  }
`;

export const ContactFormRoleButton = styled(RadioGroup.Item)`
  border-radius: 16px;
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.colors.black};
  border: 1px solid ${(props) => props.theme.colors['white-1']};

  padding: 16px;

  transition: all ease 0.3s;

  font-weight: 700;
  font-size: 1.3rem;
  line-height: 22px;

  color: ${(props) => props.theme.colors['white-1']};

  &[data-state='unchecked']:hover {
    transition: all ease 0.2s;
    background-color: ${(props) => props.theme.colors['yellow-100']};
    color: ${(props) => props.theme.colors.black};

    div.circle {
      background: transparent;
      width: 24px;
      height: 24px;
      border: 2px solid ${(props) => props.theme.colors.black};

      border-radius: 50%;
      margin-right: 16px;

      position: relative;

      transition: all ease 0.3s;

      &::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.black};
      }
    }
  }

  &[data-state='checked'] {
    font-weight: 700;
    font-size: ${(props) => props.theme.sizes.xs};
    line-height: 15px;

    background: ${(props) => props.theme.colors['banner-secondary']};
    color: ${(props) => props.theme.colors.black};

    div.circle {
      background: transparent;
      width: 24px;
      height: 24px;
      border: 2px solid ${(props) => props.theme.colors.black};

      border-radius: 50%;
      margin-right: 16px;

      position: relative;

      transition: all ease 0.3s;

      &::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.black};
      }
    }

    span {
      font-family: 'Inter';
      font-weight: 400;
      font-size: 0.9rem;
      line-height: 11px;

      text-transform: uppercase;
      letter-spacing: normal;

      margin-right: 10px;

      color: ${(props) => props.theme.colors.black};

      &:before {
        content: '';
      }
    }
  }

  div.circle {
    background: transparent;
    width: 24px;
    height: 24px;
    border: 2px solid ${(props) => props.theme.colors['white-1']};

    border-radius: 50%;
    margin-right: 16px;
  }

  span {
    font-weight: 400;
    font-size: 1.1rem;
    margin-right: 12px;
    line-height: 20px;

    letter-spacing: 3px;

    position: relative;

    &::before {
      position: absolute;
      content: ':';
      right: -5px;
    }
  }
`;

type ContactPolygonProps = {
  variant: 'blue' | 'red' | 'orange' | 'yellow';
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

export const ContactPolygon = styled.div<ContactPolygonProps>`
  position: absolute;
  transform: rotate(-45deg);

  z-index: 10;

  animation: opacityAnimaiton ease;
  animation-iteration-count: infinite;

  @keyframes opacityAnimaiton {
    0% {
      opacity: 0.5;
      transform: rotate(45deg) scale(0.5);
    }

    50% {
      opacity: 1;
      transform: rotate(45deg) scale(1);
    }

    100% {
      opacity: 0.5;
      transform: rotate(45deg) scale(0.5);
    }
  }

  @media (max-width: 425px) {
    width: 19px;
    height: 19px;
    border-radius: 3px;
  }

  @media (max-width: 1199px) {
    width: 17px;
    height: 17px;
    border-radius: 3px;
  }

  @media (min-width: 1200px) {
    width: 32px;
    height: 32px;
    border-radius: 5.17536px;
  }

  ${(props) =>
    props.top && props.top < 0
      ? css`
          top: ${props.top}px;
        `
      : css`
          top: ${props.top}%;
        `};

  ${(props) =>
    props.right && props.right < 0
      ? css`
          right: ${props.right}px;
        `
      : css`
          right: ${props.right}%;
        `};

  ${(props) =>
    props.bottom && props.bottom < 0
      ? css`
          bottom: ${props.bottom}px;
        `
      : css`
          bottom: ${props.bottom}%;
        `};

  ${(props) =>
    props.left && props.left < 0
      ? css`
          left: ${props.left}px;
        `
      : css`
          left: ${props.left}%;
        `};

  ${(props) =>
    props.variant === 'blue' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-1']};
      animation-duration: 4s;
    `};

  ${(props) =>
    props.variant === 'red' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-2']};
      animation-duration: 5s;
    `};

  ${(props) =>
    props.variant === 'orange' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-3']};
      animation-duration: 6s;
    `};

  ${(props) =>
    props.variant === 'yellow' &&
    css`
      background-color: ${(props) => props.theme.colors.yellow};
      animation-duration: 6s;
    `};

  &.mobile {
    @media (min-width: 1200px) {
      display: none;
    }
  }

  &.desktop {
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;
