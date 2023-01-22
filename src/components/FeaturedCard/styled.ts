import styled, { css } from 'styled-components';

type FeaturedCardContainerProps = {
  variant: 'blue' | 'red' | 'orange';
};

export const FeaturedCardContainer = styled.div<FeaturedCardContainerProps>`
  display: flex;
  align-items: center;
  gap: 15px;

  max-width: 315px;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 15px;
    border-radius: 50%;

    ${(props) =>
      props.variant === 'blue' &&
      css`
        background-color: ${(props) => props.theme.colors['brand-1']};
      `};

    ${(props) =>
      props.variant === 'red' &&
      css`
        background-color: ${(props) => props.theme.colors['brand-2']};
      `};

    ${(props) =>
      props.variant === 'orange' &&
      css`
        background-color: ${(props) => props.theme.colors['brand-3']};
        padding: 16px 14px;
      `};
  }

  p {
    font-size: ${(props) => props.theme.sizes['18px']};
    line-height: 28px;

    color: ${(props) => props.theme.colors.black};
  }
`;
