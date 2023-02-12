import React from 'react';
import { SectionInterface } from '../../../../@types/sectionInterface';
import { List } from '../../../../components/List';
import {
  OpenRoleCardContainer,
  OpenRoleCardContent,
  RoleContainer,
  OpenRoleImagePolygon,
  OpenRoleTitle,
  VacancyContainer,
  OpenRoleDescription,
  OpenRoleDescriptionTitle,
  OpenRoleDescriptionTexts
} from './styled';

interface IOpenRoleCard extends SectionInterface {
  role: string;
  roleImage: string;
  occupiedVacancies: number;
  avaliableVacancies: number;
  descriptionTitle: string;
  description: string;
}

export const OpenRoleCard = ({
  avaliableVacancies,
  description,
  descriptionTitle,
  role,
  roleImage,
  occupiedVacancies,
  ...props
}: IOpenRoleCard) => {
  return (
    <OpenRoleCardContainer {...props}>
      <OpenRoleCardContent>
        <RoleContainer className="role">
          <OpenRoleImagePolygon>
            <img src={roleImage} alt="" />
          </OpenRoleImagePolygon>
          <OpenRoleTitle>{role}</OpenRoleTitle>
          <VacancyContainer>
            <span>
              {occupiedVacancies < 10
                ? `0${occupiedVacancies}`
                : occupiedVacancies}
            </span>
            /
            <span>
              {avaliableVacancies < 10
                ? `0${avaliableVacancies}`
                : avaliableVacancies}
            </span>
          </VacancyContainer>
        </RoleContainer>
        <OpenRoleDescriptionTexts>
          <OpenRoleDescriptionTitle>
            {descriptionTitle}
          </OpenRoleDescriptionTitle>
          <OpenRoleDescription>{description}</OpenRoleDescription>
          <div className="workplace">
            <List color="dark" label="On Site" variant="lg" imageBg="blue" />
            <List color="dark" label="Flexibel" variant="lg" imageBg="red" />
          </div>
        </OpenRoleDescriptionTexts>
      </OpenRoleCardContent>
    </OpenRoleCardContainer>
  );
};
