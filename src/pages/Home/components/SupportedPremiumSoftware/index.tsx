import React from 'react';
import { Button } from '../../../../components/Button';
import {
  SupportedPremiumSoftwareContainer,
  SupportedPremiumSoftwareContent
} from './styled';

import supportedSoftwaresImage from '/assets/images/supported-softwares.png';

interface ISupportedPremiumSoftware
  extends React.HTMLAttributes<HTMLDivElement> {}

export const SupportedPremiumSoftware = ({
  ...props
}: ISupportedPremiumSoftware) => {
  return (
    <SupportedPremiumSoftwareContainer {...props}>
      <SupportedPremiumSoftwareContent>
        <div className="softwaresImage">
          <img src={supportedSoftwaresImage} alt="" />
        </div>
        <div className="description">
          <h2>Supported by premium software</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <Button label="Get Started" variant="big" />
        </div>
      </SupportedPremiumSoftwareContent>
    </SupportedPremiumSoftwareContainer>
  );
};
