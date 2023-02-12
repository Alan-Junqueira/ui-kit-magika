import { Banner } from '../../components/Banner';
import { CarrerHero } from './components/Hero';
import { JoinUs } from './components/JoinUs';
import { OpenRoleCard } from './components/OpenRoleCard';
import { CarrerContainer } from './styled';

import visualDesignImage from '/assets/images/carrer-visual-design.svg';

export const Carrer = () => {
  return (
    <CarrerContainer>
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
      <OpenRoleCard
        descriptionTitle="skills that you should master in this field."
        avaliableVacancies={3}
        description="Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime."
        occupiedVacancies={0}
        role="Admin Staff"
        roleImage={visualDesignImage}
      />
      <OpenRoleCard
        descriptionTitle="skills that you should master in this field."
        avaliableVacancies={4}
        description="Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime."
        occupiedVacancies={0}
        role="Teacher"
        roleImage={visualDesignImage}
      />
      <OpenRoleCard
        descriptionTitle="skills that you should master in this field."
        avaliableVacancies={6}
        description="Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime."
        occupiedVacancies={1}
        role="Software Enginer"
        roleImage={visualDesignImage}
      />
      <Banner variant="secondary" />
    </CarrerContainer>
  );
};
