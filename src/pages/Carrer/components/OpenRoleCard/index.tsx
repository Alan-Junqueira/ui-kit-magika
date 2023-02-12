import React from 'react';
import { SectionInterface } from '../../../../@types/sectionInterface';
import { List } from '../../../../components/List';
import { OpenRoleCardContainer, OpenRoleCardContent } from './styled';

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
        <div className="role">
          <div className="img">
            <img src={roleImage} alt="" />
          </div>
          <h3>{role}</h3>
          <div className="vacancy">
            <span>
              {occupiedVacancies < 10
                ? `0${occupiedVacancies}`
                : occupiedVacancies}
            </span>
            <span>
              {avaliableVacancies < 10
                ? `0${avaliableVacancies}`
                : avaliableVacancies}
            </span>
          </div>
          <div className="description">
            <h4>{descriptionTitle}</h4>
            <p>{description}</p>
            <div className="workplace">
              <List color="dark" label="On Site" variant="lg" imageBg="blue" />
              <List color="dark" label="Flexibel" variant="lg" imageBg="red" />
            </div>
          </div>
        </div>
      </OpenRoleCardContent>
    </OpenRoleCardContainer>
  );
};
