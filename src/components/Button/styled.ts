import styled, { css } from 'styled-components';

interface IButtonContainer {
  full?: boolean;
  variant: 'small' | 'big';
  withIcon?: boolean;
}

export const ButtonContainer = styled.button<IButtonContainer>`
  line-height: 24px;
  color: ${(props) => props.theme.colors['white-1']};

  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 15px 36px ${(props) => props.theme.shadow.button};
  border-radius: 60px;

  img {
    display: none;
  }

  ${(props) =>
    props.withIcon &&
    props.variant === 'big' &&
    css`
      display: flex;
      align-items: center;
      gap: 16px;

      img {
        display: inline;
        width: 24px;
        height: auto;
      }
    `};

  ${(props) =>
    props.withIcon &&
    props.variant === 'small' &&
    css`
      display: flex;
      align-items: center;
      gap: 10px;

      img {
        display: inline;
        width: 16px;
        height: auto;
      }
    `};

  ${(props) =>
    props.variant === 'big' &&
    css`
      padding: 24px 32px 24px 32px;
    `};

  ${(props) =>
    props.variant === 'small' &&
    css`
      padding: 16px 32px 16px 32px;
    `};

  ${(props) =>
    props.full &&
    css`
      width: 100%;
    `};
`;
