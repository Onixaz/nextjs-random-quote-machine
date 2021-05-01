import styled from 'styled-components'

export const Section = styled.section`
  padding: 5rem 1rem;
`
export const SectionTitle = styled.h1`
  margin: calc(3rem + 0.5vw) 1rem;
  opacity: 1;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: clamp(2.5rem, 2vw + 0.5rem, 3rem);
  text-align: center;
`

export const Grid = styled.div<{ lg: number; md: number; sm: number; xs: number }>`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: ${({ lg }) => `repeat(${lg}, 1fr)`};
  width: 100%;
  min-height: 100vh;
  @media screen and (max-width: 992px) {
    grid-template-columns: ${({ md }) => `repeat(${md}, 1fr)`};
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: ${({ sm }) => `repeat(${sm}, 1fr)`};
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: ${({ xs }) => `repeat(${xs}, 1fr)`};
  }
`
