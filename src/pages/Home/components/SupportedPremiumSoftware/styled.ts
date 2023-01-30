import styled from 'styled-components';

export const SupportedPremiumSoftwareContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 65%;
    height: 62%;
    background: linear-gradient(
      90deg,
      rgba(255, 156, 1, 0.22) 0%,
      rgba(251, 184, 78, 0) 100%
    );
    opacity: 0.7;
  }
`;

export const SupportedPremiumSoftwareContent = styled.div`
  display: flex;
  max-width: 1600px;

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 32px;
    padding: 56px 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
    padding: 56px 24px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    display: grid;
    grid-template-columns: 40% 1fr;
    gap: 64px;
    padding: 56px 72px;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 40% 1fr;
    gap: 106px;
    padding: 164px 152px 122px 152px;
  }

  > div.softwaresImage {
    position: relative;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: auto;
    }
  }

  > div.description {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-weight: 700;
      font-size: 3.6rem;
      line-height: 46px;

      @media (max-width: 425px) {
        margin-bottom: 16px;
      }

      @media (max-width: 1199px) {
        margin-bottom: 32px;
      }

      @media (min-width: 1200px) {
        font-weight: 700;

        margin-bottom: 52px;
      }

      @media (min-width: 1200px) and (max-width: 1450px) {
        font-size: ${(props) => props.theme.sizes['5xl']};
        line-height: 60px;
      }

      @media (min-width: 1451px) {
        font-size: 6.4rem;
        line-height: 72px;
      }

      color: ${(props) => props.theme.colors.black};
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;

      color: ${(props) => props.theme.colors.black};

      margin-bottom: 32px;

      @media (min-width: 1200px) {
        font-size: 2.1rem;
        line-height: 34px;

        margin-bottom: 64px;

        opacity: 0.7;
        color: ${(props) => props.theme.colors.black};
      }
    }
  }
`;
