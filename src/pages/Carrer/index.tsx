import { Banner } from '../../components/Banner';
import { CarrerHero } from './components/Hero';
import { JoinUs } from './components/JoinUs';
import { OpenRoleCard } from './components/OpenRoleCard';
import { CarrerContainer } from './styled';

import visualDesignImage from '/assets/images/carrer-visual-design.svg';
import carrerBagImage from '/assets/images/carrer-bag.svg';
import carrerEngineerImage from '/assets/images/carrer-engineer.svg';
import { Register } from './components/Register';

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
        id="carrer--visual-designer"
      />
      <OpenRoleCard
        descriptionTitle="skills that you should master in this field."
        avaliableVacancies={3}
        description="Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime."
        occupiedVacancies={0}
        role="Admin Staff"
        roleImage={carrerBagImage}
        id="carrer--admin-staff"
      />
      <OpenRoleCard
        descriptionTitle="skills that you should master in this field."
        avaliableVacancies={4}
        description="Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime."
        occupiedVacancies={0}
        role="Teacher"
        roleImage={carrerBagImage}
        id="carrer--teacher"
      />
      <OpenRoleCard
        descriptionTitle="skills that you should master in this field."
        avaliableVacancies={6}
        description="Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime."
        occupiedVacancies={1}
        role="Software Enginer"
        roleImage={carrerEngineerImage}
        id="carrer--software-engineer"
      />
      <Register id="carrer--register" />
      <Banner variant="secondary" />
    </CarrerContainer>
  );
};
