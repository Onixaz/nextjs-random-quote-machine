import React, { FC } from 'react'
import * as CategoryPageStyles from './styled'
import { Carousel } from 'react-responsive-carousel'
import ContactForm from '../../components/ContactForm'

interface CategoryPageContainerProps {
  images: any
  category: any
}

const CategoryPageContainer: FC<CategoryPageContainerProps> = ({ images, category }) => {
  return (
    <CategoryPageStyles.Container>
      <CategoryPageStyles.Wrapper>
        <CategoryPageStyles.Row imgStart={false}>
          <CategoryPageStyles.Column col="col1" width="500px">
            <Carousel showThumbs={true} infiniteLoop={true} autoPlay={true} interval={3000}>
              {images.map((image: any) => {
                return (
                  <CategoryPageStyles.ImgWrapper key={image.id}>
                    <img src={image.media_details.sizes.full.source_url} />
                  </CategoryPageStyles.ImgWrapper>
                )
              })}
            </Carousel>
          </CategoryPageStyles.Column>
          <CategoryPageStyles.Column col="col2" width="500px">
            <CategoryPageStyles.Title>{category.title.rendered}</CategoryPageStyles.Title>
            <CategoryPageStyles.InnerHtml
              dangerouslySetInnerHTML={{
                __html: category.content.rendered.replace(/(\n)+/g, '<br />'),
              }}
            />
            <CategoryPageStyles.Text>
              Turite klausimų?{' '}
              <CategoryPageStyles.TextSpan>Susisiekite!</CategoryPageStyles.TextSpan>
            </CategoryPageStyles.Text>
          </CategoryPageStyles.Column>
        </CategoryPageStyles.Row>
        <CategoryPageStyles.Line />
        <CategoryPageStyles.FormWrapper>
          <CategoryPageStyles.FormTitle>Užsakymo forma</CategoryPageStyles.FormTitle>
          <CategoryPageStyles.Text>
            Siekiant padaryti bendravimą kuo produktyvesnį ir taupyti klientų laiką,prašome
            užpildyti užsakymo formą ir mes su Jumis susisieksime per 1 darbo dieną, taip pat pagal
            Jūsų pateiktus duomenis iškart galėsime aptarti ir produkto kainą.
          </CategoryPageStyles.Text>
          <ContactForm />
        </CategoryPageStyles.FormWrapper>
      </CategoryPageStyles.Wrapper>
    </CategoryPageStyles.Container>
  )
}

export default CategoryPageContainer
