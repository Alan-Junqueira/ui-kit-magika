import { Banner } from '../../components/Banner';

import { GetToKnow } from './GetToKnow';
import { InformaticHero } from './Hero';
import { Schedule } from './Schedule';
import { InformaticsEngineeringContainer } from './styled';
import { ThingsToLearn } from './ThigsToLearn';

export const InformaticsEngineering = () => {
  return (
    <InformaticsEngineeringContainer>
      <InformaticHero id="informatics-engineering--hero" />
      <ThingsToLearn id="informatics-engineering--things-to-learn" />
      <GetToKnow id="informatics-engineering--get-to-know" />
      <Schedule id="informatics-engieering--schedule" />
      <Banner variant="secondary" />
    </InformaticsEngineeringContainer>
  );
};
