import React from 'react';
import { Button } from '../../../../components/Button';
import { AwardsFrame } from './components/AwardsFrame';
import { AwardsContainer, AwardsContent } from './styled';

interface IAwards extends React.HTMLAttributes<HTMLDivElement> {}

export const Awards = ({ ...props }: IAwards) => {
  return (
    <AwardsContainer {...props}>
      <AwardsContent>
        <h2>Awards</h2>
        <div className="mobile">
          <AwardsFrame
            date={new Date().toString()}
            name="SOFA"
            variant="first"
          />
          <AwardsFrame
            date={new Date().toString()}
            name="SOFA"
            variant="second"
          />
          <AwardsFrame
            date={new Date().toString()}
            name="SOFA"
            variant="first"
          />
        </div>

        <div className="desktop">
          <AwardsFrame
            date={new Date().toString()}
            name="Annette Black"
            variant="first"
          />
          <AwardsFrame
            date={new Date().toString()}
            name="Jane Cooper"
            variant="third"
          />
          <AwardsFrame
            date={new Date().toString()}
            name="Theresa Webb"
            variant="second"
          />
          <AwardsFrame
            date={new Date().toString()}
            name="Esther Howard"
            variant="second"
          />
          <AwardsFrame
            date={new Date().toString()}
            name="Jerome Bell"
            variant="first"
          />
          <AwardsFrame
            date={new Date().toString()}
            name="Esther Howard"
            variant="third"
          />
        </div>
        <Button label="View All" variant="small" />
      </AwardsContent>
    </AwardsContainer>
  );
};
