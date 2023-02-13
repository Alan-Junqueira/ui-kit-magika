import { GetToKnow } from './GetToKnow';
import { InformaticHero } from './Hero';
import { ThingsToLearn } from './ThigsToLearn';

export const InformaticsEngineering = () => {
  return (
    <>
      <InformaticHero id="informatics-engineering--hero" />
      <ThingsToLearn id="informatics-engineering--things-to-learn" />
      <GetToKnow id="informatics-engineering--get-to-know" />
    </>
  );
};
