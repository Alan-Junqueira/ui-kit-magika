import styled from 'styled-components';
import { HeroContainer } from '../../../../components/Hero/styled';

export const HomeHeroContainer = styled(HeroContainer)`
  position: relative;
  overflow: hidden;

  .rotate-left {
    position: absolute;
    transform: rotate(-3deg);
    bottom: 45px;
  }

  .rotate-right {
    position: absolute;
    transform: rotate(3.45deg);
    bottom: 45px;
  }
`;

export const HomeHeroContent = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 60% 1fr;

  padding: 0 152px 227px;

  max-width: 1600px;
  width: 100%;

  > main {
    padding-top: 68px;
    h1 {
      font-weight: 700;
      font-size: ${(props) => props.theme.sizes['100px']};
      line-height: 100px;

      margin-bottom: 56px;

      color: ${(props) => props.theme.colors['white-1']};
    }

    h3 {
      font-size: 21px;
      line-height: 34px;

      margin-bottom: 62px;

      color: ${(props) => props.theme.colors['white-1']};
      opacity: 0.8;
    }
  }

  > div {
    padding: 31px 0 0 57px;

    position: relative;

    div.backCircle {
      position: absolute;
      content: '';
      width: 80%;
      height: 80%;
      background-color: ${(props) => props.theme.colors.yellow};
      border-radius: 50%;
      top: 15%;
      left: 17%;

      &::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background-color: transparent;
        border-radius: 50%;
        top: -20px;
        right: -20px;

        border: 2.31834px solid ${(props) => props.theme.colors['gray-600']};
      }
    }

    > div.girlImage {
      position: relative;

      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
`;

export const HomeHeroTestimonial = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;

  padding: 12px 12px 12px 10px;

  width: 100%;
  max-width: 210px;

  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 64.9135px 85.0057px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4.25029px);

  border-radius: 6.86915px;
  /* transform: matrix(-1, 0, 0, 1, 0, 0); */

  @media (max-width: 1425px) {
    max-width: 180px;
  }

  &.men {
    top: 50%;
    left: -20px;
  }

  &.woman {
    top: 35%;
    right: -20px;
  }

  img {
    width: 38px;
    height: 38px !important;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h4 {
      font-family: 'Inter';
      font-weight: 700;
      font-size: ${(props) => props.theme.sizes['10px']};
      line-height: 14px;

      color: ${(props) => props.theme.colors.black};
    }

    p {
      font-family: 'Inter';
      font-weight: 400;
      font-size: ${(props) => props.theme.sizes['9px']};
      line-height: 14px;

      color: ${(props) => props.theme.colors.black};

      opacity: 0.7;
    }
  }
`;
