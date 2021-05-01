import Link from 'next/link'
import React, { FC } from 'react'
import * as ProductCardStyles from './styled'

interface ProductCardProps {
  img: string
}

const ProductCard: FC<ProductCardProps> = ({ img }) => {
  return (
    <Link href="/">
      <ProductCardStyles.Wrapper>
        <ProductCardStyles.ImgWrapper>
          <ProductCardStyles.Img src={img} alt={img} />
        </ProductCardStyles.ImgWrapper>

        <ProductCardStyles.Name>Suolas 1</ProductCardStyles.Name>
      </ProductCardStyles.Wrapper>
    </Link>
  )
}

export default ProductCard
