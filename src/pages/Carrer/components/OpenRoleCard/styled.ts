import styled from 'styled-components';

export const OpenRoleCardContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.bg}; ;
`;

export const OpenRoleCardContent = styled.div`
  width: 100%;
  max-width: 1600px;

  @media (max-width: 425px) {
    padding: 56px 24px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    padding: 56px 72px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    padding: 56px 72px;
  }

  @media (min-width: 1200px) {
    padding: 56px 152px;
  }
`;

export const RoleContainer = styled.div`
  display: grid;

  @media (max-width: 425px) {
    align-items: center;
    grid-template-areas: 'image title' 'image vacancies';
    grid-template-columns: 52px 1fr;

    gap: 8px 16px;

    margin-bottom: 16px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    align-items: center;
    grid-template-areas: 'image title' 'image vacancies';
    grid-template-columns: 52px 1fr;

    gap: 8px 52px;

    margin-bottom: 32px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    align-items: center;

    grid-template-areas: 'image title vacancies';
    grid-template-columns: 80px 1fr;

    gap: 36px;

    padding-inline: 24px;
    padding-bottom: 32px;
    margin-bottom: 32px;

    &::before {
      height: 1px;
    }
  }

  @media (min-width: 1200px) {
    align-items: center;

    grid-template-areas: 'image title vacancies';
    grid-template-columns: 80px 1fr;

    gap: 36px;

    padding-inline: 24px;
    padding-bottom: 32px;
    margin-bottom: 56px;

    &::before {
      height: 1px;
    }
  }

  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.colors.primary};
    width: 100%;
  }
`;

export const OpenRoleImagePolygon = styled.div`
  grid-area: image;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;

  transform: rotate(45deg);

  border-radius: 8px;

  background: ${(props) => props.theme.colors.primary};

  @media (max-width: 425px) {
    width: 48px;
    height: 48px;

    border-radius: 5px;
  }

  img {
    width: 32px;
    height: auto;

    transform: rotate(-45deg);

    @media (max-width: 425px) {
      width: 19px;
      height: 19px;
    }
  }
`;

export const OpenRoleTitle = styled.h3`
  grid-area: title;
  font-weight: 700;

  color: ${(props) => props.theme.colors.black};

  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.sizes['2xl']};
    line-height: 34px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: ${(props) => props.theme.sizes['2xl']};
    line-height: 34px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 46px;
  }

  @media (min-width: 1200px) {
    font-size: 5.2rem;
    line-height: 65px;
  }
`;

export const VacancyContainer = styled.div`
  grid-area: vacancies;

  font-weight: 700;
  font-size: 52px;
  line-height: 65px;

  color: ${(props) => props.theme.colors.black};

  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 28px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: ${(props) => props.theme.sizes['2xl']};
    line-height: 34px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 46px;
  }

  @media (min-width: 1200px) {
    font-size: 5.2rem;
    line-height: 65px;
  }

  span:nth-child(1) {
    background: ${(props) => props.theme.colors.primary};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const OpenRoleDescriptionTexts = styled.div`
  display: grid;

  @media (max-width: 425px) {
    grid-template-areas: 'title' 'description' 'workplace';

    gap: 16px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    grid-template-areas: 'title' 'description' 'workplace';
    gap: 16px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    grid-template-areas: 'title description' 'any workplace';
    grid-template-columns: 1fr 1fr;

    gap: 56px;
  }

  @media (min-width: 1200px) {
    grid-template-areas: 'title description workplace';
    grid-template-columns: 1fr 1fr 300px;

    gap: 56px;
  }

  div.workplace {
    grid-area: workplace;

    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
`;

export const OpenRoleDescriptionTitle = styled.h4`
  grid-area: title;

  font-weight: 500;

  color: ${(props) => props.theme.colors.black};

  @media (max-width: 768px) {
    font-weight: 700;
    line-height: 28px;
    font-size: ${(props) => props.theme.sizes.base};
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: 2.8rem;
    line-height: 44px;
  }

  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 54px;
  }
`;

export const OpenRoleDescription = styled.p`
  grid-area: description;

  font-weight: 400;

  color: ${(props) => props.theme.colors.black};

  opacity: 0.8;

  @media (max-width: 1199px) {
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;
  }

  @media (min-width: 1200px) {
    font-size: 2.1rem;
    line-height: 34px;

    opacity: 0.7;
  }
`;
