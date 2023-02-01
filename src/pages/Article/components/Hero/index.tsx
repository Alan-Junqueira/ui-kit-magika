import React from 'react'
import { ArticleHeroContainer, ArticleHeroContent } from './styled'

interface IHero extends React.HTMLAttributes<HTMLDivElement> {}

export const ArticleHero = ({...props}: IHero) => {
  return (
    <ArticleHeroContainer {...props}>
      <ArticleHeroContent>
        <h1>Teste</h1>
        <p>teste</p>
      </ArticleHeroContent>
    </ArticleHeroContainer>
  )
}
