import React from 'react'
import { ListContainer } from './styled'

import listPolygon from '/assets/images/list-polygon.svg'

export interface IListProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'sm'| 'md'| 'lg',
  label: string
}

export const List = ({label, variant}: IListProps) => {
  return (
    <ListContainer variant={variant}>
      <img src={listPolygon} alt="" />
      <span>{label}</span>
    </ListContainer>
  )
}
