import styled from 'styled-components'

export const Container = styled.section`
  min-height: 100vh;
  margin-top: calc(7rem + 1vw);
`

export const Wrapper = styled.div`
  max-width: 1000px;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  margin: calc(1rem + 1vw) 1rem;
  opacity: 1;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: clamp(2.5rem, 2vw + 0.5rem, 3rem);
  text-align: center;
`

export const Row = styled.div<{ imgStart: boolean }>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;

  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  @media screen and (max-width: 992px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`

export const Column = styled.div<{ col: string; width: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: calc(45vh + 5vw);
  max-width: ${({ width }) => `${width}`};
  grid-area: ${({ col }) => `${col}`};
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const ImgWrapper = styled.div`
  height: 500px;
  width: 100%;
  overflow: hidden;
`

export const InnerHtml = styled.div`
  padding: 0.5rem 2.75rem;
  h2,
  h3,
  h4 {
    color: ${({ theme }) => theme.orange};
    text-transform: uppercase;
    letter-spacing: 1.3px;
  }

  p {
    font-size: clamp(0.9rem, 0.2vw + 0.7rem, 1rem);
    font-weight: 400;
    letter-spacing: 1px;
  }
`
