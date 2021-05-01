import { NextPage } from 'next'

import { Params } from 'next/dist/next-server/server/router'
import CategoryPageContainer from '../containers/Category'

interface CategoryPageProps {
  category: any
  images: any
}

const CategoryPage: NextPage<CategoryPageProps> = ({ category, images }) => {
  return <CategoryPageContainer images={images} category={category} />
}

export default CategoryPage

export async function getStaticProps({ params: { slug } }: Params) {
  const categoryRes = await fetch(
    `https://cors-anywhere.herokuapp.com/http://mldarbai.paju.tech/wp-json/wp/v2/pages?slug=${slug}`,
  )

  const found = await categoryRes.json()

  const imagesRes = await fetch(
    `https://cors-anywhere.herokuapp.com/http://mldarbai.paju.tech/wp-json/wp/v2/media`,
  )
  const images = await imagesRes.json()

  const categoryImages = images.filter((image: any) => {
    return image.caption.rendered.replace(/<[^>]+>\n*/g, '') === found[0].slug
  })

  return {
    props: {
      category: found[0],
      images: categoryImages,
    },
  }
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://cors-anywhere.herokuapp.com/http://mldarbai.paju.tech/wp-json/wp/v2/pages?status=publish`,
  )
  const data = await res.json()

  const paths = data.map((page: { [key: string]: string }) => ({
    params: { slug: String(page.slug) },
  }))

  return { paths, fallback: false }
}
