import Fade from 'react-reveal/Fade';

import { Banner } from '../../components/Banner';

import { GetToKnow } from './GetToKnow';
import { SoftwareEngineeringHero } from './Hero';
import { Mentors } from './Mentors';
import { Schedule } from './Schedule';
import { SoftwareEngineeringContainer } from './styled';
import { ThingsToLearn } from './ThingsToLearn';

export const SoftwareEngineering = () => {
  return (
    <SoftwareEngineeringContainer>
      <SoftwareEngineeringHero id="software-engineering--hero" />
      <Fade left>
        <ThingsToLearn id="software-engineering--things-to-learn" />
        <GetToKnow id="software-engineering--get-to-know" />
        <Mentors id="software-engineering--mentors" />
        <Schedule id="software-engineering--schedule" />
      </Fade>
      <Banner variant="secondary" />
    </SoftwareEngineeringContainer>
  );
};
