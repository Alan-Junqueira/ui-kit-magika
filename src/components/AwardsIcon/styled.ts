import styled, { css } from 'styled-components';
import { IAwardsIcon } from '.';

export const AwardsIconContainer = styled.div<IAwardsIcon>`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 90px;
  width: 100%;
  height: 80px;

  border-radius: 12px;

  padding: 10px 15px;

  ${(props) =>
    props.variant === 'first' &&
    css`
      background-color: ${(props) => props.theme.colors['yellow-100']}; ;
    `};

  ${(props) =>
    props.variant === 'second' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-2']}; ;
    `};

  ${(props) =>
    props.variant === 'third' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-1']}; ;
    `};

  img {
    max-width: 60px;
    width: 100%;
    height: auto;
  }
`;
