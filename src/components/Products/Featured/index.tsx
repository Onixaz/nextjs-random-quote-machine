import Link from 'next/link'
import React, { FC } from 'react'
import * as FeaturedProductStyles from './styled'

interface FeaturedProductProps {
  imgStart: boolean
  img: string
  alt: string
  link: string
  description: string
}

const FeaturedProduct: FC<FeaturedProductProps> = ({ imgStart, img, alt, link, description }) => {
  return (
    <FeaturedProductStyles.Container>
      <FeaturedProductStyles.Wrapper>
        <FeaturedProductStyles.Row imgStart={imgStart}>
          <FeaturedProductStyles.Column1>
            <FeaturedProductStyles.TextWrapper>
              <FeaturedProductStyles.Heading>{alt}</FeaturedProductStyles.Heading>
              <FeaturedProductStyles.Description
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <Link href={link} passHref>
                <FeaturedProductStyles.Btn>Užsakymo forma</FeaturedProductStyles.Btn>
              </Link>
            </FeaturedProductStyles.TextWrapper>
          </FeaturedProductStyles.Column1>

          <FeaturedProductStyles.Column2>
            <FeaturedProductStyles.ImgWrapper>
              <FeaturedProductStyles.Img src={img} alt={alt} />
            </FeaturedProductStyles.ImgWrapper>
          </FeaturedProductStyles.Column2>
        </FeaturedProductStyles.Row>
      </FeaturedProductStyles.Wrapper>
    </FeaturedProductStyles.Container>
  )
}

export default FeaturedProduct
