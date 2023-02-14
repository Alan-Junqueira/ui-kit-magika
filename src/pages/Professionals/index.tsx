import Fade from 'react-reveal/Fade';

import { Banner } from '../../components/Banner';
import { ProfessionalsHero } from './Hero';
import { ProfessionalsContainer } from './styled';
import { Teachers } from './Teachers';
import { TeachMethods } from './TeachMethods';

export const Professionals = () => {
  return (
    <ProfessionalsContainer>
      <ProfessionalsHero id="professionals--hero" />
      <Fade left>
        <Teachers id="professionals--teachers" />
        <TeachMethods id="professionals--teach-methods" />
      </Fade>
      <Banner variant="secondary" />
    </ProfessionalsContainer>
  );
};
