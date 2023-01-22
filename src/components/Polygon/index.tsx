import React from 'react';
import { PolygonContainer } from './styled';

interface IPolygon extends React.HTMLAttributes<HTMLDivElement> {
  variant: 'blue' | 'orange' | 'yellow' | 'red';
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export const Polygon = ({
  variant,
  top,
  right,
  bottom,
  left,
  ...props
}: IPolygon) => {
  return (
    <PolygonContainer
      variant={variant}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      {...props}
    ></PolygonContainer>
  );
};
