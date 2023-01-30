import styled from 'styled-components';

export const AwardsFrameContainer = styled.div`
  display: flex;
  align-items: center;

  padding-bottom: 16px;
  gap: 32px;

  position: relative;
  &::before {
    position: absolute;
    content: '';
    height: 1px;
    width: 100%;
    bottom: 0;
    background: ${(props) => props.theme.colors.primary};
  }

  span {
    flex: 1;

    @media (max-width: 425px) {
      font-weight: 400;
      font-size: ${(props) => props.theme.sizes.base};
      line-height: 26px;

      color: ${(props) => props.theme.colors.black};
    }
  }

  p {
  }
`;
