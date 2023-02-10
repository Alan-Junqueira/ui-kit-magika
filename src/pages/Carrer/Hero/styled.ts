import styled from 'styled-components';
import { Hero } from '../../../components/Hero';

export const CarrerHeroContainer = styled(Hero)`
  
`;

export const CarrerHeroContent = styled.div`
  max-width: 1600px;
  width: 100%;
  
  @media(max-width: 425px){
    padding: 0 24px 95px 24px;
  }

  @media(min-width: 426px) and (max-width: 1199px){
    padding: 56px 72px ;
  }

  @media(min-width: 1200px){

  }
`;

export const CarrerHeroQuoatation = styled.span`
  grid-area: quotation;
  display: inline-block;

  font-weight: 700;

  color: ${(props) => props.theme.colors['gray-100']};

  @media (max-width: 1199px) {
    text-align: center;
    font-size: 29.3rem;
    line-height: 293px;

    max-height: 176px;

    align-self: flex-start;

    letter-spacing: -2.9309px;
  }

  @media (min-width: 1200px) {
    font-size: 62.5rem;
    line-height: 625px;

    max-height: 376px;

    letter-spacing: -6.25px;
  }
`;