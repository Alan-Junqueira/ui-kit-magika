import styled from 'styled-components';
import {
  SoftwareEngineeringDefaultDescription,
  SoftwareEngineeringDefaultTitle
} from '../styled';

export const MentorsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MentorsContent = styled.div`
  width: 100%;
  max-width: 1600px;

  display: grid;

  @media (max-width: 425px) {
    padding: 56px 24px;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    padding: 56px 72px;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    padding: 56px 72px;
    grid-template-columns: 270px 1fr;
    align-items: center;
    gap: 100px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 270px 1fr;
    align-items: center;
    padding: 72px 152px;
    gap: 100px;
  }
`;

export const MentorsImageContainer = styled.div`
  max-width: 270px;

  position: relative;
  margin: 0 auto;

  div.google-logo {
    position: absolute;
    width: 90px;

    @media (max-width: 768px) {
      left: 35%;
      top: -45px;
    }

    @media (min-width: 769px) {
      right: -45px;
      bottom: 15%;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const MentorsTextsContainer = styled.div``;

export const MentorsTitle = styled(SoftwareEngineeringDefaultTitle)``;

export const MentorsDescription = styled(
  SoftwareEngineeringDefaultDescription
)``;
