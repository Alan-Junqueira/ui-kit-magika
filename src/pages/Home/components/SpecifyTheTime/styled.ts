import styled from 'styled-components';

export const SpecifyTheTimeContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SpecifyTheTimeContent = styled.div`
  display: flex;
  max-width: 1600px;

  @media (max-width: 425px) {
    flex-direction: column;

    gap: 32px;
    padding: 56px 24px;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 'image' 'description';
    gap: 32px;
    padding: 56px 24px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    display: grid;
    grid-template-columns: 45% 1fr;
    gap: 64px;
    padding: 72px 59px;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 45% 1fr;
    gap: 106px;
    padding: 72px 136px 86px 152px;
  }

  > div.menImage {
    position: relative;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      grid-area: image;
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  > div.description {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      grid-area: description;
    }

    h2 {
      font-weight: 700;
      font-size: ${(props) => props.theme.sizes['36px']};
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
        font-size: ${(props) => props.theme.sizes['48px']};
        line-height: 60px;
      }

      @media (min-width: 1451px) {
        font-size: ${(props) => props.theme.sizes['64px']};
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
        font-size: ${(props) => props.theme.sizes['21px']};
        line-height: 34px;

        margin-bottom: 64px;

        opacity: 0.7;
        color: ${(props) => props.theme.colors.black};
      }
    }
  }
`;
