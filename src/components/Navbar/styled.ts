import styled from 'styled-components'

export const LinkText = styled.a`
  cursor: pointer;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.lightWhite};
  text-decoration: none;
  font-weight: 400;
  letter-spacing: 1px;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1rem;
`

export const LogoText = styled.a`
  color: ${({ theme }) => theme.lightWhite};
  font-size: 1.25rem;
  cursor: pointer;
  margin-left: 3.5rem;

  letter-spacing: 1px;

  font-weight: 700;
`

export const LogoOrange = styled.span`
  color: ${({ theme }) => theme.orange};
  font-weight: 700;
  letter-spacing: 1px;
`
export const LogoImg = styled.img`
  position: absolute;
  top: 45%;
  left: 30%;
  transform: translate(-50%, -50%);
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 992px) {
    color: ${({ theme }) => theme.lightWhite};
    display: block;
    position: absolute;

    top: 1.2rem;
    right: 1.2rem;
    font-size: 2rem; //transform: translate(-100%, 60%);
    cursor: pointer;
  }
`

export const Menu = styled.ul`
  display: flex;
  width: 100%;
  max-width: 600px;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 992px) {
    display: none;
  }
`

export const Item = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  //padding: 0 0.8rem;
  margin: 0 0.8rem;
`

export const BtnWrapper = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 95%;
  max-width: 1400px;
  position: relative;
`
export const Nav = styled.nav<{ scrollNav: boolean }>`
  background: ${({ scrollNav, theme }) => (scrollNav ? 'transparent' : theme.brown)};
  transition: all 0.2s ease-in;
  height: 80px;
  width: 100%;

  margin-top: -80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
  top: 0;
  bottom: 0;
  z-index: 99;
  ${LinkText} {
    color: ${({ scrollNav, theme }) => (scrollNav ? theme.primaryBlack : theme.primaryWhite)};
    &:hover {
      transition: all 0.2s ease-in-out;
      color: ${({ theme }) => theme.primaryPurple};
    }
  }
  ${MobileIcon} {
    color: ${({ scrollNav, theme }) => (scrollNav ? theme.primaryText : theme.primaryWhite)};
  }
`
