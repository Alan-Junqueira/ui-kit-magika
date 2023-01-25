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
  grid-template-columns: 1fr 500px;

  padding: 0 152px 227px 152px;

  max-width: 1600px;
  width: 100%;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 400px;
  }

  @media (max-width: 1372px) {
    grid-template-columns: 1fr 450px;
  }

  @media (max-width: 1199px) {
    padding: 0 90px 227px;
    grid-template-columns: 1fr 333px;
  }

  @media (max-width: 824px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'image' 'main';
  }

  @media (max-width: 425px) {
    padding: 24px 24px 200px 24px;
  }

  > main {
    padding-top: 68px;
    @media (max-width: 824px) {
      grid-area: main;
      padding-top: 32px;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h1 {
      font-weight: 700;
      font-size: ${(props) => props.theme.sizes['100px']};
      line-height: 100px;

      margin-bottom: 56px;

      color: ${(props) => props.theme.colors['white-1']};

      @media (max-width: 1510px) {
        font-weight: 700;
        font-size: ${(props) => props.theme.sizes['92px']};
        line-height: 88px;
      }

      @media (max-width: 1460px) {
        font-weight: 700;
        font-size: ${(props) => props.theme.sizes['88px']};
        line-height: 84px;
      }

      @media (max-width: 1428px) {
        font-weight: 700;
        font-size: ${(props) => props.theme.sizes['84px']};
        line-height: 80px;
      }

      @media (max-width: 1400px) {
        font-weight: 700;
        font-size: ${(props) => props.theme.sizes['80px']};
        line-height: 76px;
      }

      @media (max-width: 1372px) {
        font-weight: 700;
        font-size: ${(props) => props.theme.sizes['76px']};
        line-height: 72px;
      }

      @media (max-width: 1344px) {
        font-weight: 700;
        font-size: ${(props) => props.theme.sizes['70px']};
        line-height: 72px;
      }

      @media (max-width: 1116px) {
        font-weight: 700;
        font-size: ${(props) => props.theme.sizes['64px']};
        line-height: 72px;
      }

      @media (max-width: 1164px) {
        font-weight: 700;
        font-size: ${(props) => props.theme.sizes['58px']};
        line-height: 72px;
      }

      @media (max-width: 1012px) {
        font-weight: 700;
        font-size: ${(props) => props.theme.sizes['52px']};
        line-height: 72px;
      }

      @media (max-width: 960px) {
        font-weight: 700;
        font-size: ${(props) => props.theme.sizes['48px']};
        line-height: 72px;
      }

      @media (max-width: 928px) {
        font-weight: 700;
        font-size: ${(props) => props.theme.sizes['42px']};
        line-height: 72px;
      }

      @media (max-width: 876px) {
        font-weight: 700;
        font-size: ${(props) => props.theme.sizes['40px']};
        line-height: 55px;
      }

      @media (max-width: 860px) {
        font-weight: 700;
        font-size: ${(props) => props.theme.sizes['36px']};
        line-height: 46px;
      }

      @media (max-width: 824px) {
        text-align: center;
        margin-bottom: 16px;
      }
    }

    h3 {
      font-size: 21px;
      line-height: 34px;

      margin-bottom: 62px;

      color: ${(props) => props.theme.colors['white-1']};
      opacity: 0.8;

      @media (max-width: 1344px) {
        font-size: ${(props) => props.theme.sizes['18px']};
      }

      @media (max-width: 1216px) {
        font-size: ${(props) => props.theme.sizes['16px']};
      }

      @media (max-width: 968px) {
        font-size: ${(props) => props.theme.sizes['14px']};
        line-height: 20px;
      }

      @media (max-width: 824px) {
        text-align: center;
        font-size: ${(props) => props.theme.sizes['16px']};
        line-height: 26px;
        margin-bottom: 32px;
      }
    }
  }

  > div {
    padding: 31px 0 0 57px;

    position: relative;

    @media (max-width: 824px) {
      grid-area: image;
      padding-left: 0;

      max-width: 774px;
    }

    div.backCircle {
      position: absolute;
      content: '';
      width: 80%;
      height: 80%;
      background-color: ${(props) => props.theme.colors.yellow};
      border-radius: 50%;
      top: 15%;
      left: 17%;

      @media (max-width: 824px) {
        left: 70px;
        max-width: 600px;
        width: 80%;
      }

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
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

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

  @media (max-width: 1200px) {
    max-width: 120px;
    padding: 6px;
  }

  &.men {
    top: 50%;
    left: -20px;

    @media(max-width: 425px){
      left: 0
    }
  }

  &.woman {
    top: 35%;
    right: -20px;

    @media(max-width: 425px){
      right: 0
    }
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

      @media (max-width: 1200px) {
        font-size: 5.42189px;
        line-height: 8px;
      }
    }

    p {
      font-family: 'Inter';
      font-weight: 400;
      font-size: ${(props) => props.theme.sizes['9px']};
      line-height: 14px;

      color: ${(props) => props.theme.colors.black};

      opacity: 0.7;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      @media (max-width: 1200px) {
        font-size: 5.22825px;
        line-height: 8px;
      }
    }
  }
`;
