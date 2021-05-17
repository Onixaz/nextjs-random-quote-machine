import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 65vh;
`

export const Wrapper = styled.div`
  margin-top: rem;
  display: grid;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 3rem auto;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
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

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.lightGrey};
  position: relative;
  height: calc(60vh + 2vw);
  max-width: 600px;
  position: relative;
  grid-area: col1;
`

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(60vh + 2vw);
  align-items: center;
  max-width: 600px;

  grid-area: col2;
`

export const TextWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 75%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  position: relative;
`

export const Heading = styled.h2`
  margin: 0.5rem;
  font-size: clamp(1.5rem, 2vw + 0.5rem, 2.5rem);
  line-height: 1.3;
  font-weight: 400;
  white-space: nowrap;
`

export const Description = styled.div`
  font-size: clamp(0.8rem, 0.5vw + 0.5rem, 1rem);
  max-width: 400px;
  margin: 0 auto;
  text-align: center;

  img {
    display: none;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const ImgWrapper = styled.div`
  //height: 600px;
  height: 100%;
  width: 100%;
  overflow: hidden;
`
export const Btn = styled.button`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(0.8rem, 0.5vw + 1rem, 1.2rem);
  font-weight: 600;
  letter-spacing: 1.1px;
  margin-top: 5rem;
  padding: 0.75rem 4rem;
  border: solid 1px #000;
  cursor: pointer;
  background: transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    //color: ${({ theme }) => theme.lightWhite};
    background: ${({ theme }) => theme.mediumOrange};
    border: solid 1px ${({ theme }) => theme.mediumOrange};
  }
`
