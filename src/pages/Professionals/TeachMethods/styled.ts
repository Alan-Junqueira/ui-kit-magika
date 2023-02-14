import styled from 'styled-components';

export const TeachMethodsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeachMethodsContent = styled.div`
  width: 100%;
  max-width: 1600px;

  @media (max-width: 425px) {
    padding: 56px 24px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    padding: 56px 72px;
  }

  @media (min-width: 1200px) {
    padding: 104px 152px;
  }
`;

export const TeachMethodsTitle = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 6.4rem;
  line-height: 72px;

  margin-bottom: 90px;

  color: ${(props) => props.theme.colors.black};

  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 46px;

    margin-bottom: 56px;
  }
`;

export const Methods = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 56px;

  @media (max-width: 425px) {
    gap: 32px;
  }
`;

export const TheachMethod = styled.div`
  width: 322px;
  margin: 0 auto;

  div.image {
    position: relative;
    margin-bottom: 24px;

    button {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 60px;
      height: 60px;

      background: ${(props) => props.theme.colors.primary};

      border-radius: 50%;

      transition: all ease .3s;

      &:hover {
        width: 70px;
        height: 70px;

        svg {
          width: 28px;
        }
      }

      svg {
        transition: all ease .3s;
        width: 23px;
        height: auto;

        color: ${(props) => props.theme.colors['white-1']};
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  h3 {
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 42px;

    text-align: justify;

    margin-bottom: 8px;

    color: ${(props) => props.theme.colors.black};
  }

  p {
    font-weight: 400;
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;
    text-align: justify;

    margin-bottom: 24px;

    color: ${(props) => props.theme.colors['grey-1']};
  }

  h4 {
    font-weight: 700;
    font-size: ${(props) => props.theme.sizes.lg};
    line-height: 28px;

    margin-bottom: 4px;

    color: ${(props) => props.theme.colors['gray-400']};
  }

  span {
    font-weight: 400;
    font-size: 2.1rem;
    line-height: 34px;

    color: ${(props) => props.theme.colors['gray-400']};

    opacity: 0.7;
  }
`;
