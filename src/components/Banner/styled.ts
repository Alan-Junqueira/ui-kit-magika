import styled, { css } from 'styled-components';
import { IBannerProps } from '.';

export const BannerContainer = styled.div<IBannerProps>`
  position: relative;

  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;

  overflow: hidden;

  font-family: 'Space Grotesk';
  font-size: ${(props) => props.theme.sizes['52px']};
  font-weight: 700;
  line-height: 60px;

  text-align: center;
  letter-spacing: 7px;

  color: #060919;

  width: 130%;
  height: 130px;
  padding-block: 36px;


  @media (max-width: 1290px) {
    font-size: ${(props) => props.theme.sizes['40px']};
    height: 103px;
    padding-block: 27px;
  }

  @media (max-width: 957px) {
    font-size: ${(props) => props.theme.sizes['30px']};
    height: 76px;
    padding-block: 20px;
  }

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background: ${(props) => props.theme.colors.primary}; ;
    `};

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background: ${(props) => props.theme.colors['banner-secondary']}; ;
    `};

  > div.content {
    position: absolute;

    animation: animateBanner;
    animation-duration: 12s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes animateBanner {
      from {
        left: 0;
      }

      to {
        left: -100%;
      }
    }
  }
`;
