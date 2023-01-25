import React from 'react'
import { ListContainer } from './styled'

import listPolygon from '/assets/images/list-polygon.svg'

export interface IListProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: 'sm'| 'md'| 'lg',
  label: string
}

export const List = ({label, variant, ...props}: IListProps) => {
  return (
    <ListContainer variant={variant} {...props}>
      <img src={listPolygon} alt="" />
      <span>{label}</span>
    </ListContainer>
  )
}
