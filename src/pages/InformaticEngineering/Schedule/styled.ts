import styled from 'styled-components';
import { GetToKnowDefaultTitle, GetToKnowDescription } from '../styled';

export const ScheduleContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ScheduleContent = styled.div`
  max-width: 1600px;
  width: 100%;

  @media (max-width: 425px) {
    padding: 56px 24px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    padding: 104px 72px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    padding: 104px 72px;
  }

  @media (min-width: 1200px) {
    padding: 104px 152px;
  }
`;

export const ScheduleTitle = styled(GetToKnowDefaultTitle)`
  text-align: center;
`;

export const ScheduleDescription = styled(GetToKnowDescription)`
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 40px;
    max-width: 70%;
  }

  @media (min-width: 1024px) {
    max-width: 70%;
    margin-bottom: 106px;
  }
`;

export const ScheduleTimesContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ScheduleTime = styled.div`
  max-width: 410px;
  padding: 24px;

  div.date {
    display: flex;
    align-items: center;

    gap: 16px;
    margin-bottom: 20px;

    color: ${(props) => props.theme.colors.black};

    strong {
      font-weight: 700;
      font-size: 7rem;
      line-height: 78px;
    }

    > div {
      display: flex;
      flex-direction: column;

      font-weight: 700;
      font-size: ${(props) => props.theme.sizes['2xl']};
      line-height: 34px;
    }
  }

  span.time {
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: 400;
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;

    color: ${(props) => props.theme.colors.black};

    padding-bottom: 50px;
    margin-bottom: 40px;
    border-bottom: 1px solid ${(props) => props.theme.colors['gray-200']};

    svg {
      width: 16px;
      height: 16px;
      margin-bottom: 3px;

      color: ${(props) => props.theme.colors['brand-3']};
    }
  }

  p {
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 42px;

    color: ${(props) => props.theme.colors.black};
  }
`;
