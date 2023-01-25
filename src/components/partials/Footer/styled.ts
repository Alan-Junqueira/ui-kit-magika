import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.black};
`;

export const FooterContent = styled.div`
  padding: 72px 120px;
  width: 100%;

  @media (max-width: 1199px) {
    padding: 72px 0;
  }

  @media (max-width: 425px) {
    padding: 32px 0;
  }

  > p {
    position: relative;
    overflow: hidden;
    text-align: center;
    padding-top: 40px;

    font-weight: 400;
    font-size: ${(props) => props.theme.sizes['18px']};
    line-height: 28px;

    color: ${(props) => props.theme.colors['white-1']};

    > div {
      position: absolute;
      content: '';
      width: 200vw;
      height: 1px;
      top: 0;
      left: -50%;
      background-image: ${(props) => props.theme.colors.primary};
      opacity: 0.8;
    }
  }
`;

export const FooterHeader = styled.header`
  padding-inline: 24px;
  margin-bottom: 64px;

  @media (max-width: 1199px) {
    padding-inline: 72px;
    width: 49%;
    margin-bottom: 56px;
  }
  > img.logo {
    display: inline-block;

    width: 123px;
    height: auto;

    margin-bottom: 16px;

    @media (max-width: 1199px) {
      width: 200px;
    }
  }

  > p {
    font-weight: 400;
    font-size: ${(props) => props.theme.sizes['16px']};
    line-height: 26px;

    margin-bottom: 32px;

    color: ${(props) => props.theme.colors['white-1']};

    @media (max-width: 1199px) {
      font-size: ${(props) => props.theme.sizes['18px']};
      line-height: 28px;
    }
  }

  > div.social {
    display: flex;
    align-items: center;
    gap: 32px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 32px;
      height: 32px;

      border-radius: 50%;

      background-color: ${(props) => props.theme.colors['brand-3']};

      svg {
        width: 18px;
        height: auto;

        color: ${(props) => props.theme.colors['white-1']};
      }
    }

    a.facebook {
      position: relative;

      width: 32px;
      height: 32px;

      background-color: ${(props) => props.theme.colors['white-1']};

      svg {
        position: absolute;
        top: -4px;
        width: 40px;
        border-radius: 50%;

        color: ${(props) => props.theme.colors['brand-3']};
      }
    }
  }
`;

export const FooterNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 64px;

  padding-inline: 24px;
  margin-bottom: 40px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;

    span {
      font-weight: 500;
      font-size: ${(props) => props.theme.sizes['21px']};
      line-height: 34px;

      color: ${(props) => props.theme.colors['white-1']};
    }

    li {
      font-weight: 400;
      font-size: ${(props) => props.theme.sizes['18px']};
      line-height: 28px;

      color: ${(props) => props.theme.colors['white-1']};
    }
  }
`;
