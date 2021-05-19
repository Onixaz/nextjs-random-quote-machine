import { NextPage } from 'next'
import React from 'react'
import * as Styled from '../styles/styled-components'
import ReactFCCtest from 'react-fcctest'
import useSWR, { mutate } from 'swr'
import Skeleton from 'react-loading-skeleton'

//https://freequote.herokuapp.com/

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  const { data, mutate } = useSWR('https://freequote.herokuapp.com/', { revalidateOnFocus: false })

  return (
    <>
      <ReactFCCtest />
      <Styled.Container>
        <Styled.Wrapper>
          <Styled.Box id="quote-box">
            <Styled.TextWrapper>
              <Styled.Quote id="text">{!data ? <Skeleton count={3} /> : data.quote}</Styled.Quote>

              <Styled.Author id="author">
                {!data ? (
                  <Skeleton width={100} count={1} />
                ) : (
                  `- ${data.author ? data.author : 'Unknown author'}`
                )}
              </Styled.Author>
            </Styled.TextWrapper>

            {!data ? (
              <Skeleton width={200} count={1} />
            ) : (
              <Styled.ButtonsWrapper>
                <Styled.Tweet
                  id="tweet-quote"
                  href={`https://twitter.com/intent/tweet?related=freecodecamp&text="${
                    data.quote
                  }"+-+${data.author ? data.author : 'Unknown author'}`}
                >
                  Tweet this quote!
                </Styled.Tweet>
                <Styled.Button id="new-quote" onClick={() => mutate()}>
                  New quote!
                </Styled.Button>
              </Styled.ButtonsWrapper>
            )}
          </Styled.Box>
          <Styled.Github href="https://github.com/Onixaz/nextjs-random-quote-machine">
            Source code on Github
          </Styled.Github>
        </Styled.Wrapper>
      </Styled.Container>
    </>
  )
}

export default IndexPage
