import React from 'react';
import { List } from '../../../../components/List';
import { Polygon } from '../../../../components/Polygon';
import {
  OnlineDataAnalyticalContainer,
  OnlineDataAnalyticalContent
} from './styled';

import womanImage from '/assets/images/woman-online-data-analistics.png';

interface IOnlineDataAnalytical extends React.HTMLAttributes<HTMLDivElement> {}

export const OnlineDataAnalytical = ({ ...props }: IOnlineDataAnalytical) => {
  return (
    <OnlineDataAnalyticalContainer {...props}>
      <OnlineDataAnalyticalContent>
        <div className="womanImage">
          <img src={womanImage} alt="" />
          <Polygon variant="blue" left={0} />
          <Polygon variant="orange" left={12} top={20} />
          <Polygon variant="yellow" right={17} top={17} />
          <Polygon variant="red" bottom={10} right={15} />
        </div>
        <div className="description">
          <h2>Online data analytics for biz professionals</h2>
          <p>
            Cybersecurity is the practice of protecting systems and programs
            from digital attacks. These cyberattacks.
          </p>
          <div className="polygons">
            <List label="World Class" variant="sm" />
            <List label="Flexibel" variant="sm" />
            <List label="Easy Learn" variant="sm" />
            <List label="Affordable" variant="sm" />
          </div>
        </div>
      </OnlineDataAnalyticalContent>
    </OnlineDataAnalyticalContainer>
  );
};
