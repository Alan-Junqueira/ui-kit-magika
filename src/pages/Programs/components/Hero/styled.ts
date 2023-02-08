import styled from 'styled-components';
import { HeroContainer } from '../../../../components/Hero/styled';

export const ProgramsHeroContainer = styled(HeroContainer)`
  
`;

export const ProgramsHeroContent = styled.div`
  width: 100%;
  max-width: 1600px;

  @media(max-width: 425px){
    padding: 0 24px 95px 24px
  }

  @media(min-width: 426px) and (max-width: 1199px){
    padding: 56px 72px;

  }

    @media(min-width: 1200px){
      padding: 44px 116px 97px 152px
    }
`;