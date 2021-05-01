import { FaAngleDoubleDown } from 'react-icons/fa'
import styled from 'styled-components'

export const UpperContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  //margin-top: -80px;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  :after {
    content: '';
    position: absolute;
    opacity: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(243, 159, 75, 0.1) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%);
    z-index: 2;
  }
`

export const Bg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  //background: #232a34;
  transition: opacity 2500ms ease-in-out;
`

export const Content = styled.div`
  z-index: 3;
  top: calc(20% + 5vw);
  max-width: 1200px;
  position: absolute;
  padding: 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const H1 = styled.h1`
  display: inline-block;
  color: ${({ theme }) => theme.lightWhite};
  font-size: clamp(2.5rem, 3vw + 1rem, 4rem);

  letter-spacing: 2.5px;
  font-weight: 700;
  text-align: center;
`
export const BigLogo = styled.img`
  width: 25%;
  height: 25%;
  max-width: 150px;
`

export const P = styled.p`
  margin-top: 3rem;
  color: ${({ theme }) => theme.lightWhite};
  opacity: 1;
  letter-spacing: calc(2px + 0.1vw);
  font-weight: 400;
  font-size: clamp(1.5rem, 2vw + 0.5rem, 2rem);
  text-align: center;
  max-width: 600px;
`

export const BtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Button = styled.button`
  border-radius: 30px;
  background: ${({ theme }) => theme.orange};
  white-space: nowrap;
  margin: 1rem;
  letter-spacing: 3px;
  padding: 0.75rem 3rem;
  color: ${({ theme }) => theme.lightWhite};
  font-size: calc(1rem + 0.1vw);
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  //box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.lightWhite};
    color: ${({ theme }) => theme.orange};
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`

export const ScrollDownIconWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: calc(10rem + 0.5vw + 15vh);
`

export const BottomContainer = styled.section`
  background: ${({ theme }) => theme.orange};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 20vh;
`

export const BottomIconWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const BottomIcon = styled.img`
  max-width: 200px;
`

export const IconDown = styled(FaAngleDoubleDown)`
  color: ${({ theme }) => theme.orange};
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`

export const IconHolder = styled.span`
  font-size: clamp(3rem, 3vw + 1rem, 3.5rem);
  margin-top: 10rem;
  color: #fff;
  display: inline-block;
  animation: bounce 2s ease-in-out infinite;
  @keyframes bounce {
    0%,
    25%,
    55%,
    75%,
    100% {
      transform: translateY(0);
    }
    45% {
      transform: translateY(-20px);
    }
    65% {
      transform: translateY(-10px);
    }
    85% {
      transform: translateY(-5px);
    }
  }
`
