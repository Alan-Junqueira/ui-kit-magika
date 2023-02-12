import { CarrerHero } from './components/Hero';
import { JoinUs } from './components/JoinUs';
import { OpenRoleCard } from './components/OpenRoleCard';

import visualDesignImage from '/assets/images/carrer-visual-design.svg';

export const Carrer = () => {
  return (
    <>
      <CarrerHero id="carrer--hero" />
      <JoinUs id="carrer--join-us" />
      <OpenRoleCard
        descriptionTitle="skills that you should master in this field."
        avaliableVacancies={2}
        description="Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime."
        occupiedVacancies={1}
        role="Visual Designer"
        roleImage={visualDesignImage}
      />
    </>
  );
};
