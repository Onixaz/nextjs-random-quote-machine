import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Wrapper = styled.div`
  margin: 3rem auto 0 auto;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Box = styled.div`
  width: 100%;
  max-width: 650px;
  border-radius: 10px;
  box-shadow: 0 0 25px rgba(116, 232, 145, 0.15);
  background: #fff;
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.green};
  border-radius: 10px;
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 550px;
  min-height: 35vh;
  margin: 0 auto;
  padding: 1.5rem;
  width: 100%;
`

export const Quote = styled.p`
  font-size: calc(1.2rem + 0.2vw);
  opacity: 0.95;
  letter-spacing: 1px;
  text-align: center;
  width: 100%;
`

export const Author = styled.div`
  margin-top: 2rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  max-width: 400px;
  font-size: calc(1rem + 0.2vw);
  opacity: 0.65;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonsWrapper = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  width: 100%;

  max-width: 450px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.lightWhite};
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  font-size: 1rem;
  letter-spacing: 1px;
  padding: 0.75rem 1.5rem;
  color: ${({ theme }) => theme.lightWhite};
  background: ${({ theme }) => theme.green};

  &:hover {
    color: ${({ theme }) => theme.green};
    background: ${({ theme }) => theme.lightWhite};
    border: 2px solid ${({ theme }) => theme.green};
  }
`
export const Tweet = styled.a`
  border: 2px solid ${({ theme }) => theme.lightWhite};
  outline: none;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  font-size: 1rem;
  letter-spacing: 1px;
  padding: 0.75rem 1.5rem;
  color: ${({ theme }) => theme.lightWhite};
  background: ${({ theme }) => theme.green};

  &:hover {
    color: ${({ theme }) => theme.green};
    background: ${({ theme }) => theme.lightWhite};
    border: 2px solid ${({ theme }) => theme.green};
  }
`
export const Github = styled.a`
  margin: 2rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.green};
  }
`
