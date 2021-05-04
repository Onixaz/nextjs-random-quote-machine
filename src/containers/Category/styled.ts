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
  //overflow: hidden;
`

export const Title = styled.h1`
  //margin: calc(-0.2rem + 0.1vw) 1rem;
  opacity: 1;
  padding: 0.5rem 0.75rem;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: clamp(2.5rem, 2vw + 0.5rem, 3rem);

  @media screen and (max-width: 992px) {
    display: none;
  }
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
  padding: 1rem;
  flex-direction: column;

  margin: 0 auto;
  min-height: calc(45vh + 5vw);
  max-width: ${({ width }) => `${width}`};
  grid-area: ${({ col }) => `${col}`};
`

export const ImgWrapper = styled.div`
  height: 500px;
  width: 100%;

  @media screen and (max-width: 992px) {
    height: auto;
  }

  img {
    width: 50%;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
  }
`

export const InnerHtml = styled.div`
  margin-top: calc(-2rem + 0.1vw);
  padding: 0.5rem 0.75rem;
  h2,
  h3,
  h4 {
    color: ${({ theme }) => theme.orange};
    text-transform: uppercase;
    letter-spacing: 1.3px;
  }

  p {
    font-size: clamp(0.95rem, 0.2vw + 0.95rem, 1rem);
    font-weight: 400;
    letter-spacing: 1px;
  }
`

export const Text = styled.p`
  padding: 0.5rem 0.75rem;
  font-size: clamp(0.95rem, 0.2vw + 0.95rem, 1rem);
  font-weight: 400;
  letter-spacing: 1px;
`

export const TextSpan = styled.a`
  cursor: pointer;

  font-weight: 600;
`

export const FormWrapper = styled.div`
  max-width: 1000px;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: calc(2rem + 0.5vw) auto calc(1rem + 0.5vw) auto;
`

export const FormTitle = styled.h2`
  //margin: calc(-0.2rem + 0.1vw) 1rem;
  opacity: 1;
  padding: 0.5rem 0.75rem;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: clamp(1rem, 2vw + 0.5rem, 1.5rem);
`
export const Line = styled.div`
  width: 95%;

  height: calc(30px + 3vw);
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
`
