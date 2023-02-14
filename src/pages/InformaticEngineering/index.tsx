import { Banner } from '../../components/Banner';

import { GetToKnow } from './GetToKnow';
import { InformaticsHero } from './Hero';
import { Schedule } from './Schedule';
import { InformaticsEngineeringContainer } from './styled';
import { ThingsToLearn } from './ThingsToLearn';

export const InformaticsEngineering = () => {
  return (
    <InformaticsEngineeringContainer>
      <InformaticsHero id="informatics-engineering--hero" />
      <ThingsToLearn id="informatics-engineering--things-to-learn" />
      <GetToKnow id="informatics-engineering--get-to-know" />
      <Schedule id="informatics-engineering--schedule" />
      <Banner variant="secondary" />
    </InformaticsEngineeringContainer>
  );
};
