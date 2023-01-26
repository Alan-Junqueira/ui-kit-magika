import styled, { css } from 'styled-components';

type ListContainerProps = {
  variant: 'sm' | 'sm-2' | 'md' | 'lg';
  color: 'light' | 'dark';
};

export const ListContainer = styled.div<ListContainerProps>`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 52px;
    height: 52px;
  }

  span {
    ${(props) =>
      props.color === 'dark' &&
      css`
        color: ${(props) => props.theme.colors.dark};
      `};

    ${(props) =>
      props.color === 'light' &&
      css`
        color: ${(props) => props.theme.colors['white-1']};
      `};

    ${(props) =>
      props.variant === 'sm' &&
      css`
        font-size: ${(props) => props.theme.sizes['14px']};
        line-height: 24px;
      `};

    ${(props) =>
      props.variant === 'sm-2' &&
      css`
        font-size: ${(props) => props.theme.sizes['16px']};
        line-height: 26px;
      `};
    ${(props) =>
      props.variant === 'md' &&
      css`
        font-size: ${(props) => props.theme.sizes['18px']};
        line-height: 28px;
      `};
    ${(props) =>
      props.variant === 'lg' &&
      css`
        font-size: ${(props) => props.theme.sizes['21px']};
        line-height: 34px;
      `};

    @media (max-width: 1024px) {
      font-size: ${(props) => props.theme.sizes['18px']};
      line-height: 28px;
    }

    @media (max-width: 425px) {
      font-size: ${(props) => props.theme.sizes['14px']};
      line-height: 24px;
    }
  }
`;
