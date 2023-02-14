import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

import { Steps } from '../../components/Steps';
import { ElectricalEngineering } from './components/ElectricalEngineering';
import { ProgramsHero } from './components/Hero';
import { InformaticEngineering } from './components/InformaticEngineering';
import { SoftwareEnginer } from './components/SoftwareEnginer';
import { VisualDesign } from './components/VisualDesign';

export const Programs = () => {
  return (
    <>
      <ProgramsHero id="programs-hero" />
      <Fade left>
        <InformaticEngineering id="programs--informatic-engineering" />
        <SoftwareEnginer id="programs--software-enginer" />
        <ElectricalEngineering id="programs--electrical-engineering" />
        <VisualDesign id="programs--visual-design" />
      </Fade>
      <Pulse>
        <Steps id="programs--steps" />
      </Pulse>
    </>
  );
};
