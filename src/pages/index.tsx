import { NextPage } from 'next'
import React from 'react'
import HomePageContainer from '../containers/Home'

interface IndexPageProps {
  media: any
}

const IndexPage: NextPage<IndexPageProps> = ({ media }) => {
  return <HomePageContainer media={media} />
}

export default IndexPage

export async function getStaticProps() {
  const res = await fetch(`https://mldarbai.paju.tech/wp-json/wp/v2/media`)
  const media = await res.json()

  return {
    props: { media },
    revalidate: 60,
  }
}
