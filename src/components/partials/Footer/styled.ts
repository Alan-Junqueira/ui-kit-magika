import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.black};
`;

export const FooterContent = styled.div`
  padding: 72px 120px;
  max-width: 1600px;
  width: 100%;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-areas: 'header nav' 'footer footer';
    padding-bottom: 72px;

    justify-content: space-between;
  }

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

    @media (min-width: 1200px) {
      grid-area: footer;
      margin-inline: 72px;
    }

    &::before {
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
  @media (min-width: 1200px) {
    grid-area: header;

    max-width: 388px;
    width: 100%;
  }

  @media (max-width: 1199px) {
    padding-inline: 120px;
    width: 49%;
    margin-bottom: 56px;
  }

  @media (max-width: 1100px) {
    width: 55%;
  }

  @media (max-width: 982px) {
    width: 60%;
  }

  @media (max-width: 898px) {
    width: 65%;
  }

  @media (max-width: 830px) {
    width: 70%;
  }

  @media (max-width: 764px) {
    width: 75%;
  }

  @media (max-width: 720px) {
    width: 80%;
  }

  @media (max-width: 674px) {
    width: 90%;
  }

  @media (max-width: 594px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    padding-inline: 24px;
    margin-bottom: 64px;
  }
  > img.logo {
    display: inline-block;

    height: auto;

    margin-bottom: 16px;

    @media (max-width: 1199px) {
      width: 200px;
    }

    @media (max-width: 425px) {
      width: 123px;
    }
  }

  > p {
    font-weight: 400;

    margin-bottom: 32px;

    color: ${(props) => props.theme.colors['white-1']};

    @media (max-width: 1199px) {
      font-size: ${(props) => props.theme.sizes['18px']};
      line-height: 28px;
    }

    @media (max-width: 425px) {
      font-size: ${(props) => props.theme.sizes['16px']};
      line-height: 26px;
    }
  }

  > div.social {
    display: flex;
    align-items: center;
    gap: 32px;

    @media (min-width: 425px) and (max-width: 594px) {
      gap: 10px;
    }

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

  margin-bottom: 40px;

  @media (min-width: 1200px) {
    grid-area: nav;
    gap: 80px;
  }

  @media (max-width: 1199px) {
    flex-direction: row;
    gap: 64px;
    padding-inline: 120px;
  }

  @media (max-width: 848px) {
    flex-direction: column;
    gap: 64px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 64px;
    padding-inline: 24px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;

    max-width: 184px;
    width: 100%;

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
