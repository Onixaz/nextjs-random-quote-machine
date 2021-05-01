import React, { FC } from 'react'
import Hero from '../../components/Hero'
import FeaturedProduct from '../../components/Products/Featured'
import * as HomePageStyles from './styled'

interface HomePageContainerProps {
  media: any
}

const HomePageContainer: FC<HomePageContainerProps> = ({ media }) => {
  return (
    <>
      <Hero />
      <HomePageStyles.Section id="featured">
        <HomePageStyles.SectionTitle>Naujausi gaminiai</HomePageStyles.SectionTitle>
        {media.slice(0, 3).map((image: any, index: number) => {
          const link = image.caption.rendered.replace(/<[^>]+>\n*/g, '')

          return (
            <FeaturedProduct
              key={image.id}
              imgStart={index % 2 === 0 ? true : false}
              img={image.guid.rendered}
              description={image.description.rendered}
              alt={image.title.rendered}
              link={link}
            />
          )
        })}
      </HomePageStyles.Section>
    </>
  )
}

export default HomePageContainer
