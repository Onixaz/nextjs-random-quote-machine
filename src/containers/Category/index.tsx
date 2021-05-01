import React, { FC } from 'react'
import * as CategoryPageStyles from './styled'
import { Carousel } from 'react-responsive-carousel'

interface CategoryPageContainerProps {
  images: any
  category: any
}

const CategoryPageContainer: FC<CategoryPageContainerProps> = ({ images, category }) => {
  const description = category.content.rendered.replace(/(\n)+/g, '<br />')

  return (
    <CategoryPageStyles.Container>
      <CategoryPageStyles.Wrapper>
        <CategoryPageStyles.Title>{category.title.rendered}</CategoryPageStyles.Title>
        <CategoryPageStyles.Row imgStart={false}>
          <CategoryPageStyles.Column col="col1" width="500px">
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
              {images.map((image: any) => {
                return (
                  <CategoryPageStyles.ImgWrapper key={image.id}>
                    <CategoryPageStyles.Img src={image.media_details.sizes.full.source_url} />
                  </CategoryPageStyles.ImgWrapper>
                )
              })}
            </Carousel>
          </CategoryPageStyles.Column>
          <CategoryPageStyles.Column col="col2" width="500px">
            <CategoryPageStyles.InnerHtml dangerouslySetInnerHTML={{ __html: description }} />
          </CategoryPageStyles.Column>
        </CategoryPageStyles.Row>
      </CategoryPageStyles.Wrapper>
    </CategoryPageStyles.Container>
  )
}

export default CategoryPageContainer
