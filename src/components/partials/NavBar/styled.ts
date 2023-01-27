import styled from 'styled-components';

export const NavBarContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.black};
`;

export const NavBarContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 40px 152px;

  width: 100%;
  max-width: 1600px;

  @media (max-width: 1199px) {
    padding: 24px 72px;
  }

  @media (max-width: 425px) {
    padding: 24px;
  }

  img {
    width: 100%;
    max-width: 122px;
  }

  ul {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;

    font-weight: 400;
    font-size: ${(props) => props.theme.sizes['16px']};
    line-height: 26px;

    margin-inline: 44px;

    color: ${(props) => props.theme.colors['white-1']};

    @media (max-width: 1199px) {
      margin-inline: 40px;
    }

    @media (max-width: 970px) {
      display: none;
    }

    li:nth-child(1) {
      position: relative;
      padding-right: 28px;
      cursor: pointer;

      &::before {
        position: absolute;
        content: '';
        border-style: solid;
        border-color: #fff transparent transparent;
        border-width: 6px 5px 0;
        height: 0;
        width: 0;

        right: 0;
        top: 40%;

        cursor: pointer;

        @media (max-width: 970px) {
          right: 16px;
        }
      }
    }
  }

  > button.desktop {
    @media (max-width: 970px) {
      display: none;
    }
  }
  > button.tablet {
    @media (min-width: 971px) {
      display: none;
    }

    > ul.mobile {
      display: none;
      @media (max-width: 970px) {
        position: absolute;
        top: 130%;
        right: -50%;

        display: flex;
        flex-direction: column;

        border: 1px solid ${(props) => props.theme.colors['white-2']};
        overflow: hidden;
        border-radius: 8px;

        z-index: 100;

        li {
          display: flex;
          align-items: center;

          padding: 8px 16px;

          width: 250px;
          height: 50px;

          background: rgba(0, 0, 0, 0.5);

          &:hover {
            background: ${(props) => props.theme.colors.primary};
          }

          a {
            width: 100%;
            color: ${(props) => props.theme.colors['white-2']};
            text-align: start;
          }
        }
      }
    }
  }
`;
