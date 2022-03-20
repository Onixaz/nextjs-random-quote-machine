import { NextPage } from 'next'
import React, { useState } from 'react'
import * as Styled from '../styles/styled-components'
import useSWR, { mutate } from 'swr'
import Skeleton from 'react-loading-skeleton'

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  const { data } = useSWR('https://type.fit/api/quotes', { revalidateOnFocus: false })
  const [ quoteId, setQuoteId ] = useState(Math.floor(Math.random() * 1000))
  return (
    <>
      <Styled.Container>
        <Styled.Wrapper>
          <Styled.Box id="quote-box">
            <Styled.TextWrapper>
              <Styled.Quote id="text">{!data ? <Skeleton count={3} /> : data[quoteId].text}</Styled.Quote>

              <Styled.Author id="author">
                {!data ? (
                  <Skeleton width={100} count={1} />
                ) : (
                  `- ${data[quoteId].author ? data[quoteId].author : 'Unknown author'}`
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
                    data[quoteId].text
                  }"+-+${data[quoteId].author ? data[quoteId].author : 'Unknown author'}`}
                >
                  Tweet this quote!
                </Styled.Tweet>
                <Styled.Button id="new-quote" onClick={() => setQuoteId(Math.floor(Math.random() * 1000))}>
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
